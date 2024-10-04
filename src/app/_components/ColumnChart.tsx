"use client"
import { useEffect } from 'react';
import { Chart } from '@antv/g2';

type P = {
  data: { type: string, value: number}[];
  chartId: string;
}

const ColumnChart = ({ data, chartId }: P) => {
  useEffect(() => {
    const chart = new Chart({
      container: chartId,
      autoFit: true,
      height: 400,
    });
  
    chart.data(data);
    chart.scale('value', {
      nice: true,
    });
  
    chart
      .interval()
      .encode('x', 'type')
      .encode('y', 'value')
      .encode('color', 'type');
  
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data, chartId]);

  return <div id={chartId}></div>;
};

export default ColumnChart;