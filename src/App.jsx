import { useState, useEffect } from 'react';
import supabase from './utils/supabase';
import dayjs from 'dayjs';
import HomeComp from './pages/home/HomeComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListComp from './pages/board/ListComp';
import MenuComp from './components/layout/MenuComp';
import ViewComp from './pages/board/ViewComp';
import ErrorPageComp from './pages/error/ErrorPageComp';
import FooterComp from './components/layout/FooterComp';
import './App.css';
import AboutComp from './pages/about/AboutComp';
import BoardComp from './pages/board/BoardComp';
import SwiperComp from './components/layout/SwiperComp';

function App() {
  return (
    <BrowserRouter>
      <MenuComp></MenuComp>
      <SwiperComp></SwiperComp>
      <Routes>
        <Route path="/" element={<HomeComp />}></Route>
        <Route path="/about/*" element={<AboutComp />}></Route>
        <Route path="/*" element={<ErrorPageComp />}></Route>
        <Route path="/board/*" element={<BoardComp />}></Route>
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}
export default App;
