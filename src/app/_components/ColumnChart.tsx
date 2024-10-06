"use client"
import { useEffect } from 'react';
import { Chart } from '@antv/g2';

type P = {
  data: { date: string, metric_value: number }[];
  chartId: string;
}

const ColumnChart = ({ data, chartId }: P) => {
  useEffect(() => {
    const chart = new Chart({
      container: chartId,
      autoFit: true,
      height: 500,
    });

    chart.data(data);

    chart
      .line()
      .encode('x', 'date')
      .encode('y', 'metric_value')

    chart.axis('y', {
      title: 'Amount',
    });

    chart.axis('x', {
      title: 'Date',
    });

    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data, chartId]);

  return <div id={chartId}></div>;
};

export default ColumnChart;