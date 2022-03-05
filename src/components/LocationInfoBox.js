const LocationInfoBox = ({ info }) => {
  // let title = info.title.slice(info.title.indexOf('-') + 2);

  return (
    <div className="location-info">
      <h2>{info.category}</h2>
      <p>
        <span className="location-subtitle">Location: </span>
        {info.title}
      </p>
      <p>
        <span className="location-subtitle">Date: </span>{' '}
        {info.date.slice(0, 10)}
      </p>
    </div>
  );
};

export default LocationInfoBox;
