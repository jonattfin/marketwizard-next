import {Grid, Table} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api from '@/app/api/data';

import {IndexContext} from "@/app/shared/context/index-context";
import {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/shared/loading";

export default function SectorPerformance() {
  const indice = useContext(IndexContext)

  const query = useQuery({
    queryKey: [`sector-performance-${indice}`],
    queryFn: () => api.fetchSectorPerformance(indice)
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
    <Grid>
      <Grid.Col span={6}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Sector</Table.Th>
              <Table.Th>Performance</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
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
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Grid.Col>
    </Grid>
  );
}
