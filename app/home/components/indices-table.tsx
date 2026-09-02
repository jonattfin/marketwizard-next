import {Radio, Group, Flex, Text} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api, {IndicePerfType} from "@/app/api/data";
import {useEffect, useState} from "react";

import classes from './indices-table.module.css';

export type IndicesTableProps = {
  indice: string;
  setIndice: (indice: string) => void;
}

export default function IndicesTable({indice, setIndice}: IndicesTableProps) {
  const [data, setData] = useState<IndicePerfType[]>([]);


  useEffect(() => {
    async function fetchData() {
      const d = await api.fetchIndicesPerformance();
      setData(d);
    }

    fetchData().catch((err) => console.error(err));
  }, []);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} value={item.indice} key={item.indice} >
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
        <Flex pt="md" gap="xs" >
          {cards}
        </Flex>
      </Radio.Group>
    </>
  );
}
