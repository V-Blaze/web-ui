import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RentalAgreement } from './pages';

import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/RentalAgreement' element={<RentalAgreement />} /> */}
        <Route path='/' element={<RentalAgreement />} />
      </Routes>
    </>
  )
}

export default App