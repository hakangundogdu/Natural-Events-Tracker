import { HiLocationMarker } from 'react-icons/hi';

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <HiLocationMarker className="location-icon" />
    </div>
  );
};

export default LocationMarker;
