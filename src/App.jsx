import './App.css';

import Navbar from './assets/component/Navbar';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Homepage from './assets/component/pages/Homepage';
import Menu from './assets/component/pages/Menu';
import Footer from './assets/component/Footer';
import Contact from './assets/component/pages/Contact';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
