import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


// Pages
import Home from './pages/Home/Home';
import Buffer from './pages/Buffer/index.js';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />





          {/* PAGES */}
          <Route exact path='/buffer' element={<Buffer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
