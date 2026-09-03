'use client'

import {Text, Grid, Stack, Button} from '@mantine/core';

export default function Footer() {
  return (
    <>
      <Grid>
        <Grid.Col span={1.5}></Grid.Col>
        <Grid.Col span={3}>
          <Stack>
            <Button variant={"default"}>Markets</Button>
            <Stack>
              <Button variant={"transparent"}>US: NYSE and NASDAQ</Button>
              <Button variant={"transparent"}>UK: FTSE</Button>
              <Button variant={"transparent"}>Germany: DAX</Button>
            </Stack>

          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack>
            <Button variant={"default"}>Guides</Button>
            <Button variant={"transparent"}>What is a lazy portfolio?</Button>
            <Button variant={"transparent"}>How to invest?</Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack>
            <Button variant={"default"}>About us</Button>
            <Button variant={"transparent"}>Plans and pricing</Button>
            <Button variant={"transparent"}>Our people</Button>
            <Button variant={"transparent"}>Contact us</Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={1.5}></Grid.Col>
      </Grid>
      <div>&nbsp;</div>
      <Text c="dimmed">
        The data presented here is fictitious and intended solely for demonstration purposes. We are currently integrating multiple APIs to provide actual data in the future.
      </Text>
      <div>&nbsp;</div>
      Market Wizard is not a financial advisor. The information provided on this website is for educational purposes only. We do not provide investment advice. Please consult a professional before making any financial decisions.
      <div>&nbsp;</div>

    </>
  );
}