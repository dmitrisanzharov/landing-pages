import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


// Pages
import Home from './pages/Home/Home';
import Buffer from './pages/Buffer/buffer-index.js';
import ComponentDevelopmentPage from './pages/ComponentDevelopmentPage/ComponentDevelopmentPage'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />





          {/* PAGES */}
          <Route exact path='/buffer' element={<Buffer />} />
          <Route exact path='/component-development-page' element={<ComponentDevelopmentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
