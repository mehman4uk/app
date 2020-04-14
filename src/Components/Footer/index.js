import React from "react";
import "./index.module.css";
import { Col, Row } from "antd";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Row>
          <Col span={12}></Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
