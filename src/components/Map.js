import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const key = process.env.REACT_APP_API_KEY;

  const markers = eventData.map((ev) => {
    return (
      <LocationMarker
        lat={ev.geometry[0].coordinates[1]}
        lng={ev.geometry[0].coordinates[0]}
        onClick={() =>
          setLocationInfo({
            id: ev.id,
            category: ev.categories[0].title,
            title: ev.title,
            date: ev.geometry[0].date,
          })
        }
      />
    );
  });

  return (
    <div className="map-container">
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
      </div>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 38.423733,
    lng: 27.142826,
  },
  zoom: 0,
};

export default Map;
