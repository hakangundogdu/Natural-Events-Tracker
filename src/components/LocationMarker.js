import { HiFire } from 'react-icons/hi';

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <HiFire className="location-icon" />
    </div>
  );
};

export default LocationMarker;
