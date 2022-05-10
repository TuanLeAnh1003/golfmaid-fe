import React, { useState } from 'react'
import './CommentManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'
import FamilyImage from "./../../../Assets/Images/family-image.svg";
import HouseHelperImage from "./../../../Assets/Images/house-helper.svg";

function CommentManagement() {
  const [hideDeletePopup, setHideDeletePopup] = useState(false)

  const commentList = [
    {
      commentId: "CM001",
      author: "Duy An",
      postId: "P001",
      content:
        "Người giúp việc tôi thuê được 3 tháng để chăm cho con tôi rồi, làm việc rất chuyên nghiệp và tử tế. ",
    },
    {
      commentId: "CM002",
      author: "Duy An",
      postId: "P001",
      content:
        "Người giúp việc tôi thuê được 3 tháng để chăm cho con tôi rồi, làm việc rất chuyên nghiệp và tử tế. ",
    },
    {
      commentId: "CM003",
      author: "Duy An",
      postId: "P001",
      content:
        "Người giúp việc tôi thuê được 3 tháng để chăm cho con tôi rồi, làm việc rất chuyên nghiệp và tử tế. ",
    },
  ];

  return (
    <div className="news-mng">
      <h1>Quản lý bình luận</h1>
      <div className="news-mng-wrap">
        <div className="news-mng-search">
          <input type="text" placeholder="Tìm bình luận ..." />
          <FontAwesomeIcon className="news-mng-search--icon" icon={solid('search')} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
              <th>CommentId</th>
              <th>Tác giả</th>
              <th>Thuộc về bài đăng</th>
              <th>Nội dung</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {commentList.map((comment, i) => (
            <tr key={i}>
              <td>{comment.commentId}</td>
              <td>{comment.author}</td>
              <td>{comment.postId}</td>
              <td>{comment.content}</td>
              <td>
                <FontAwesomeIcon icon={solid('eye')} />{"  "}
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
              <h3>Xóa bình luận</h3>
              <FontAwesomeIcon className="news-mng-delete-icon" icon={solid('circle-xmark')} onClick={e => setHideDeletePopup(false)}/>
              <p>Bạn có chắc mình muốn xóa bình luận này?</p>
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

export default CommentManagement