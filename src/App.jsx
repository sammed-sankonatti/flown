import { useState } from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import {themeSettings} from "../theme"

import NavBar from './widgets/NavBar'
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import UserWidget from './widgets/UserWidget';
import SponsoredAd from './widgets/SponsoredAd';
import Footer from './widgets/Footer';

function App() {

  const mode = useSelector((state)=> state.theme.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

  return (
    <div className='app'>
      <Router>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<UserWidget />} />
            <Route path="/sponsors" element={<SponsoredAd />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
