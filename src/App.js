import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

class App extends React.Component {
  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <Header />
        </Col>
        <Main />
        <Footer />
      </Row>
    );
  }
}

export default App;
