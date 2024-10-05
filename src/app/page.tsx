import styles from "./page.module.css";
import { Avatar, Button, Card, Col, Layout, Row } from "antd";
import { DownloadOutlined, FilterOutlined, MenuOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import ColumnChart from "./_components/ColumnChart";
import { ReactNode } from "react";
import HeartToggleButton from "./_components/HeartToggleButton";

const cardActions: ReactNode[] = [
  <Row justify="space-between" style={{padding: '10px'}}>
    <Avatar icon={<UserOutlined />} />
    <Button icon={<MessageOutlined />} />
  </Row>
];

export default async function Page() {
  const casesFetch = await fetch('https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay?page=1&page_size=100');
  const casesResult = await casesFetch.json();
  const casesData = casesResult.results;

  const deathsFetch = await fetch('https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_deaths_ONSByDay?page=1&page_size=100');
  const deathsResult = await deathsFetch.json();
  const deathsData = deathsResult.results;

  return (
    <Layout className={styles.page}>
      <Header className={styles.header}>
        <Title level={4}>Covid 19</Title>
      </Header>
      <Content className={styles.content}>
        <Row justify="space-between" style={{paddingBottom: '15px'}}>
          <Col>
            <Title level={4}>Charts</Title>
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
            <Card title="Cases by day" extra={<HeartToggleButton entityId="casesChart" />} bordered={false} actions={cardActions}>
              <ColumnChart data={casesData} chartId="casesChart"/>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Deaths by day" extra={<HeartToggleButton entityId="deathsChart" />} bordered={false} actions={cardActions}>
              <ColumnChart data={deathsData} chartId="deathsChart" />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
);
}
