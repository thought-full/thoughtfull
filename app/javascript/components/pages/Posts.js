import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Map from "./../components/Map";

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
    return (
      <React.Fragment>
        <Container>
          <div className="custom-control custom-switch">
            <input
              onChange={this.togglesMap}
              name="mapView"
              type="checkbox"
              className="custom-control-input"
              id="mapView"
              checked={this.showMap}
            ></input>
            <label className="custom-control-label" htmlFor="mapView">
              {this.state.toggleLabel}
            </label>
          </div>

          {this.state.showMap && (
            <div>
              <h1>Posts</h1>
              <div className="card-flex">
                {posts.reduce((filtered, post) => {
                  if (post.public_view == true) {
                    filtered.push(
                      <div
                        className="card border-primary mb-3 card-width"
                        key={post.id}
                      >
                        <div className="card-header">{post.created_at}</div>
                        <div className="card-body">
                          <h4 className="card-title">{post.date}</h4>
                          <div className="card-text">
                            {post.body}
                            <hr />
                            {post.address}
                            {post.user_id === currentUserId && (
                              <div>
                                <button onClick={() => deletePost(post.id)}>
                                  Delete Post
                                </button>
                                <Link to={`/edit/${post.id}`}>Edit</Link>
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
