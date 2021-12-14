import { Route, Routes } from 'react-router-dom';
import './App.css';
import Constellations from './components/Constellations/Constellations';
import Home from './components/Home/Home';
import MainContainer from './containers/MainContainer';

function App() {
  const BASE_URL = "http://localhost:3000"

  return (
    <div className="App">

      <MainContainer />

      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/constellations" element={<Constellations />} />
        <Route path="/constellations/:id" element={ } />
        <Route path="/constellations/tasks/:id" element={ } />
      </Routes> */}
    </div>
  );
}

export default App;
