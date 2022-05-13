import React, { useState, useEffect } from 'react';
import './Account.css';
import DuyAnAvatar from '../../../Assets/Images/DuyAnAvatar.jpg';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import userApi from '../../../Apis/UserApi';
import autoAvatar from '../../../Assets/Images/avatarclone.jpg';
import { uploadFile, deleteFile } from "../../../firebase/util";
import moment from "moment";

function Account() {
  const [image, setImage] = useState()
  const [progress, setProgress] = useState()
  const [urlImage, setUrlImage] = useState()
  
  const [user, setUser] = useState({})
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const { id } = useParams();

  useEffect(() => {
    userApi.getMe({userId: localStorage.getItem("userid")})
    .then(data => setUser({...data}));

    setLastName(user.lastName)
    setFirstName(user.firstName)
    setPhone(user.phone)
    setGender(user.gender)
    setBirthday(user.birthday)
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");   
    window.location.reload();
    navigator('./');
  }

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(()=> {
    if (image !== null) {
      console.log(image)
      uploadFile(
      image,
      (progress) => {
        setProgress(progress);
      },
      (url) => {
        setUrlImage(url)
        console.log(urlImage);
      }
      );
    }
  },[image]);

  const handleSubmit = async () => {
    await userApi.updateUser({
      userId: localStorage.getItem("userid"),
      image: urlImage,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phone,
      gender: gender,
      birthday: new Date(birthday), 
    }) .then (async (res) => {
      if (res.image !== undefined) {
        alert("Thay đổi thành công")
        // window.location.reload();
      }
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              <input type="text" placeholder={user.lastName} name="lastName" onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className="account-info-left-item">
              <label>Tên:</label>
              <input type="text" placeholder={user.firstName} name="firstName" onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className="account-info-left-item">
              <label>Email:</label>
              <input type="email" style={{backgroundColor: '#a0a0a0', color: '#000'}} placeholder={user.email} name="email" disabled/>
            </div>
            <div className="account-info-left-item">
              <label>Số điện thoại:</label>
              <input type="text" placeholder={user.phoneNumber} name="phoneNumber" onChange={e => setPhone(e.target.value)}/>
            </div>
            <div className="account-info-left-item">
              <label>Giới tính:</label>
              <div className="account-info-left-item-gender">
                <input type="radio" name="gender" value="Nam" onChange={e => setGender(e.target.value)}/><label> Nam</label>
                <input type="radio" name="gender" value="Nữ" onChange={e => setGender(e.target.value)}/><label> Nữ</label>
                <input type="radio" name="gender" value="Khác" onChange={e => setGender(e.target.value)}/><label> Khác</label>
              </div>
            </div>
            <div className="account-info-left-item">
              <label>Ngày sinh:</label>
              <input 
                type="text" 
                max={Date.now()} 
                placeholder={moment(user.birthday).format('DD-MM-YYYY')} 
                onBlur={e => e.target.type='text'} 
                onFocus={e => e.target.type='date'}
                onChange={e => setBirthday(e.target.value)}
              />
            </div>
          </div>

          <div className="account-info-right">
            <input 
              accept="image/*"
              type="file"
              name="add-img"
              id="add-img"
              onChange={handleChangeImage}
            />
            <img
              className="account-info-right-image"
              src={image !== undefined ? window.URL.createObjectURL(image) : (user.image !== undefined ? user.image : 'https://via.placeholder.com/50')}
              alt=''
            />
          </div>
        </div>
        <input className="account-info-submit" onClick={handleSubmit} value="LƯU"/>
      </form>  
    </div>
  )
}

export default Account