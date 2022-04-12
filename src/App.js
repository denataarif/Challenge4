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
    <div className="app_container">
      <Layout>
        <Routes>
          <Route path="/" element={<SearchCar />} />
          <Route path="/result" element={<Result />} />
          <Route path="/detail:id" element={<DetailCar />} />
        </Routes>
      </Layout>

      {/* <div className="bg-light">
        <Header/>
        <Hero/>
      </div>
      <SearchBar/>
      <Result/>
      <Footer/> */}
    </div>
  );
}

export default App;
