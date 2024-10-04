import styles from "./page.module.css";
import { Avatar, Button, Card, Col, Layout, Row } from "antd";
import { DownloadOutlined, FilterOutlined, MenuOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import ColumnChart from "./_components/ColumnChart";
import { ReactNode } from "react";

const cardActions: ReactNode[] = [
  <Row justify="space-between" style={{padding: '10px'}}>
    <Avatar icon={<UserOutlined />} />
    <Button icon={<MessageOutlined />} />
  </Row>
];

const dataA = [
  { type: 'Category 1', value: 38 },
  { type: 'Category 2', value: 52 },
  { type: 'Category 3', value: 61 },
  { type: 'Category 4', value: 145 },
  { type: 'Category 5', value: 48 },
  { type: 'Category 6', value: 38 },
  { type: 'Category 7', value: 38 },
];

const dataB = [
  { type: 'Category 1', value: 38 },
  { type: 'Category 2', value: 52 },
  { type: 'Category 3', value: 61 },
  { type: 'Category 4', value: 145 },
  { type: 'Category 5', value: 48 },
  { type: 'Category 6', value: 38 },
  { type: 'Category 7', value: 38 },
];

export default function Home() {
  return (
    <Layout className={styles.page}>
      <Header className={styles.header}>
        <Title level={4}>App title</Title>
      </Header>
      <Content className={styles.content}>
        <Row justify="space-between" style={{paddingBottom: '15px'}}>
          <Col>
            <Title level={4}>Page title</Title>
          </Col>
          <Col>
            <Row gutter={16}>
              <Col>
                <Button icon={<DownloadOutlined />} iconPosition='end'>Export to PDF</Button>
              </Col>
              <Col>
                <Button icon={<MenuOutlined />} iconPosition='end'>Notes</Button>
              </Col>
              <Col>
                <Button icon={<FilterOutlined />} iconPosition='end'>Filter</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Card title="Chart A" bordered={false} actions={cardActions}>
              <ColumnChart data={dataA} chartId="chartA"/>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Chart B" bordered={false} actions={cardActions}>
              <ColumnChart data={dataB} chartId="chartB" />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
);
}
