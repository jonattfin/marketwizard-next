import {Badge, Flex, Grid, Table, Tabs} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api, {MarketPerfType} from '@/app/api/data'
import {IconMessageCircle, IconPhoto} from "@tabler/icons-react";
import {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/shared/loading";
import {IndexContext} from "@/app/shared/context/index-context";

const useMarketPerformance = () => {
  const indice = useContext(IndexContext)

  return useQuery({
    queryKey: [`market-performance-${indice}`],
    queryFn: () => api.fetchMarketPerformance(indice)
  });
}

export default function MarketsPerformance() {
  const query = useMarketPerformance();

   if (query.isLoading) {
    return <Loading/>;
  }

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <MarketPerformanceTabs data={query.data} />
        </Grid.Col>
        <Grid.Col span={6}>
          <MarketPerformanceTabs data={query.data}/>
        </Grid.Col>
      </Grid>
      <Flex justify={"flex-end"}>
        <Badge size={"xs"} variant={"dot"}>Updated at: {query.data?.date}</Badge>
      </Flex>
    </>
  )
}

function MarketPerformanceTabs({data}: {data?: MarketPerfType}) {
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
        <MarketPerformanceGrid data={data} />
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

    </Tabs>
  )
}



export function MarketPerformanceGrid({data}: {data?: MarketPerfType}) {
  const rows = data?.items?.map((element) => (
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
