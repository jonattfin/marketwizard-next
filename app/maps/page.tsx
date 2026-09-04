'use client';

import {IndexContext} from "@/app/shared/context/index-context";
import {Grid, Stack} from "@mantine/core";
import {Treemap} from '@mantine/charts';
import {INDICES} from "@/app/shared/helpers";
import {useState} from 'react';
import IndicesTable from "@/app/home/components/indices-table";
import {data} from "@/app/maps/data";

export default function Maps() {
  const [indice, setIndice] = useState<string>(INDICES[0])

  return (
    <>
      <IndexContext value={indice}>
        <Stack>
          <Grid>
            <Grid.Col span={12}>
              <IndicesTable {...{indice, setIndice}}/>
              <div>&nbsp;</div>
              <Treemap data={data}/>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={{base: 12, lg: 9}}>
            </Grid.Col>
            <Grid.Col span={{base: 12, lg: 3}}>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={3}></Grid.Col>
          </Grid>
        </Stack>
      </IndexContext>
    </>
  );
}