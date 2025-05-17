import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from "./ExternalComponents/Navbar/navbar";
import Home from "./ExternalComponents/Home/home";
import Product from "./ExternalComponents/Products/product";
import Footer from "./ExternalComponents/Footer/footer";
import Paancorner from './InnerComponents/PaanCorner/paan';
import Pharmacy from './InnerComponents/PharmacyCorner/pharmacy';
import Pet from './InnerComponents/PetCare/pet';
import Baby from './InnerComponents/BabyCare/baby';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<><Home /><Product /></>} />
        <Route path='/paanCornerPage' element={<Paancorner />} />
        <Route path='/pharmacyPage' element={<Pharmacy />} />
        <Route path='/petCarePage' element={<Pet />} />
        <Route path='/babyCarePage' element={<Baby />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
