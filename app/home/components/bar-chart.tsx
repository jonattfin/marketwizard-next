import { data } from './data';
import { LineChart } from '@mantine/charts';

export function CustomBarChart() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      tickLine="xy"
      yAxisProps={{ tickMargin: 15, orientation: 'right' }}
      xAxisProps={{ tickMargin: 15, orientation: 'top' }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}