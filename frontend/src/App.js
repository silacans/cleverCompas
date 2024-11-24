import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and components 

import Home from './Pages/home'
import Dashboard from './Pages/dashBoard'
import Schedule from './Pages/Schedule'
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
              


            </Routes>
        
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
