import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import { Link, useSearchParams } from 'react-router-dom';

function ViewComp() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="container">
      <h2 className="my-3">{posts.title}</h2>
      <hr />
      <div className="d-flex gap-3 justify-content-end">
        <h4>{posts.name} /</h4>
        <h4>{dayjs(posts.created_at).format('YY.MM.DD')}</h4>
      </div>
      <hr />
      <p className="mb-3">{posts.content}</p>

      <div className="d-flex justify-content-end gap-2">
        <Link to="/board/list" className="btn btn-primary mb-3">
          리스트로
        </Link>
        <Link to="/board/modify" className="btn btn-success mb-3">
          수정
        </Link>
        <div className="btn btn-danger mb-3">삭제</div>
      </div>
    </div>
  );
}

export default ViewComp;
