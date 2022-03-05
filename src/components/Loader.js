import { ImSpinner5 } from 'react-icons/im';

const Loader = () => {
  return (
    <div className="loader">
      <ImSpinner5 className="loader-icon" />

      <p>Loading...</p>
    </div>
  );
};

export default Loader;
