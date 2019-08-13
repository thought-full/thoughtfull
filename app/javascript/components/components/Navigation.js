import React from "react"
import PropTypes from "prop-types"
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap'
import Logo from './images/tf_icon_transparent.png'

class Navigation extends React.Component {

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
    } = this.props

    return (
      <React.Fragment>
          <Navbar bg="light" sticky="top">
            
            <Nav.Link href="/">
            <img src= {Logo} style= {{margin: -15, width: 45, height: 45}} href="/"></img>
            </Nav.Link>

            <Nav.Link href="/">Posts</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            {logged_in &&
              <Nav.Link href="/new">New Post</Nav.Link>
            }

            {logged_in &&
              <Nav.Link href="/private">Private Posts</Nav.Link>
            }

            {logged_in &&
              <Nav.Link href={sign_out_route}>Sign Out</Nav.Link>
            }
            {!logged_in &&
              <Nav.Link href={sign_in_route}>Sign In</Nav.Link>
            }
        </Navbar>
      </React.Fragment>
    )
  }
}

export default Navigation
