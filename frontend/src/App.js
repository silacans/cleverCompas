import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and components 

import Home from './Pages/home'
import Dashboard from './Pages/dashBoard'
import Schedule from './Pages/Schedule'
import About from './Pages/about';
import Contact from './Pages/contact';
import FAQ from './Pages/Faq';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className='pages'>
            <Routes>
              <Route path="/"    element={<Home />}  />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Schedule" element={<Schedule />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />


            </Routes>
        
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
