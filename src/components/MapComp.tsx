import React from 'react';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';

import { TGeo, TGeoPosition } from '../types/geo-types';

function MyMapComponent({ lat, lng }: TGeoPosition) {
  const map = useMap();

  const location: TGeoPosition = {
    lat: lat,
    lng: lng,
  }

  map.setView(location, 13);
  return null;
}

interface ComponentProps {
  geo: TGeo,
}

function MapComp(props: ComponentProps) {
  const [location, setLocation] = React.useState<TGeoPosition>()

  React.useEffect(() => {
    const loc: TGeoPosition = {
      lat: props.geo.location.lat,
      lng: props.geo.location.lng,
    }

    setLocation(loc);
  }, [props.geo])

  return (
    <div className="h-full mapid">
      <MapContainer
        center={[props.geo.location.lat, props.geo.location.lng] }
        zoom={13}
        scrollWheelZoom={true}
        className="h-full">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.geo.location.lat, props.geo.location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {
          location && <MyMapComponent lat={location.lat} lng={location.lng}/>
        }

      </MapContainer>
    </div>
  )
}

export default MapComp;
