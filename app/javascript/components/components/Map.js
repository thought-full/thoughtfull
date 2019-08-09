import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

class Map extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Map
