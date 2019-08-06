import React from "react"
import PropTypes from "prop-types"

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    this.getPosts()
}
getPosts(){
  fetch("/posts")
  .then( response => {
    return response.json()
  })
  .then( posts => {
    this.setState({ posts })
  })
}
  render () {
    const { posts } = this.state
    return(
      <React.Fragment>
      <h1> Home </h1>
      <ul>
      {posts.map((post) => {
        return(
          <li key = { post.id } > {post.body} </li>
        )
      })}
      </ul>
      </React.Fragment>
    )
  }
}

export default Home
