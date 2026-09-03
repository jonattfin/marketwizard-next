import {Badge, Flex, Table} from '@mantine/core';
import api from '@/app/api/data'
import {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/shared/loading";
import {IndexContext} from "@/app/shared/context/index-context";

const useTopNews = () => {
  const indice = useContext(IndexContext)

  return useQuery({
    queryKey: [`top-news-${indice}`],
    queryFn: () => api.fetchTopNews(indice)
  });

}

export default function TopNews() {
  const query = useTopNews();

  const rows = query.data?.items?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.headline}</Table.Td>
      <Table.Td>{element.source}</Table.Td>
    </Table.Tr>
  ));

  if (query.isLoading) {
    return <Loading/>;
  }

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Headline</Table.Th>
            <Table.Th>Source</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Flex justify={"flex-end"}>
        <Badge size={"xs"} variant={"dot"}>Updated at: {query.data?.date}</Badge>
      </Flex>
    </>

  );
}
