const LocationInfoBox = ({ info }) => {
  // let title = info.title.slice(info.title.indexOf('-') + 2);

  return (
    <div className="location-info">
      <h2>{info.category}</h2>

      <p>
        <strong>Location: </strong> {info.title}
      </p>
      <p>
        <strong>Date: </strong> {info.date.slice(0, 10)}
      </p>
    </div>
  );
};

export default LocationInfoBox;
