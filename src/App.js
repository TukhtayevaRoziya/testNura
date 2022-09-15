import Map from './components/map/Map';
import City from './components/city/City';
import WhyWe from './components/whywe/WhyWe';
import Navbar from './components/navbar/Navbar';
import Payment from './components/payment/Payment';
import Projects from './components/projects/Projects';
import Location from './components/location/Location';
import Download from './components/download/Download';
import Technology from './components/technology/Technology';
import EndSection from './components/endSection/EndSection';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Projects/>
      <Location/>
      <City/>
      <WhyWe/>
      <Technology/>
      <Download/>
      <Payment/>
      <Map/>
      <EndSection/>
    </div>
  );
}

export default App;
