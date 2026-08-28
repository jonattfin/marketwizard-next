'use client';

import {Grid, Accordion, Stack, Image, Blockquote} from '@mantine/core';
import {IconPhoto, IconPrinter, IconCameraSelfie, IconInfoCircle} from '@tabler/icons-react';
import IndicesTable from "@/app/home/components/indices-table";

import MarketPerformance from "@/app/home/components/market-performance";
import SectorPerformance from "@/app/home/components/sector-performance";
import TopNews from "@/app/home/components/top-news";
import {CustomBarChart} from "@/app/home/components/composite-chart";
import Header from "@/app/shared/header";
import {YouTubeVideo} from "@/app/home/components/youtube-video";
import {Carousel} from "@mantine/carousel";

export default function Home() {
  return (
    <>
      <Grid>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={10}>
          <Header/>
          <div>&nbsp;</div>
          <Stack>
            <Grid>
              <Grid.Col span={12}>
                <Carousel withIndicators height={400}>
                  <Carousel.Slide>
                    <CustomBarChart/>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <CustomBarChart/>
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <CustomBarChart/>
                  </Carousel.Slide>
                   <Carousel.Slide>
                    <CustomBarChart/>
                  </Carousel.Slide>
                   <Carousel.Slide>
                    <CustomBarChart/>
                  </Carousel.Slide>
                  {/* ...other slides */}
                </Carousel>

                {/*<Image*/}
                {/*  radius="md"*/}
                {/*  h={300}*/}
                {/*  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"*/}
                {/*/>*/}
              </Grid.Col>
              {/*<Grid.Col span={3}><IndicesTable/></Grid.Col>*/}
            </Grid>
            <Grid>
              <Grid.Col span={9}><AccordionSection/></Grid.Col>
              <Grid.Col span={3}>
                <YouTubeVideo/>
                <Blockquote color="blue" cite="– Forrest Gump" icon={<IconInfoCircle/>} mt="xl">
                  Life is like an npm install – you never know what you are going to get.
                </Blockquote>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={9}></Grid.Col>
              <Grid.Col span={3}></Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
      </Grid>
    </>
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
        <Accordion.Panel><SectorPerformance/></Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={20} color="var(--mantine-color-blue-6)"/>}>
          Today's top news
        </Accordion.Control>
        <Accordion.Panel><TopNews/></Accordion.Panel>
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

