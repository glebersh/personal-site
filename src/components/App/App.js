import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import About from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='personal-site' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;