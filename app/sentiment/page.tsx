'use client';

import {Badge, Grid, Group, Stack, Text, Timeline, Title} from "@mantine/core";
import {CompositeChart, GaugeChart} from "@mantine/charts";
import {sections, fetchData} from "@/app/sentiment/data";

export default function SentimentPage() {
  return (
    <>
      <Title order={2}>Fear & greed Index</Title>
      <div>&nbsp;</div>
      <Title order={6}>What emotion is driving the market now?</Title>
      <Stack>
        {renderGaugeChart()}
        <div>
          <Text size="lg" tt={"uppercase"}>7 Fear and greed indicators</Text>
        </div>
        {renderMarketMomentum()}
        <div>&nbsp;</div>
        {renderStockPriceStrength()}
        <div>&nbsp;</div>
        {renderStockPriceBreadth()}
        <div>&nbsp;</div>
        {renderPutAndCallOptions()}
        <div>&nbsp;</div>
        {renderMarketVolatility()}
        <div>&nbsp;</div>
      </Stack>
    </>
  );
}

function renderGaugeChart() {
  return (
    <Grid>
      <Grid.Col span={3}>
      </Grid.Col>
      <Grid.Col span={6}>
        <GaugeChart value={72} target={75} sections={sections} thickness={25}/>
      </Grid.Col>
      <Grid.Col span={3}>
        <Timeline bulletSize={24}>
          <Timeline.Item title="Previous close">
            <Badge color={"orange"}>Fear</Badge>
          </Timeline.Item>

          <Timeline.Item title="1 week ago">
            <Badge color={"grey"}>Neutral</Badge>
          </Timeline.Item>

          <Timeline.Item title="1 month ago">
            <Badge color={"grape"}>Greed</Badge>
          </Timeline.Item>

          <Timeline.Item title="1 year ago">
            <Badge color={"red"}>Extreme Fear</Badge>
          </Timeline.Item>
        </Timeline>
      </Grid.Col>
    </Grid>
  )
}

function renderMarketVolatility() {
  const data = fetchData()

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Group justify={"space-between"}>
            <Text size="md" tt={"uppercase"}>Market volatility</Text>
            <Badge color="grey">Neutral</Badge>
          </Group>
          <div>&nbsp;</div>
          <CompositeChart
            h={300}
            data={data}
            dataKey="date"
            maxBarWidth={30}
            series={[
              {name: 'Apples', color: 'red.8', type: 'line'},
              {name: 'Oranges', color: 'yellow.8', type: 'area'},
            ]}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size={"sm"}>
            The most well-known measure of market sentiment is the CBOE Volatility Index, or VIX. The VIX measures
            expected price fluctuations or volatility in the S&P 500 Index options over the next 30 days. The VIX often
            drops on days when the broader market rallies and soars when stocks plunge. But the key is to look at the
            VIX
            over time. It tends to be lower in bull markets and higher when the bears are in control. The Fear & Greed
            Index uses increasing market volatility as a signal for Fear.
          </Text>

        </Grid.Col>
      </Grid>
    </>

  )
}

function renderPutAndCallOptions() {
  const data = fetchData()

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Group justify={"space-between"}>
            <Text size="md" tt={"uppercase"}>Put and call options</Text>
            <Badge color="orange">Fear</Badge>
          </Group>
          <div>&nbsp;</div>
          <CompositeChart
            h={300}
            data={data}
            dataKey="date"
            maxBarWidth={30}
            series={[
              {name: 'Oranges', color: 'yellow.8', type: 'area'},
            ]}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size={"sm"}>
            Options are contracts that give investors the right to buy or sell stocks, indexes or other financial
            securities at an agreed upon price and date. Puts are the option to sell while calls are the option to buy.
            When the ratio of puts to calls is rising, it is usually a sign investors are growing more nervous. A ratio
            above 1 is considered bearish. The Fear & Greed Index uses a bearish options ratio as a signal for Fear.
          </Text>

        </Grid.Col>
      </Grid>
    </>
  )
}

function renderStockPriceBreadth() {
  const data = fetchData()

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Group justify={"space-between"}>
            <Text size="md" tt={"uppercase"}>stock price breadth</Text>
            <Badge color="grey">Neutral</Badge>
          </Group>
          <div>&nbsp;</div>
          <CompositeChart
            h={300}
            data={data}
            dataKey="date"
            maxBarWidth={30}
            series={[
              {name: 'Apples', color: 'red.8', type: 'line'},
              {name: 'Oranges', color: 'yellow.8', type: 'area'},
            ]}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size={"sm"}>
            The market is made up of thousands of stocks. And on any given day, investors are actively buying and
            selling
            them. This measure looks at the amount, or volume, of shares on the NYSE that are rising compared to the
            number of shares that are falling. A low (or even negative) number is a bearish sign. The Fear & Greed Index
            uses decreasing trading volume as a signal for Fear.
          </Text>

        </Grid.Col>
      </Grid>
    </>
  )
}

function renderStockPriceStrength() {
  const data = fetchData()

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Group justify={"space-between"}>
            <Text size="md" tt={"uppercase"}>stock price strength</Text>
            <Badge color="red">Extreme fear</Badge>

          </Group>
          <div>&nbsp;</div>
          <CompositeChart
            h={300}
            data={data}
            dataKey="date"
            maxBarWidth={30}
            series={[
              {name: 'Oranges', color: 'yellow.8', type: 'area'},
            ]}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size={"sm"}>
            A few big stocks can skew returns for the market. It’s important to also know how many stocks are doing well
            versus those that are struggling. This shows the number of stocks on the NYSE at 52-week highs compared to
            those at 52-week lows. When there are many more highs than lows, that’s a bullish sign and signals Greed.
          </Text>

        </Grid.Col>
      </Grid>
    </>
  )
}

function renderMarketMomentum() {
  const data = fetchData()

  return (
    <>
      <Grid>
        <Grid.Col span={9}>
          <Group justify={"space-between"}>
            <Text size="md" tt={"uppercase"}>Market momentum</Text>
            <Badge color="orange">Fear</Badge>
          </Group>
          <div>&nbsp;</div>
          <CompositeChart
            h={300}
            data={data}
            dataKey="date"
            maxBarWidth={30}
            series={[
              {name: 'Apples', color: 'red.8', type: 'line'},
              {name: 'Oranges', color: 'yellow.8', type: 'area'},
            ]}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size={"sm"}>
            It’s useful to look at stock market levels compared to where they’ve been over the past few months. When
            the S&P 500 is above its moving or rolling average of the prior 125 trading days, that’s a sign of
            positive momentum. But if the index is below this average, it shows investors are getting skittish. The
            Fear & Greed Index uses slowing momentum as a signal for Fear and a growing momentum for Greed.
          </Text>

        </Grid.Col>
      </Grid>
    </>
  )
}
