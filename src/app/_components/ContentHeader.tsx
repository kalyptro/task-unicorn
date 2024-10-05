import { Button, Col, Row } from 'antd';
import { DownloadOutlined, FilterOutlined, MenuOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

const ContentHeader = async () => {
  return (
    <>
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
    </>
  );
};

export default ContentHeader;