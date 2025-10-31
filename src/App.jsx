import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';


function App() {   

  return (
    <>
      <Router>
          {/* для прокрутки всегда вверх страницы */}
          {/* <ScrollToTop /> */}
           {/* для прокрутки всегда вверх страницы */}

          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/projects/:pk" element={<DetailPage />} />
            
            {/* Любой другой путь → NotFound */}

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
     
    </>
  )
}

export default App
