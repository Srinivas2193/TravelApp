import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/NavBar/Navbar';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
function App() {
  return (
    <div className="flex flex-col justify-center items-center">
     <header className='text-blue-500 font-bold text-xl'>
      Travel App
     </header>
     <Navbar />
     <div>
      <Router>
        <Routes>
          <Route to='/' element={<Home />} />
          <Route to='/page1' element={<Page1 />} />
          <Route to='/page2' element={<Page2 />} />
          <Route to='/page3' element={<Page3 />} />
          <Route to='/page4' element={<Page4 />} />
        </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
