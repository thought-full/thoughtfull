import React from "react"
import PropTypes from "prop-types"
import { Container } from 'react-bootstrap'

import Map from './../components/Map'

class Location extends React.Component {
  render() {
    const { posts, currentUserId, deletePost } = this.props
    return (
      <React.Fragment>
        <Container>
          <Map {...this.props} />
        </Container>
      </React.Fragment>
    )
  }
}

export default Location
