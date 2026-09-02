import {Radio, Group, Flex, Text} from '@mantine/core';
import PerformanceBadge from "@/app/shared/perf-badge";
import api, {IndicePerfType} from "@/app/api/data";
import {useEffect, useState} from "react";

import classes from './indices-table.module.css';

export default function IndicesTable() {
  const [data, setData] = useState<IndicePerfType[]>([]);
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const d = await api.fetchIndicesPerformance();
      setData(d);
    }

    fetchData().catch((err) => console.error(err));
  }, []);

  const cards = data.map((item) => (
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
        value={value}
        onChange={setValue}
      >
        <Flex pt="md" gap="xs" >
          {cards}
        </Flex>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Text>
    </>
  );
}
