import React, { ReactNode } from 'react';
import ColumnChart from './ColumnChart';
import { Avatar, Button, Card, Row } from 'antd';
import HeartToggleButton from './HeartToggleButton';
import { MessageOutlined, UserOutlined } from '@ant-design/icons';

type P = {
  chartId: string;
  title: string;
  url: string;
}

const ChartCard = async ({ chartId, title, url }: P) => {
  const cardActions: ReactNode[] = [
    <Row key={chartId} justify="space-between" style={{ padding: '10px' }}>
      <Avatar icon={<UserOutlined />} />
      <Button icon={<MessageOutlined />} />
    </Row>
  ];

  const response = await fetch(url);
  const result = await response.json();
  const data = result.results;

  return (
    <Card title={title} extra={<HeartToggleButton entityId={chartId} />} bordered={false} actions={cardActions}>
      <ColumnChart data={data} chartId={chartId} />
    </Card>
  );
};

export default ChartCard;