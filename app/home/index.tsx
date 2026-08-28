'use client';

import {Grid, Accordion, Stack} from '@mantine/core';
import {IconPhoto, IconPrinter, IconCameraSelfie} from '@tabler/icons-react';
import IndicesTable from "@/app/home/components/indices-table";
import {Demo} from "@/app/demo";
import TopNewsTable from "@/app/home/components/top-news";
import TopNews from "@/app/home/components/top-news";
import SectorPerformance from "@/app/home/components/sector-performance";
import MarketPerformance from "@/app/home/components/market-performance";

export default function Home() {
  return (
    <Grid>
      <Grid.Col span={1}></Grid.Col>
      <Grid.Col span={10}>
        <Stack>
          <Grid>
            <Grid.Col span={9}><Demo/></Grid.Col>
            <Grid.Col span={3}><IndicesTable/></Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={9}><AccordionSection/></Grid.Col>
            <Grid.Col span={3}></Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={3}></Grid.Col>
          </Grid>
        </Stack>
      </Grid.Col>
      <Grid.Col span={1}></Grid.Col>
    </Grid>
  );
}

function AccordionSection() {
  return (
    <Accordion multiple defaultValue={['photos', 'print', 'camera']}>
      <div>&nbsp;</div>
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={20} color="var(--mantine-color-red-6)"/>}>
          Today's performance by sector
        </Accordion.Control>
        <Accordion.Panel><SectorPerformance/>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={20} color="var(--mantine-color-blue-6)"/>}>
          Today's top news
        </Accordion.Control>
        <Accordion.Panel><TopNewsTable/></Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="camera">
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

