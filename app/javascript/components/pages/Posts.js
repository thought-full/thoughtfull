import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

class Posts extends React.Component {
  render() {
    const { posts, currentUserId, deletePost } = this.props
    return (
      <React.Fragment>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li
                key={post.id}>
                  {post.body}
                  {post.user_id === currentUserId &&
                    <div>
                      <button onClick={() => deletePost(post.id)}>Delete Post</button>
                      <Link to={`/edit/${post.id}`}>Edit</Link>
                    </div>
                  }
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}

export default Posts
