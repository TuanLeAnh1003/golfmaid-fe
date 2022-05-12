import React, { useState, useEffect } from 'react'
import './NewsManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'
import FamilyImage from "./../../../Assets/Images/family-image.svg";
import HouseHelperImage from "./../../../Assets/Images/house-helper.svg";
import PostApi from '../../../Apis/PostApi'

function NewsManagement() {
  const [hideDeletePopup, setHideDeletePopup] = useState(false)
  const [postList, setPostList] = useState()

  useEffect(() => {
    PostApi.getAll()
      .then(async (res) => {
        await setPostList(res)
      })
  }, [])

  return (
    <div className="news-mng">
      <h1>Quản lý bài viết</h1>
      <div className="news-mng-wrap">
        <Link className="news-mng-create" to='/admin/post-create'>Tạo bài viết</Link>
        <div className="news-mng-search">
          <input type="text" placeholder="Tìm bài viết ..." />
          <FontAwesomeIcon className="news-mng-search--icon" icon={solid('search')} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
              <th>PostId</th>
              <th>Hình ảnh</th>
              <th>Giới tính</th>
              <th>Tên</th>
              <th>Nơi làm việc</th>
              <th>Tiền</th>
              <th>Địa chỉ</th>
              <th>Loại</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {postList?.map((news, i) => (
            <tr key={i}>
              <td>{news.id}</td>
              <td>{news.img}</td>
              <td>{news.gender}</td>
              <td>{news.name}</td>
              <td>{news.workplace}</td>
              <td>{news.price}</td>
              <td>{news.generalAddress}</td>
              <td>{news.type}</td>
              <td>
                <FontAwesomeIcon icon={solid('eye')} />{"  "}
                <Link to="/admin/post-update" style={{textDecoration: 'none', color: '#855446'}}>
                  <FontAwesomeIcon icon={solid('pen')} />{"  "}
                </Link>
                <FontAwesomeIcon icon={solid('trash')} style={{cursor: 'pointer'}} onClick={e => setHideDeletePopup(true)}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {
        hideDeletePopup && (
          <div className="news-mng-delete-wrapper" onClick={e => setHideDeletePopup(false)}>
            <div className="news-mng-delete" onClick={e => e.stopPropagation()}>
              <h3>Xóa bài viết</h3>
              <FontAwesomeIcon className="news-mng-delete-icon" icon={solid('circle-xmark')} onClick={e => setHideDeletePopup(false)}/>
              <p>Bạn có chắc mình muốn xóa bài viết này?</p>
              <button>
                Hủy bỏ
              </button>
              <button>
                Xóa luôn
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default NewsManagement