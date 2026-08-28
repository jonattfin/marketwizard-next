import {Table, Switch, NumberFormatter} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api, {IndicePerfType} from "@/app/api/data";
import {useEffect, useState} from "react";

export default  function IndicesTable() {
  const [data, setData] = useState<IndicePerfType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const d = await api.fetchIndicesPerformance();
      setData(d);
    }

    fetchData().catch((err) => console.error(err));
  }, []);

  const rows = data?.map((element) => (
    <Table.Tr key={element.indice}>
      <Table.Td>{element.indice}</Table.Td>
      <Table.Td>
        <PerformanceBadge {...{value: element.change}}></PerformanceBadge>
      </Table.Td>
      <Table.Td>
        <NumberFormatter value={element.points} decimalScale={2}/>
      </Table.Td>
      <Table.Td><Switch/></Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Indice</Table.Th>
          <Table.Th>Change</Table.Th>
          <Table.Th>Points</Table.Th>
          <Table.Th>Off/On</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
