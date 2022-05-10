import React, { useState } from 'react'
import './NewsCreate.css'
import { Link } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

function NewsCreate() {
  const [type, setType] = useState('')
  const [image, setImage] = useState()
  console.log(image);
  return (
    <form className="news-create">
      <div className="news-create-wrapper">
        <h1>TẠO BÀI VIẾT</h1>
        <p>Tạo bài viết mới GolfMaid ở đây</p>
      </div>
      <div className="news-create-form">
        <div className="news-create-item">
          <p>Loại bài viết</p>
          <div>
            <input type="radio" name="type" value="employer" onChange={e => setType(e.target.value)}/> <label>Tìm người giúp việc</label>
            <input type="radio" name="type" value="employee" onChange={e => setType(e.target.value)}/> <label>Làm người giúp việc</label>
          </div>
        </div>

        {
          type === "employer" && (
            <>
              <div className="news-create-item">
                <p>Tên chủ đề</p>
                <input type="text" name="title" placeholder="Nhập chủ đề ..."/>
              </div>
              <div className="news-create-item">
                <p>Nơi làm việc</p>
                <input type="text" name="workplace" placeholder="Nhập nơi làm việc ..."/>
              </div>
              <div className="news-create-item">
                <p>Giá tiền</p>
                <input type="text" name="price" placeholder="Nhập giá tiền ..."/>
              </div>
              <div className="news-create-item">
                <p>Nội dung</p>
                <input type="text" name="content" placeholder="Nhập nội dung ..."/>
              </div>
              <div className="news-create-item">
                <p>Hình ảnh đính kèm</p>
                <input type="file" onChange={e => setImage(e.target.files[0])}/>
              </div>
              {
                image && (
                <div className="news-create-item">
                  <img className="account-info-right-image" src={window.URL.createObjectURL(image)} alt="" />
                </div>
                )
              }
            </>
          )
        }
        {
          type === 'employee' && (
            <>
              <div className="news-create-item">
                <p>Tên chủ đề</p>
                <input type="text" name="title" placeholder="Nhập chủ đề ..."/>
              </div>
              <div className="news-create-item">
                <p>Chuyên môn</p>
                <input type="text" name="expertise" placeholder="Nhập chuyên môn ..."/>
              </div>
              <div className="news-create-item">
                <p>Ưu điểm</p>
                <input type="text" name="advantage" placeholder="Nhập ưu điểm ..."/>
              </div>
              <div className="news-create-item">
                <p>Kinh nghiệm</p>
                <input type="text" name="experience" placeholder="Nhập kinh nghiệm ..."/>
              </div>
              <div className="news-create-item">
                <p>Nơi làm việc</p>
                <input type="text" name="workplace" placeholder="Nhập nơi làm việc ..."/>
              </div>
              <div className="news-create-item">
                <p>Giá tiền</p>
                <input type="text" name="price" placeholder="Nhập giá tiền ..."/>
              </div>
            </>
          )
        }
      </div>
      <div className="news-create-func">
        <button>TẠO</button>
        <Link className="news-create-func--cancel" to="/admin/news-management">HỦY</Link>
      </div>
    </form>
  )
}

export default NewsCreate
