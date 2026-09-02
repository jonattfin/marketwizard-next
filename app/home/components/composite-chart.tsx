import { buildData } from './data';
import {CompositeChart, LineChart} from '@mantine/charts';
import {random} from "es-toolkit";
import {useMemo} from 'react';

export type CustomBarChartProps = {
  indice: string
}

export function CustomBarChart({indice}: CustomBarChartProps) {

  const newData = useMemo(()=> {
    return buildData().map(d => {
      return {
        Tomatoes: d.Tomatoes * random(0, 1),
        Oranges: d.Tomatoes * random(0, 1),
        Apples: d.Tomatoes * random(0, 1)
      }
    });
  }, [indice]);

  return (
    <>
    <CompositeChart
      h={300}
      data={newData}
      dataKey="date"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
        { name: 'Oranges', color: 'yellow.8', type: 'area' },
      ]}
    />
      </>
  );
}