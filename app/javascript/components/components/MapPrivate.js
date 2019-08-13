import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import Leaflet
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

// Map TileLayer variables
const stamenTonerTiles =
  "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";
const stamenTonerAttr =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

class MapPrivate extends React.Component {
  render() {
    const { posts, currentUserId, deletePost } = this.props;
    return (
      <React.Fragment>
        <Container>
          <h1>Map</h1>
          <LeafletMap
            center={[32.715736, -117.161087]}
            zoom={14}
            maxZoom={20}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
            <TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles} />

            {posts.reduce((filtered, post) => {
              if (
                post.public_view === false &&
                post.user_id === currentUserId &&
                post.latitude !== null
              ) {
                filtered.push(
                  <Marker
                    key={post.id}
                    position={[`${post.latitude}`, `${post.longitude}`]}
                  >
                    <Popup>
                      <div
                        className="card border-primary mb-3 card-width"
                        key={post.id}
                      >
                        <div className="card-header">{post.created_at}</div>
                        <div className="card-body">
                          <h4 className="card-title">Title</h4>
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
                    </Popup>
                  </Marker>
                );
              }
              return filtered;
            }, [])}
          </LeafletMap>
        </Container>
      </React.Fragment>
    );
  }
}

export default MapPrivate;