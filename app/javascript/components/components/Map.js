import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// Import Leaflet
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// Map TileLayer variables
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';


class Map extends React.Component {
  render() {

    const { posts, currentUserId, deletePost } = this.props

    return (
      <React.Fragment>
        <Container>

          <LeafletMap
            center={[32.715736, -117.161087]}
            zoom={11}
            maxZoom={20}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >

            <TileLayer
              attribution={stamenTonerAttr}
              url={stamenTonerTiles}
            />

            <Marker position={[32.715736, -117.161087]}>
              <Popup>
                Test pop up from San Diego
              </Popup>
            </Marker>

          </LeafletMap>
        </Container>
      </React.Fragment>
    );
  }
}

export default Map



// DONE - Add address column to schema of Posts
// Convert address to lat, long using geosearch
  // Install geosearch
  // Console.log an address and see if you can console.log its lat, long
// Map out array of addresses to pins
// Map out posts json into <Marker> <Popup> components
