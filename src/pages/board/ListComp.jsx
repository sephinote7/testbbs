import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import { Link, Route, Routes } from 'react-router-dom';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';
import { useBoard } from '../../context/BoardContext';

const { posts } = useBoard();

function ListComp() {
  if (!posts) {
    return <p>게시글 없음</p>;
  }
  console.log(posts);

  return (
    <div className="container py-3">
      <h3 className="mb-3 text-center">Post</h3>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, i) => {
            return (
              <tr>
                <th>{i}</th>
                <td>
                  <Link className="nav-link" to={`/board/view?id=${item.id}`}>
                    {item.title}
                  </Link>
                </td>
                <td>{item.name}</td>
                <td>{dayjs(item.created_at).format('YY.MM.DD')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <ul className="mb-3">
        {posts.map((item, i) => (
          <Link className="nav-link" to={`/board/view?id=${item.id}`}>
            <li key={i}>
              {item.title} / {item.name} / {item.content} /
              {dayjs(item.created_at).format('YYYY-MM-DD dd')}
            </li>
          </Link>
        ))}
      </ul> */}
      <div className="d-flex justify-content-end">
        <Link to="/board/write" className="btn btn-primary mb-3">
          글 작성
        </Link>
      </div>
    </div>
  );
}

export default ListComp;
