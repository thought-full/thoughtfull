import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import Leaflet
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'

// Map TileLayer variables
const stamenTonerTiles =
  "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";
const stamenTonerAttr =
  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export const redIcon = new L.Icon({
  iconUrl: require('./images/leaflet_pin_red.png'),
  iconRetinaUrl: require('./images/leaflet_pin_red.png'),
  popupAnchor: [0, -13.5],
  iconSize: [25, 41],
  shadowUrl: require('./images/shadow.png'),
  shadowSize: [41, 41],
  shadowAnchor: [12, 20]
})

class MapPrivate extends React.Component {
  render() {
    const { posts, currentUserId, deletePost } = this.props;
    let privatePosts = posts.reduce((filtered, post) => {
      if (
        post.public_view === false &&
        post.user_id === currentUserId &&
        post.latitude !== null
      ) {
        filtered.push(post);
      }
      return filtered;
    }, []);

    let minLat = null;
    let maxLat = null;
    let minLong = null;
    let maxLong = null;

    if (privatePosts[0]) {
      minLat = Math.min(
        ...privatePosts.map(post => {
          return parseFloat(post.latitude);
        })
      );
      maxLat = Math.max(
        ...privatePosts.map(post => {
          return parseFloat(post.latitude);
        })
      );
      minLong = Math.min(
        ...privatePosts.map(post => {
          return parseFloat(post.longitude);
        })
      );
      maxLong = Math.max(
        ...privatePosts.map(post => {
          return parseFloat(post.longitude);
        })
      );
    } else {
      minLat = 32.7157;
      maxLat = 32.7157;
      minLong = -117.1611;
      maxLong = -117.1611;
    }

    const centerLat = (minLat + maxLat) / 2;
    const distanceLat = maxLat - minLat;
    const bufferLat = distanceLat * 0.05;
    const centerLong = (minLong + maxLong) / 2;
    const distanceLong = maxLong - minLong;
    const bufferLong = distanceLong * 0.15;
    return (
      <React.Fragment>
        <Container>
          <h1>Map</h1>
          <LeafletMap
            center={[centerLat, centerLong]}
            bounds={[
              [minLat - bufferLat, minLong - bufferLong],
              [maxLat + bufferLat, maxLong + bufferLong]
            ]}
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
                    icon={redIcon}
                  >
                    <Popup>
                      <div
                        className="card border-primary mb-3 card-width"
                        key={post.id}
                      >
                        <div className="card-header">{post.created_at}</div>
                        <div className="card-body">
                          <div className="card-text">
                            {post.body}
                            <hr />
                            {post.address}
                              <div>
                                <button onClick={() => deletePost(post.id)}>
                                  Delete Post
                                </button>
                                <button href={`/edit/${post.id}`}>Edit</button>
                              </div>
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
