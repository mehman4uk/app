import React from "react";
import { Row, Col, PageHeader } from "antd";

const pageTitle = "PageTitle";
const pageSubtitle = "PageSubtitle";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Row>
          <Col span={12}>
            <PageHeader
              className="site-page-header"
              onBack={() => null}
              title={pageTitle}
              subTitle={pageSubtitle}
            />
          </Col>
        </Row>
      </main>
    );
  }
}

export default Main;
