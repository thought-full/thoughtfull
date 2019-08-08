import React from "react"
import PropTypes from "prop-types"
import {
  Navbar,
  Nav
} from 'react-bootstrap'


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
        <Navbar bg="light">
          <Nav.Link href="/">Posts</Nav.Link>

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
