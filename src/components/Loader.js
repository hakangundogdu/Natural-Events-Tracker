import spinner from '../assets/805.gif';

const Loader = () => {
  return (
    <div className="loader">
      <h1>Fire Tracker</h1>
      <img src={spinner} alt="Loading" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
