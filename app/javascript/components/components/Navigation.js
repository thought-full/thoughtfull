import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./images/tf_icon_transparent.png";
import "./navigation.scss";

class Navigation extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
    } = this.props;

    return (
      <React.Fragment>
        <Navbar bg="primary" sticky="top" className="navstyle">
          <Nav.Link href="/">
            <img
              src={Logo}
              style={{ margin: -15, width: 45, height: 45 }}
            ></img>
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/" className="one">
            Posts
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/about" className="two">
            About
          </Nav.Link>

          {logged_in && (
            <Nav.Link style={{ color: "white" }} href="/new" className="three">
              New Post
            </Nav.Link>
          )}

          {logged_in && (
            <Nav.Link style={{ color: "white" }} href="/private">
              Private Posts
            </Nav.Link>
          )}

          {logged_in && (
            <Nav.Link style={{ color: "white" }} href={sign_out_route}>
              Sign Out
            </Nav.Link>
          )}
          {!logged_in && (
            <Nav.Link style={{ color: "white" }} href={sign_in_route}>
              Sign In
            </Nav.Link>
          )}
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;
