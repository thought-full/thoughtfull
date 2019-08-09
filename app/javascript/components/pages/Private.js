import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

class Private extends React.Component {
  render() {
    const { posts, currentUserId, deletePost } = this.props
    return (
      <React.Fragment>
      <h1>Posts</h1>
      <ul>
        {posts.reduce((filtered, post) => {
            if(post.public_view == false && post.user_id === currentUserId){
                filtered.push(
                    <li
                    key={post.id}>
                        {post.body}
                        <div>
                            <button onClick={() => deletePost(post.id)}>Delete Post</button>
                            <Link to={`/edit/${post.id}`}>Edit</Link>
                        </div>
                    </li>
                )
            }
            return filtered
        }, [])}
      </ul>
    </React.Fragment>
    )
  }
}

export default Private
