import './App.css';
import Map from './component/Map'

function App() {
  const location ={
    address : "nabeul",
    lat : 36.4513,
    lng : 10.7357
  }
  return (
    <div>
      <Map location={location} zoomLevel = {15} />
    </div>
  );
}

export default App;
