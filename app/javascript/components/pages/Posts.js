import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Map from './../components/Map'

class Posts extends React.Component {
  render() {
    const { posts, currentUserId, deletePost } = this.props
    return (
      <React.Fragment>
        <Container>
          <h1>Posts</h1>
          <div className="card-flex">
            {posts.map((post) => {
              return (
                <div
                  className="card border-primary mb-3 card-width"
                  key={post.id}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h4 className="card-title">Primary card title</h4>
                      <p className="card-text">
                        {post.body}
                      {post.user_id === currentUserId &&
                        <div>
                          <button onClick={() => deletePost(post.id)}>Delete Post</button>
                          <Link to={`/edit/${post.id}`}>Edit</Link>
                        </div>
                      }
                      </p>
                    </div>
                </div>
              )
            })}
          </div>
        </Container>
        <Container>
          <Map />
        </Container>
      </React.Fragment>
    )
  }
}

export default Posts
