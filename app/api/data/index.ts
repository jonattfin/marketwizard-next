import {LoremIpsum} from "lorem-ipsum";
import { random} from "es-toolkit";

const lorem = new LoremIpsum();
const nextRandom = () => random(-5, 5);
const nextWords = () => lorem.generateWords(15);
const nextPoints = () => random(1000, 5000);

export type TopNewsType = {
  id: number;
  headline: string;
  source: string
}

function createTopNews(): TopNewsType[] {
  return [
    {source: 'C', headline: nextWords(), id: 1,},
    {source: 'N', headline: nextWords(), id: 2,},
    {source: 'Y', headline: nextWords(), id: 3},
    {source: 'Ba', headline: nextWords(), id: 4,},
    {source: 'Ce', headline: nextWords(), id: 5,},
  ];
}

export type MarketPerfType = {
  id: number;
  performance: number;
  sector: string
}

function createMarketPerformance(): MarketPerfType[] {
  return [
    {sector: 'C', performance: nextRandom(), id: 1,},
    {sector: 'N', performance: nextRandom(), id: 2,},
    {sector: 'Y', performance: nextRandom(), id: 3},
    {sector: 'Ba', performance: nextRandom(), id: 4,},
    {sector: 'Ce', performance: nextRandom(), id: 5,},
  ];
}

export type SectorPerfType = {
  id: number;
  performance: number;
  sector: string
}

function createSectorPerformance(): SectorPerfType[] {
  return [
    {sector: 'C', performance: nextRandom(), id: 1,},
    {sector: 'N', performance: nextRandom(), id: 2,},
    {sector: 'Y', performance: nextRandom(), id: 3},
    {sector: 'Ba', performance: nextRandom(), id: 4,},
    {sector: 'Ce', performance: nextRandom(), id: 5,},
  ];
}

export type IndicePerfType = {
  indice: string;
  points: number;
  change: number;
  position: number;
}

function createIndicesPerformance(): IndicePerfType[] {
  return [
  {position: 6, change: nextRandom(), points: nextPoints(), indice: 'S&P 500'},
  {position: 7, change: nextRandom(), points: nextPoints(), indice: 'Nikkei 225'},
  {position: 39, change: nextRandom(), points: nextPoints(), indice: 'DAX'},
  {position: 56, change:nextRandom(), points: nextPoints(), indice: 'FTSE 100'},
  {position: 58, change: nextRandom(), points: nextPoints(), indice: 'Stoxx 50'},
];
}

export default  {
  fetchTopNews: async () => createTopNews(),
  fetchMarketPerformance: async () => createMarketPerformance(),
  fetchSectorPerformance: async () => createSectorPerformance(),
  fetchIndicesPerformance: async () => createIndicesPerformance(),
}
