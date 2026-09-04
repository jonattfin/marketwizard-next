'use client';

import {Grid, Accordion, Stack, Blockquote} from '@mantine/core';
import {IconPhoto, IconPrinter, IconCameraSelfie, IconInfoCircle} from '@tabler/icons-react';
import IndicesTable from "@/app/home/components/indices-table";

import MarketPerformance from "@/app/home/components/market-performance";
import SectorPerformance from "@/app/home/components/sector-performance";
import TopNews from "@/app/home/components/top-news";
import {CustomBarChart} from "@/app/home/components/composite-chart";
import {YouTubeVideo} from "@/app/home/components/youtube-video";
import {useState} from "react";
import {INDICES} from "@/app/shared/helpers";
import {IndexContext} from "@/app/shared/context/index-context";

export default function Home() {
  const [indice, setIndice] = useState<string>(INDICES[0])

  return (
    <IndexContext value={indice}>
    <Stack>
      <Grid>
        <Grid.Col span={12}>
          <IndicesTable {...{indice, setIndice}}/>
          <div>&nbsp;</div>
          <CustomBarChart/>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={{base: 12, lg: 9}}>
          <AccordionSection/>
        </Grid.Col>
        <Grid.Col span={{base: 12, lg: 3}}>
          <YouTubeVideo/>
          <Blockquote color="blue" cite="– Forrest Gump" icon={<IconInfoCircle/>} mt="xl">
            Life is like an npm install – you never know what you are going to get.
          </Blockquote>
        </Grid.Col>
      </Grid>
      <div>&nbsp;</div>
    </Stack>
    </IndexContext>
  );
}

function AccordionSection() {
  return (
    <Accordion multiple defaultValue={['sector-performance', 'top-news', 'market-performance']}>
      <div>&nbsp;</div>
      <Accordion.Item value="sector-performance">
        <Accordion.Control icon={<IconPhoto size={20} color="var(--mantine-color-red-6)"/>}>
          Today's performance by sector
        </Accordion.Control>
        <Accordion.Panel><SectorPerformance/></Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="top-news">
        <Accordion.Control icon={<IconPrinter size={20} color="var(--mantine-color-blue-6)"/>}>
          Today's top news
        </Accordion.Control>
        <Accordion.Panel><TopNews/></Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="market-performance">
        <Accordion.Control
          icon={<IconCameraSelfie size={20} color="var(--mantine-color-teal-6)"/>}
        >
          Market performance
        </Accordion.Control>
        <Accordion.Panel><MarketPerformance/></Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

