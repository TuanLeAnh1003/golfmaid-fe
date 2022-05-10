import React, { useState, useEffect } from 'react';
import './Account.css';
import DuyAnAvatar from '../../../Assets/Images/DuyAnAvatar.jpg';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import userApi from '../../../Apis/UserApi';
import autoAvatar from '../../../Assets/Images/avatarclone.jpg';


function Account() {

  const { id } = useParams();

  const [user, setUser] = useState({})

  useEffect(() => {
    userApi.getMe({userId: localStorage.getItem("userid")})
    .then(data => setUser({...data}));

    // const listGender = document.querySelectorAll('.account-info-left-item-gender > input[name="gender"]');
    // console.log(Array.from(listGender));
    // listGender = Array.from(listGender);

    // listGender.forEach((item, index) => {
    //   if(item.attributes[index].value === user.gender) {
    //     item.attributes[index].checked === true;
    //   }
    // })

  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");   
    window.location.reload();
    navigator('./');
  }


  const [selectedImage, setSelectedImage] = useState(null)

  const handleSubmit = () => {

  }

  return (
    <div className="account">
      <div className="account-nav">
        <div className="account-nav-name">{user.firstName}</div>
        <div className="account-nav-update">
          <FontAwesomeIcon className="account-nav-update--icon" icon={solid("pen")} />
          <div className="account-nav-update--title">Sửa hồ sơ</div>
        </div>    
        <div className="account-nav-update">
          <FontAwesomeIcon className="account-nav-update--icon" icon={solid("arrow-right-from-bracket")} />
          <div className="account-nav-update--title logout" onClick={handleLogOut}>Đăng xuất</div>
        </div>       

      </div>

      <form className="account-info">
        <div className="account-info-title">HỒ SƠ CỦA TÔI</div>
        <div className="account-info-desc">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        <div className="account-info-wrap">
          <div className="account-info-left">
            <div className="account-info-left-item">
              <label>Họ:</label>
              <input type="text" placeholder={user.lastName} name="lastName"/>
            </div>
            <div className="account-info-left-item">
              <label>Tên:</label>
              <input type="text" placeholder={user.firstName} name="firstName"/>
            </div>
            <div className="account-info-left-item">
              <label>Email:</label>
              <input type="email" placeholder={user.email} name="email"/>
            </div>
            <div className="account-info-left-item">
              <label>Số điện thoại:</label>
              <input type="text" placeholder={user.phoneNumber} name="phoneNumber"/>
            </div>
            <div className="account-info-left-item">
              <label>Giới tính:</label>
              <div className="account-info-left-item-gender">
                <input type="radio" name="gender" value="Nam"/><label> Nam</label>
                <input type="radio" name="gender" value="Nữ"/><label> Nữ</label>
                <input type="radio" name="gender" value="Khác"/><label> Khác</label>
              </div>
            </div>
            <div className="account-info-left-item">
              <label>Ngày sinh:</label>
              <input 
                type="text" 
                max={Date.now()} 
                placeholder={user.birthday} 
                onBlur={e => e.target.type='text'} 
                onFocus={e => e.target.type='date'}
              />
            </div>
          </div>

          <div className="account-info-right">
            {
              (selectedImage === null) ? (
                <img className="account-info-right-image" src={user.image ? user.image : autoAvatar} alt="" />
              ) : (
                <img className="account-info-right-image" src={window.URL.createObjectURL(selectedImage)} alt="" />
              )
            }
            <input type="file" name="Chọn ảnh" onChange={e => setSelectedImage(e.target.files[0])} />
          </div>
        </div>
        <input className="account-info-submit" type="submit" onClick={handleSubmit} value="LƯU"/>
      </form>  
    </div>
  )
}

export default Account