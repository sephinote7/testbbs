import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WriteComp() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert('작성 완료');
  };

  const [change, setChange] = useState();

  const changeHandeler = (e) => {
    const { name, value } = e.target;
    setChange((prev) => ({ ...prev, [name]: value }));
    // console.log(change);
  };

  return (
    <div>
      <h3 className="my-3 text-center">글 작성</h3>

      <form className="mb-3" onSubmit={submitHandler}>
        <div className="d-flex align-items-center py-3 text">
          <label
            htmlFor="title"
            className="form-label"
            style={{ width: '70px' }}
          >
            제목
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="제목을 입력하세요"
            required
            onChange={changeHandeler}
          />
        </div>
        <div className="d-flex align-items-center py-3">
          <label
            htmlFor="name"
            className="form-label"
            style={{ width: '70px' }}
          >
            작성자
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="작성자를 입력하세요"
            required
            onChange={changeHandeler}
          />
        </div>
        <div className="d-flex align-items-center py-3 mb-2">
          <label
            htmlFor="content"
            className="form-label"
            style={{ width: '70px' }}
          >
            내용
          </label>
          <textarea
            rows="5"
            type="text"
            name="content"
            id="content"
            className="form-control"
            placeholder="내용을 입력하세요"
            required
            onChange={changeHandeler}
          />
        </div>
        <div className="d-flex justify-content-end">
          <div className="btn btn-primary mb-3">글 작성</div>
        </div>
      </form>
    </div>
  );
}

export default WriteComp;
