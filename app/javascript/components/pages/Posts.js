import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Map from "./../components/Map";
import Votes from "./../components/Votes";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: true,
      toggleLabel: "Posts"
    };
  }
  
  togglesMap = () => {
    this.togglesLabel();
    this.setState({ showMap: !this.state.showMap });
  };

  togglesLabel = () => {
    let { toggleLabel, showMap } = this.state;
    toggleLabel = showMap ? "Posts" : "Map";
    this.setState({ toggleLabel });
  };

  render() {
    const { posts, currentUserId, deletePost } = this.props;

    let addressExistsInPosts = 
      posts.map(post => {
        return Object.values(post)[5];
      })
      .filter(value => {
        return value != "";
      }).length > 0
      ? true
      : false;

    return (
      <React.Fragment>
        <Container>
        {(posts.length > 0 && addressExistsInPosts) && (
          <div className="custom-control custom-switch">
            <input
              onChange={this.togglesMap}
              name="mapView"
              type="checkbox"
              className="custom-control-input"
              id="mapView"
              checked={this.showMap}
            />
            <label className="custom-control-label" htmlFor="mapView">
              Map View
            </label>
          </div>
        )}
          {this.state.showMap && (
            <div>
              <h1>Posts</h1>
              <div className="card-grid">
                {posts.reduce((filtered, post) => {
                  if (
                    post.public_view === true
                    ) {
                    filtered.push(
                      <div
                        className="card border-primary mb-3 card-width"
                        key={post.id}
                      >
                        <div className="card-header card-header-grid">
                          {post.date}
                          <div className="vote-container">
                            <Votes
                              {...this.props}
                              votes={post.votes}
                              handleUpvote={() =>
                                this.props.handleUpvote(post.id)
                              }
                              handleDownvote={() =>
                                this.props.handleDownvote(post.id)
                              }
                            />
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="card-text">
                            {post.body}
                            <hr />
                            {post && post.image_url && (
                              <img
                                src={post.image_url}
                                width="100%"
                                height="100%"
                              />
                            )}
                            {post.user_id === currentUserId && (
                              <div className="divider">
                                <button
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => deletePost(post.id)}
                                >
                                  🗑️ Delete Post
                                </button>
                                <Link
                                  to={`/edit/${post.id}`}
                                  className="btn btn-outline-primary btn-sm"
                                  style={{margin: "0 5%"}}
                                >
                                  ✏️ Edit Post
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return filtered;
                }, [])}
              </div>
            </div>
          )}

          {!this.state.showMap && <Map {...this.props} />}
        </Container>
      </React.Fragment>
    );
  }
}

export default Posts;
