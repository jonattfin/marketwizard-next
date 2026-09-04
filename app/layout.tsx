'use client';

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/carousel/styles.css';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import React from 'react';
import {Grid, mantineHtmlProps, MantineProvider} from '@mantine/core';
import {theme} from '@/theme';
import Header from "@/app/shared/header";
import Footer from "@/app/shared/footer";

// export const metadata = {
//   title: 'Mantine Next.js template',
//   description: 'I am using Mantine with Next.js!',
// };

const queryClient = new QueryClient()

export default function RootLayout({children}: { children: any }) {

  return (
    <html lang="en" {...mantineHtmlProps}>
    <head>
      {/*<ColorSchemeScript/>*/}
      <link rel="shortcut icon" href="/favicon.svg"/>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
    <body>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <MantineProvider theme={theme}>
        <Grid>
          <Grid.Col span={{base: 0, lg: 1.5}}>
          </Grid.Col>
          <Grid.Col span={9}>
            <Header/>
            {children}
            <Footer/>
          </Grid.Col>
          <Grid.Col span={{base: 0, lg: 1.5}}></Grid.Col>
        </Grid>
      </MantineProvider>
    </QueryClientProvider>
    </body>
    </html>
  );
}
