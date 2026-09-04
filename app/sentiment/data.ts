import { GaugeChartSection } from '@mantine/charts';
import {randomInt, range} from "es-toolkit";

export const sections: GaugeChartSection[] = [
  { value: 25, color: 'teal' },
  { value: 45, color: 'yellow' },
  { value: 60, color: 'grape' },
  { value: 75, color: 'orange'},
  { value: 100, color: 'red' },
];

export const fetchData = () => {
  return range(1, 20).map(day => {
    return {
      date: `Mar ${day}`,
      Apples: randomInt(100),
      Tomatoes: randomInt(100),
      Oranges: randomInt(100),
    }
  })
}
