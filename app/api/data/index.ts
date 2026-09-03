import {LoremIpsum} from "lorem-ipsum";
import {random, randomInt, range} from "es-toolkit";
import {INDICES} from "@/app/shared/helpers";

const lorem = new LoremIpsum();
const nextRandom = () => random(-5, 5);
const nextWords = () => lorem.generateWords(15);
const nextPoints = () => random(1000, 5000);

export type TopNewsType = {
  date: string;
  items: {
    id: number;
    headline: string;
    source: string
  } []
}

function createTopNews(indice: string): TopNewsType {
  return {
    date: "Sep 3, 2026 6:26 PM",
    items: [
      {source: 'C', headline: nextWords(), id: 1,},
      {source: 'N', headline: nextWords(), id: 2,},
      {source: 'Y', headline: nextWords(), id: 3},
      {source: 'Ba', headline: nextWords(), id: 4,},
      {source: 'Ce', headline: nextWords(), id: 5,},
    ]
  }
}

export type MarketPerfType = {
  date: string,
  items: {
    id: number;
    performance: number;
    sector: string
  }[]
}

function createMarketPerformance(indice: string): MarketPerfType {
  return {
    date: "Sep 3, 2026 6:26 PM",
    items: [
      {sector: 'Materials', performance: nextRandom(), id: 1,},
      {sector: 'Technology', performance: nextRandom(), id: 2,},
      {sector: 'Basic Materials', performance: nextRandom(), id: 3},
      {sector: 'Industrials', performance: nextRandom(), id: 4,},
      {sector: 'Health Care', performance: nextRandom(), id: 5,},
    ]
  }
}

export type SectorPerfItemType = {
  id: number;
  performance: number;
  sector: string
}

export type SectorPerfType = {
  date: string,
  items: SectorPerfItemType []
}

export const SECTORS = [
  "Basic Materials",
  "Telecom",
  "Consumer Goods",
  "Customer Stapes",
  "Consumer Services",
  "Energy",
  "Financials",
  "Health Care",
  "Industrials",
  "Materials",
  "Utilities",
  "Technology",
];

function createSectorPerformance(indice: string): SectorPerfType {
  return {
    date: "Sep 3, 2026 6:26 PM",
    items: SECTORS.sort().map((sector, index) => {
      return {
        sector,
        performance: nextRandom(),
        id: index
      }
    })
  }
}

export type IndicePerfType = {
  indice: string;
  points: number;
  change: number;
  position: number;
}

function createIndicesPerformance(): IndicePerfType[] {
  return INDICES.map((indice, index) => {
    return {
      indice,
      position: index,
      change: nextRandom(),
      points: nextPoints(),
    }
  })
}

function createIndicePerformance(indice: string) {
  return range(1, 20).map(day => {
    return {
      date: `Mar ${day}`,
      price: randomInt(100),
      volume: randomInt(100),
    }
  })
}

export default {
  fetchTopNews: async (indice: string) => createTopNews(indice),
  fetchMarketPerformance: async (indice: string) => createMarketPerformance(indice),
  fetchSectorPerformance: async (indice: string) => createSectorPerformance(indice),
  fetchIndicesPerformance: async () => createIndicesPerformance(),
  fetchIndicePerformance: async (indice: string) => createIndicePerformance(indice),
}
