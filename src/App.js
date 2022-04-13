import React from 'react'
import { Route, Routes } from 'react-router'
import './main.css'

import Layout from './Component/Layout/Layout';
import Result from './Component/Result/Result';
import DetailCar from './Component/Result/DetailCar';
// import SearchBar from './Component/SearchBar/SeacrhBar'
// import Hero from './Component/Hero/Hero'
import SearchCar from './Component/Result/SearchCar';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchCar />} />
          <Route path="/result" element={<Result />} />
          <Route path="/detail/:id" element={<DetailCar />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
