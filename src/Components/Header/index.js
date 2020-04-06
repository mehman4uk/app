import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

/* all pages import */
import Auth from "../../Pages/Auth";
import Home from "../../Pages/Home";

let pageTitle = "22Название страницы";

class Header extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Router>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <MailOutlined />
              <Link to="/auth">Auth</Link>
            </Menu.Item>
            <Menu.Item key="login" onClick={this.showModal}>
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
        </Router>
      </>
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
