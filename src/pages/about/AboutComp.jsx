import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import CompanyComp from './CompanyComp';
import HistoryComp from './HistoryComp';
import SwiperComp from '../../components/layout/SwiperComp';

function aboutComp() {
  return (
    <div>
      <ul className="d-flex justify-content-center gap-3 py-3 align-items-center aboutMenu mb-3">
        <li>
          <NavLink className="nav-link" to="/about/company">
            회사 소개
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about/history">
            연 혁
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route index element={<CompanyComp />}></Route>
        <Route path="company" element={<CompanyComp />}></Route>
        <Route path="history" element={<HistoryComp />}></Route>
      </Routes>
    </div>
  );
}

export default aboutComp;
