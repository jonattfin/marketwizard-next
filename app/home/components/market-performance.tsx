import {Grid, Table, Tabs} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api, {MarketPerfType} from '@/app/api/data'
import {useEffect, useState} from "react";
import {IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";

export default function MarketsPerformance() {
  return (
    <Grid>
      <Grid.Col span={6}>
        <MarketPerformanceTabs/>
      </Grid.Col>
      <Grid.Col span={6}>
        <MarketPerformanceTabs/>
      </Grid.Col>
    </Grid>
  )
}

function MarketPerformanceTabs() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12}/>}>
          Top Gainers
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12}/>}>
          Top Losers
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        <MarketPerformanceGrid/>
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

    </Tabs>
  )
}

export function MarketPerformanceGrid() {
  const [data, setData] = useState<MarketPerfType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const d = await api.fetchMarketPerformance();
      setData(d);
    }

    fetchData().catch((err) => console.error(err));
  }, []);

  const rows = data.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.sector}</Table.Td>
      <Table.Td>
        <PerformanceBadge {...{value: element.performance}}></PerformanceBadge>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Sector</Table.Th>
          <Table.Th>Performance</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
