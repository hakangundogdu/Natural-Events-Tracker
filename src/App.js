import { useState, useEffect } from 'react';
import Map from './components/Map';
import './index.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        'https://eonet.gsfc.nasa.gov/api/v3/events?days=30'
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div className="App">
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
