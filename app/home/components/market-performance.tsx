import {Grid, Table, Tabs} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api from '@/app/api/data'
import {IconMessageCircle, IconPhoto } from "@tabler/icons-react";
import {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/shared/loading";
import {IndexContext} from "@/app/shared/context/index-context";

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
  const indice = useContext(IndexContext)

  const query = useQuery({
    queryKey: [`market-performance-${indice}`],
    queryFn: () => api.fetchMarketPerformance(indice)
  });

  const rows = query.data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.sector}</Table.Td>
      <Table.Td>
        <PerformanceBadge {...{value: element.performance}}></PerformanceBadge>
      </Table.Td>
    </Table.Tr>
  ));

  if (query.isLoading) {
    return <Loading/>;
  }

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
