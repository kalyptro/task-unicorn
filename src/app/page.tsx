import styles from "./page.module.css";
import { Col, Layout, Row } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import ChartCard from "./_components/ChartCard";
import ContentHeader from "./_components/ContentHeader";

const casesUrl = "https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay?page=1&page_size=100";
const deathsUrl = "https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_deaths_ONSByDay?page=1&page_size=100";

export default async function Page() {
	return (
		<Layout className={styles.page}>
			<Header className={styles.header}>
				<Title level={4}>Covid 19</Title>
			</Header>
			<Content className={styles.content}>
				<Row justify="space-between" style={{ paddingBottom: '15px' }}>
					<ContentHeader />
				</Row>

				<Row gutter={24}>
					<Col span={12}>
						<ChartCard chartId="casesChart" title="Cases by day" url={casesUrl} />
					</Col>
					<Col span={12}>
						<ChartCard chartId="deathsChart" title="Deaths by day" url={deathsUrl} />
					</Col>
				</Row>
			</Content>
		</Layout>
	);
}
