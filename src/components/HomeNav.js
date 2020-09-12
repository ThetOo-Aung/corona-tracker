import React from "react";
import { Nav, Icon } from "rsuite";
import "./HomeNav.css";
const HomeNav = () => {
  return (
    <div className="HomeNav">
      
      <Nav>
        <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
        <Nav.Item>News</Nav.Item>
        <Nav.Item>Solutions</Nav.Item>
        <Nav.Item>Products</Nav.Item>
        <Nav.Item>About</Nav.Item>
      </Nav>
    </div>
  );
};

export default HomeNav;
