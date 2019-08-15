import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import Private from "./pages/Private";
import About from "./pages/About";
import SignIn from "./components/SignIn";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
    this.getPosts();
  }

  getPosts = () => {
    fetch("/posts")
      .then(response => {
        return response.json();
      })
      .then(posts => {
        this.setState({ posts });
      });
  };

  createPost = attrs => {
    return fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: attrs })
    }).then(response => {
      if (response.status === 201) {
        this.getPosts();
      }
    });
  };

  showPost = id => {
    return fetch(`/posts/${id}`).then(response => {
      return response.json();
    });
  };

  editPost = (id, attrs) => {
    console.log("editing", id, attrs);
    return fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: attrs })
    }).then(response => {
      if (response.status === 200) {
        this.getPosts();
        return response.json();
      } else {
        return alert("Error: Did not update");
      }
    });
  };

  deletePost = id => {
    return fetch(`/posts/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.status === 200) {
          this.getPosts();
        } else {
          return response.json();
        }
      })
      .then(payload => {
        this.setState({ error: payload.error });
      });
  };

  handleUpvote = id => {
    console.log(id);
    fetch(`/posts/${id}/upvote`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT"
    })
      .then(resp => {
        let json = resp.json();
        return json;
      })
      .then(() => {
        const { posts } = this.state;
        const index = posts.findIndex(post => post.id === id);
        if (index >= 0) {
          posts[index].votes++;
          this.setState({
            posts: posts
          });
        }
      });
  };

  handleDownvote = id => {
    fetch(`/posts/${id}/downvote`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT"
    })
      .then(resp => {
        let json = resp.json();
        return json;
      })
      .then(() => {
        const { posts } = this.state;
        const index = posts.findIndex(post => post.id === id);
        if (index >= 0) {
          posts[index].votes--;
          this.setState({
            posts: posts
          });
        }
      });
  };

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
    } = this.props;

    const { posts, error } = this.state;

    return (
      <React.Fragment>
        <Navigation
          posts={posts}
          logged_in={this.props.logged_in}
          sign_in_route={this.props.sign_in_route}
          sign_out_route={this.props.sign_out_route}
        />

        {error && <h2>{error}</h2>}

        <Router>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <div>
                  <Jumbotron />
                  <Posts
                    {...props}
                    currentUserId={current_user_id}
                    posts={posts}
                    deletePost={this.deletePost}
                    handleUpvote={this.handleUpvote}
                    handleDownvote={this.handleDownvote}
                  />
                </div>
              );
            }}
          />

          <Route
            path="/about"
            render={props => {
              return (
                <About
                  {...props}
                  currentUserId={current_user_id}
                  posts={posts}
                  deletePost={this.deletePost}
                />
              );
            }}
          />

          <Route
            path="/location"
            render={props => {
              return (
                <Location
                  {...props}
                  currentUserId={current_user_id}
                  posts={posts}
                  deletePost={this.deletePost}
                />
              );
            }}
          />

          <Route
            path="/private"
            render={props => {
              return (
                <Private
                  {...props}
                  currentUserId={current_user_id}
                  posts={posts}
                  deletePost={this.deletePost}
                />
              );
            }}
          />

          {logged_in && (
            <Switch>
              <Route
                path="/new"
                render={props => {
                  return <NewPost {...props} createPost={this.createPost} />;
                }}
              />

              <Route
                path="/edit/:id"
                render={props => {
                  return (
                    <EditPost
                      {...props}
                      editPost={this.editPost}
                      showPost={this.showPost}
                    />
                  );
                }}
              />
            </Switch>
          )}
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp;
