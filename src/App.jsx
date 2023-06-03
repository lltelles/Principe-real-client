/* eslint-disable no-unused-vars */

import './App.css'
import HideAppBar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import MarketplacePage from './Pages/MarketplacePage';
import Homepage from './Pages/Homepage';
import NeighborhoodPage from './Pages/NeighborhoodPage';
import { Container } from '@mui/material';
import SignupPage from './Pages/SignupPage';
import Footer from './Components/Footer';


function App() {

  return (
    <Container>
      <HideAppBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/marketplace' element={<MarketplacePage/>} />
        <Route path='/neighborhood' element={<NeighborhoodPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <Footer/>
    </Container>

  )
}

export default App;
