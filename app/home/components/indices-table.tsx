import {Radio, Group, Flex, Text} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api from "@/app/api/data";

import classes from './indices-table.module.css';
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/shared/loading";

export type IndicesTableProps = {
  indice: string;
  setIndice: (indice: string) => void;
}

const useIndicesPerformance = () => {
  return useQuery({
    queryKey: ['indices'],
    queryFn: api.fetchIndicesPerformance
  })
}

export default function IndicesTable({indice, setIndice}: IndicesTableProps) {
  const query = useIndicesPerformance();

  if (query.isLoading) {
    return <Loading/>;
  }

  const cards = query.data?.map((item) => (
    <Radio.Card className={classes.root} value={item.indice} key={item.indice}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator/>
        <div>
          <Text className={classes.label}>{item.indice}</Text>
          <PerformanceBadge value={item.change}/>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={indice}
        onChange={(newValue) => {
          setIndice(newValue);
        }}
      >
        <Flex pt="md" gap="xs">
          {cards}
        </Flex>
      </Radio.Group>
    </>
  );
}
