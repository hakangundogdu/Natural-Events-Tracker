import globe from '../Assets/Globe.png';

const Header = () => {
  return (
    <header className="header">
      <img src={globe} alt="Globe" />
      <h1>Natural Events Tracker</h1>
    </header>
  );
};

export default Header;
