import React, { useEffect, useState } from 'react';
import ListComp from './ListComp';
import { Link, Route, Routes } from 'react-router-dom';
import ViewComp from './ViewComp';
import supabase from '../../utils/supabase';
import WriteComp from './WriteComp';
import { BoardProvider } from '../../context/BoardContext';

function BoardComp() {
  return (
    <BoardProvider>
      <div className="container">
        <div
          className="rounded-4 text-white align-items-center justify-content-center d-flex mb-3"
          style={{ height: '300px', background: '#789' }}
        >
          Test
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <Link className="nav-link" to="../board/list">
            List
          </Link>
          <Link className="nav-link" to="../board/write">
            글 작성
          </Link>
        </div>

        <Routes>
          <Route index element={<ListComp />}></Route>
          <Route path="view" element={<ViewComp />}></Route>
          <Route path="list" element={<ListComp />}></Route>
          <Route path="write" element={<WriteComp />}></Route>
        </Routes>
      </div>
    </BoardProvider>
  );
}

export default BoardComp;
