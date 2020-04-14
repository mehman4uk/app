import React from "react";
import { Card, Row, Col, PageHeader } from "antd";
import s from "./index.module.css";

class Auth extends React.Component {
  render() {
    return (
      <div className={s.pt32}>
        <Row>
          <Col span={12}>
            <Card title="Контакты">
              <p>
                Если вы хотите предложить нам рекламу или сотрудничество, то по
                всем предложениям писать на почту info@podrubi.ru. Если у вас
                какие то технические проблемы, или не прошел платеж , то пишите
                пожалуйста в тех поддержку внутри сайта, там вам дадут ответ
                специалисты в кратчайший срок.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Auth;
