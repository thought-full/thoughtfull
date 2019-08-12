import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navigation'
import Posts from './pages/Posts'
import Location from './pages/Location'
import NewPost from './pages/NewPost'
import EditPost from './pages/EditPost'
import Private from './pages/Private'

class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      error: null,
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

  showPost = (id) => {
    return fetch(`/posts/${id}`)
    .then(response => {
      return response.json()
    })
  }

  editPost = (id, attrs) => {
    console.log("editing", id, attrs);
    return fetch(`/posts/${id}`, {
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({post: attrs})
    })
    .then(response => {
      if(response.status === 202){
        this.getPosts()
      }else{
        return response.json()
      }
    })
    .then(payload => {
      this.setState({error: payload.error})
    })
  }

  deletePost = (id) => {
    return fetch(`/posts/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if(response.status === 200){
        this.getPosts()
      }else{
        return response.json()
      }
    })
    .then(payload => {
      this.setState({error: payload.error})
    })
  }

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
    } = this.props

    const { posts, error } = this.state

    return (
      <React.Fragment>

        <Navigation
          posts={posts}
          logged_in={this.props.logged_in}
          sign_in_route={this.props.sign_in_route}
          sign_out_route={this.props.sign_out_route}
          />

        {error &&
          <h2>{error}</h2>
        }

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

          <Route
            path="/location"
            render={(props) => {
              return (
                <Location
                  {...props}
                  currentUserId = {current_user_id}
                  posts = {posts}
                  deletePost = {this.deletePost}
                />
              )
            }}
          />

          <Route
            path="/private"
            render={(props) => {
              return(
                <Private
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

              <Route
                path="/edit/:id"
                render={(props) => {
                  return(
                    <EditPost
                    {...props}
                    editPost={this.editPost}
                    showPost={this.showPost}
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
