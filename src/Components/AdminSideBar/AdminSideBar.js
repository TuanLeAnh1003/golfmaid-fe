import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';

function AdminSideBar() {
  return (
    <div className="ad-sidebar">
      <div className="ad-sidebar__info">
        <img src="https://via.placeholder.com/50" alt="avatar" />
        <h4>Duy An</h4>
      </div>

      <div className="ad-sidebar__items">
        <Link to="/admin/admin-profile">
          <FontAwesomeIcon icon={solid("pen")} />
          <p>Sửa hồ sơ</p>
        </Link>
        <Link to="/admin" className="ad-sidebar__line">
        </Link>
        <Link to="/admin/post-management">
          <FontAwesomeIcon icon={solid("file")} />
          <p>Bài viết</p>
        </Link>
        <Link to="/admin/user-management">
          <FontAwesomeIcon icon={solid("user-gear")} />
          <p>Thành viên</p>
        </Link>        
        <Link to="/admin/comment-management">
          <FontAwesomeIcon icon={solid("message")} />
          <p>Bình luận</p>
        </Link>
        <Link to="/admin/contract-management">
          <FontAwesomeIcon icon={solid("file-signature")} />
          <p>Hợp đồng</p>
        </Link>
        <Link to="/admin/setting">
          <FontAwesomeIcon icon={solid("gear")} />
          <p>Cài đặt</p>
        </Link>
      </div>
    </div>
  )
}

export default AdminSideBar