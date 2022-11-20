import React from 'react';
import Gallery from '../Gallery/';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import About from '../About/About';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='personal-site' element={<Layout />}>
          <Route index element={<Gallery />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;