import React, { useEffect } from 'react';
import ListComp from './ListComp';
import { Link, Route, Routes } from 'react-router-dom';
import ViewComp from './ViewComp';

function BoardComp() {
  return (
    <div className="container">
      <div className="d-flex gap-3 justify-content-center">
        <Link to="../board/list">List</Link>
        <Link to="../board/write"> 글 작성</Link>
      </div>
      <ListComp />
      <div className="d-flex justify-content-end">
        <Link to="/write" className="btn btn-primary mb-3">
          글 작성
        </Link>
      </div>

      <Routes>
        <Route path="view" element={<ViewComp />}></Route>
      </Routes>
    </div>
  );
}

export default BoardComp;
