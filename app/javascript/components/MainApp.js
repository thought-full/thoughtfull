import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import {
  Navbar,
  Nav
} from 'react-bootstrap'

import Navigation from './components/Navigation'
import Posts from './pages/Posts'
import NewPost from './pages/NewPost'

class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.getPosts()
  }

  getPosts = () => {
    fetch("/posts")
      .then(response => {
        return response.json()
      })
      .then(posts => {
        this.setState({ posts })
      })
  }

  createPost = (attrs) => {
    console.log("Working. These are the attrs", attrs);
    return fetch("/posts", {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({post: attrs})
    })
    .then(response => {
      if(response.status === 201){
        this.getPosts()
      }
    })
  }

  deletePost = (id) => {
    return fetch(`/posts/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if(response.status === 200){
        this.getPosts()
      }
    })
  }

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
    } = this.props

    const { posts } = this.state

    return (
      <React.Fragment>

        <Navigation
          posts={posts}
          logged_in={this.props.logged_in}
          sign_in_route={this.props.sign_in_route}
          sign_out_route={this.props.sign_out_route}
          />

        <Router>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Posts
                  {...props}
                  currentUserId = {current_user_id}
                  posts = {posts}
                  deletePost = {this.deletePost}
                />
              )
            }}
          />
          {logged_in &&
            <Switch>
              <Route
                path="/new"
                render={ (props) => {
                  return(
                    <NewPost
                    {...props}
                    createPost={this.createPost}
                    />
                  )
                }}
              />
            </Switch>
          }
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
