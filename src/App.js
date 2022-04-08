import React from 'react'

import './main.css'

import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import Result from './Component/Result/Result';
import SearchBar from './Component/SearchBar/SeacrhBar'
import Hero from './Component/Hero/Hero'
function App() {
  return (
    <div className="app_container">
      <div className="bg-light">
        <Header/>
        <Hero/>
      </div>
      <SearchBar/>
      <Result/>
      <Footer/>
    </div>
  );
}

export default App;
