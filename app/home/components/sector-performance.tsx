import {Grid, Table} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api, {SectorPerfType} from '@/app/api/data';
import {useEffect, useState} from "react";

export default function SectorPerformance() {
  const [data, setData] = useState<SectorPerfType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const d = await api.fetchSectorPerformance();
      setData(d);
    }

    fetchData().catch((err) => console.error(err));
  }, []);

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.sector}</Table.Td>
      <Table.Td>
        <PerformanceBadge {...{value: element.performance}}></PerformanceBadge>
      </Table.Td>
    </Table.Tr>
  ));

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
