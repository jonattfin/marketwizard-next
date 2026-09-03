import {Badge, Flex, Grid, Table} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api, {SectorPerfItemType} from '@/app/api/data';

import {IndexContext} from "@/app/shared/context/index-context";
import {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/shared/loading";

const useSectorPerformance = () => {
  const indice = useContext(IndexContext)

  return useQuery({
    queryKey: [`sector-performance-${indice}`],
    queryFn: () => api.fetchSectorPerformance(indice)
  });

}

export default function SectorPerformance() {
  const query = useSectorPerformance();

  let firstHalf: SectorPerfItemType[] = [];
  let secondHalf: SectorPerfItemType[] = [];
  if (query.data?.items) {
    const mid = Math.ceil(query.data.items.length / 2);

    firstHalf = query.data.items.slice(0, mid);
    secondHalf = query.data.items.slice(mid);
  }

  const buildRows = (items: SectorPerfItemType[]) => {
    return items?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.sector}</Table.Td>
      <Table.Td>
        <PerformanceBadge {...{value: element.performance}}></PerformanceBadge>
      </Table.Td>
    </Table.Tr>
  ));

  }

  const firstRows = buildRows(firstHalf);
  const secondRows = buildRows(secondHalf);

  if (query.isLoading) {
    return <Loading/>;
  }

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Sector</Table.Th>
                <Table.Th>Performance</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{firstRows}</Table.Tbody>
          </Table>
        </Grid.Col>
        <Grid.Col span={6}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Sector</Table.Th>
                <Table.Th>Performance</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{secondRows}</Table.Tbody>
          </Table>
        </Grid.Col>
      </Grid>
      <Flex justify={"flex-end"}>
        <Badge size={"xs"} variant={"dot"}>Updated at: {query?.data?.date}</Badge>
      </Flex>
    </>
  );
}
