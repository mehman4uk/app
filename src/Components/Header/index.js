import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";
import { Menu } from "antd";
import {
  UserAddOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

/* all pages import */
import Login from "../../Pages/Login";
import Registration from "../../Pages/Registration";
import Home from "../../Pages/Home";
import Support from "../../Pages/Support";

let pageTitle = "Название страницы";

class Header extends React.Component {
  state = {
    current: "login",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="canonical" href="" />
        </Helmet>
        <header className="pt-25">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="login" onClick={this.showModal}>
              <Link to="/">Главная</Link>
            </Menu.Item>
            <Menu.Item key="">
              <UserAddOutlined />
              <Link to="/registration">Регистрация</Link>
            </Menu.Item>
            <Menu.Item key="">
              <UserOutlined />
              <Link to="/login">Войти</Link>
            </Menu.Item>

            <Menu.Item key="" style={{ float: "right" }}>
              <CommentOutlined />
              <Link to="/support">Поддержка</Link>
            </Menu.Item>
          </Menu>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/support" component={Support} />{" "}
      </Router>
    );
  }
}

export default Header;

/*
import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import s from "./index.module.css";



class Navigation extends React.Component {
  render() {
    const menu = [
      { id: 1, name: "Главная", to: "/", status: true },
      { id: 2, name: "Разработка", to: "/dev", status: true },
      { id: 3, name: "Дизайн", to: "/design", status: true },
      { id: 4, name: "Реклама и продвижение", to: "/adwords", status: true },
      { id: 5, name: "Хостинг", to: "/hosting", status: true },
    ];
    const menuList = menu.map((menu) => (
      <BrowserRouter>
        <li key={menu.id}>
          <NavLink to={menu.to} id={menu.id}>
            <span>{menu.name}</span>
          </NavLink>
        </li>
      </BrowserRouter>
    ));
    return <ul> {menuList} </ul>;
  }
}
class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className={s.menu}>
          <Navigation />
        </nav>
      </header>
    );
  }
}

export default Header;
*/
