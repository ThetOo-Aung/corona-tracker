import React from "react";
import { Nav, Icon, Navbar, Dropdown } from "rsuite";
import "./HomeNav.css";



const HomeNav = () => {
  return (
    <div className="HomeNav">
      <Navbar>
        <Navbar.Header>
          <a href="/"><i className="fa fa-globe"></i> &nbsp;Covid-Tracker</a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Dropdown title="About">
              <Dropdown.Item>Company</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown>
            <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
};

export default HomeNav;

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
