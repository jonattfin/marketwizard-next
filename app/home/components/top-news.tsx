import {Table} from '@mantine/core';
import api, {TopNewsType} from '@/app/api/data'
import {useEffect, useState} from "react";

export default function TopNews() {
  const [data, setData] = useState<TopNewsType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const d = await api.fetchTopNews();
      setData(d);
    }

    fetchData().catch((err) => console.error(err));
  }, []);

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.headline}</Table.Td>
      <Table.Td>{element.source}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Headline</Table.Th>
          <Table.Th>Source</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
