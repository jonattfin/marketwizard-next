import { data } from './data';
import {CompositeChart, LineChart} from '@mantine/charts';

export function CustomBarChart() {
  return (
    <CompositeChart
      h={300}
      data={data}
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
  );
}