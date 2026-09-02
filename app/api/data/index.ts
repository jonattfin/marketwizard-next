import {LoremIpsum} from "lorem-ipsum";
import {random} from "es-toolkit";
import {INDICES} from "@/app/shared/helpers";

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
    {sector: 'Materials', performance: nextRandom(), id: 1,},
    {sector: 'Technology', performance: nextRandom(), id: 2,},
    {sector: 'Basic Materials', performance: nextRandom(), id: 3},
    {sector: 'Industrials', performance: nextRandom(), id: 4,},
    {sector: 'Health Care', performance: nextRandom(), id: 5,},
  ];
}

export type SectorPerfType = {
  id: number;
  performance: number;
  sector: string
}

function createSectorPerformance(): SectorPerfType[] {
  return [
    {sector: 'Materials', performance: nextRandom(), id: 1,},
    {sector: 'Technology', performance: nextRandom(), id: 2,},
    {sector: 'Basic Materials', performance: nextRandom(), id: 3},
    {sector: 'Industrials', performance: nextRandom(), id: 4,},
    {sector: 'Health Care', performance: nextRandom(), id: 5,},
  ];
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

export default {
  fetchTopNews: async () => createTopNews(),
  fetchMarketPerformance: async () => createMarketPerformance(),
  fetchSectorPerformance: async () => createSectorPerformance(),
  fetchIndicesPerformance: async () => createIndicesPerformance(),
}
