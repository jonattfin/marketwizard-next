import {CompositeChart} from '@mantine/charts';
import {IndexContext} from "@/app/shared/context/index-context";
import {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import api from "@/app/api/data";
import Loading from "@/app/shared/loading";

export function CustomBarChart() {
  const indice = useContext(IndexContext)

  const query = useQuery({
    queryKey: [`indice-performance-${indice}`],
    queryFn: () => api.fetchIndicePerformance(indice)
  });

  if (query.isLoading)
    return <Loading />;

  return (
    <>
      <CompositeChart
        h={300}
        data={query?.data || []}
        dataKey="date"
        xAxisLabel="Date"
        yAxisLabel="Amount"
        maxBarWidth={30}
        series={[
          {name: 'tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar'},
          {name: 'apples', color: 'red.8', type: 'line'},
          {name: 'oranges', color: 'yellow.8', type: 'area'},
        ]}
      />
    </>
  );
}