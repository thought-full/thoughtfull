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

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    const { posts } = this.state

    return (
      <React.Fragment>

        <Navbar bg="light">
          <Nav.Link href="/">Posts</Nav.Link>
          <Nav.Link href="/new">New Post</Nav.Link>
        </Navbar>

        <Router>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Posts {...props} posts = {posts}/>
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
        <div className="TopNav">
          {logged_in &&
            <div>
              <a href={sign_out_route}>Sign Out</a>
            </div>
          }
          {!logged_in &&
            <div>
              <a href={sign_in_route}>Sign In</a>
            </div>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default MainApp
