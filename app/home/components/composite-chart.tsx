import {AreaChart, CandlestickChart, CompositeChart} from '@mantine/charts';
import {IndexContext} from "@/app/shared/context/index-context";
import {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loading from "@/app/shared/loading";
import {Grid} from "@mantine/core";

const useCustomChart = () => {
  const indice = useContext(IndexContext)

  return useQuery({
    queryKey: [`indice-performance-${indice}`],
    queryFn: async () => {
      const response = await fetch(`/api/indice-performance?indice=${indice}`);
      return await response.json();
    }
  });
}

export function CustomBarChart() {
  const query = useCustomChart();

  if (query.isLoading)
    return <Loading/>;

  return (
    <>
      <CompositeChart
        h={180}
        data={query.data}
        dataKey="date"
        series={[{name: 'price', color: 'red.6', type: 'area'}]}
        composedChartProps={{syncId: 'groceries'}}
      />
      <div>&nbsp;</div>
      <CompositeChart
        h={180}
        data={query.data}
        dataKey="date"
        composedChartProps={{syncId: 'groceries'}}
        series={[{name: 'volume', color: 'green.6', type: 'bar'}]}
      />
      <div>&nbsp;</div>
    </>
  )
}