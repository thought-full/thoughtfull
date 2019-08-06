import React from "react"
import PropTypes from "prop-types"

class Posts extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <React.Fragment>
        <h1> Posts </h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id} > {post.body} </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}

export default Posts
