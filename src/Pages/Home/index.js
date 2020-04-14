import React from "react";
import s from "./index.module.css";

class Auth extends React.Component {
  render() {
    return (
      <>
        <div className={s.notification}>
          Работаем как обычно: доставка безопасна, все сервисы — онлайн
        </div>
      </>
    );
  }
}

export default Auth;
