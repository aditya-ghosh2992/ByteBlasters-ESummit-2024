import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/hero/HeroSection';
import ComparisonSection from './components/table/ComparisonSection';
import FooterSection from './components/foot/Footer'; 


function App() {
  return (
    <div>
      <Navbar />
      <ComparisonSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
