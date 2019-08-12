import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

class Posts extends React.Component {
  render() {
    const { posts, currentUserId, deletePost } = this.props
    return (
      <React.Fragment>
      <Container>
      <h1>Posts</h1>
      <div className="card-flex">
      {posts.reduce((filtered, post) => {
        if(post.public_view == true){
          filtered.push(
            <div
              className="card border-primary mb-3 card-width"
              key={post.id}
            >
              <div className="card-header">{post.created_at}</div>
              <div className="card-body">
              <h4 className="card-title">Title</h4>
              <div className="card-text">
                {post.body}
                <hr />
                {post.address}
                {post.user_id === currentUserId &&
                  <div>
                    <button onClick={() => deletePost(post.id)}>Delete Post</button>
                    <Link to={`/edit/${post.id}`}>Edit</Link>
                  </div>
                }
              </div>
              </div>
            </div>
          )
        }
        return filtered
      }, [])}
      </div>
      </Container>
    </React.Fragment>
    )
  }
}

export default Posts
