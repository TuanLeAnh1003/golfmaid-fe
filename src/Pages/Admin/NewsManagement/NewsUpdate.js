import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FamilyImage from "./../../../Assets/Images/family-image.svg";
import parse from "html-react-parser";

function NewsUpdate() {
  const [image, setImage] = useState();

  const news = {
    title: "Phillipe Auguste",
    subHeader:
      "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý...",
    author: "Duy An",
    content:
      "Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng... Bắt nguồn từ câu chuyện về hoàng đế Philippe Auguste (Philipe II) - Quốc vương đầu tiên của nước Pháp với tham vọng gây dựng...",
    datetime: "31/03/2022 lúc 10:43 chiều",
  };

  const post = {
    id: "P001",
    img: FamilyImage,
    gender: "female",
    title: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  };

  return (
    <form className='news-create'>
      <div className='news-create-wrapper'>
        <h1>SỬA BÀI VIẾT</h1>
        <p>Sửa bài viết mới Golf Maid ở đây</p>
      </div>
      <div className='news-create-form'>
        <div className='news-create-item'>
          <p>Tên chủ đề</p>
          <input type='text' name='title' placeholder={post.title} />
        </div>
        <div className='news-create-item'>
          <p>Nơi làm việc</p>
          <input type='text' name='workplace' placeholder={post.workplace} />
        </div>
        <div className='news-create-item'>
          <p>Giá tiền</p>
          <input type='text' name='price' placeholder={post.price} />
        </div>
        {
          post.content && (
            <div className='news-create-item'>
              <p>Nội dung</p>
              <input type='text' name='content' placeholder={post.content} />
            </div>
          )
        }
        {
          post.expertise && (
            <div className='news-create-item'>
              <p>Chuyên môn</p>
              <input
                type='text'
                name='expertise'
                placeholder={post.expertise}
              />
            </div>
          )
        }
        {
          post.advantage && (
            <div className='news-create-item'>
              <p>Ưu điểm</p>
              <input type='text' name='advantage' placeholder={post.advantage} />
            </div>
          )
        }
        {
          post.experience && (
            <div className='news-create-item'>
              <p>Kinh nghiệm</p>
              <input
                type='text'
                name='experience'
                placeholder={post.experience}
              />
            </div>
          )
        }
        <div className='news-create-item'>
          <p>Hình ảnh đính kèm</p>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        {image && (
          <div className='news-create-item'>
            <img
              className='account-info-right-image'
              src={window.URL.createObjectURL(image) || post.img}
              alt=''
            />
          </div>
        )}
      </div>
      <div className='news-create-func'>
        <button>XÁC NHẬN</button>
        <Link className='news-create-func--cancel' to='/admin/news-management'>
          HỦY
        </Link>
      </div>
    </form>
  );
}

export default NewsUpdate;
