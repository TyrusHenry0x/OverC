import { Route, Routes } from 'react-router-dom';
import './App.css';
import Constellations from './components/Constellations/Constellations';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Constellations />

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
