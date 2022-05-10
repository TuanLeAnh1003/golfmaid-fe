import React, { useState } from 'react';
import './SignUp.css';
import Logo from '../../Assets/Images/lo-go.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import UserApi from '../../Apis/UserApi';
import SweetAlert from 'sweetalert2-react';
import Swal from "sweetalert2";
import validator from 'validator';

function SignUp({handleShowSignUp2, handleShowSignIn2}) {
  const handleExitSignUp = () => {   
    handleShowSignUp2(false);
  }

  const handleShowSignInBySignUp = () => {
    handleShowSignIn2(true);
  }

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleConfirmPassword = (confirmPass) => {
    if(confirmPass !== password) {
      setConfirmPassword("");
      // alert("Mật khẩu xác nhận không đúng!");
      Swal.fire(
        'Mật khẩu xác nhận sai!',
        '',
        'warning'
      )
    }
  }

  const checkMail = (a) => {
    validator.isEmail(a) ? setIsValidEmail(true) : setIsValidEmail(false);
  }

  const handleRegister = () => {
    if(lastName === "" || firstName === "" || email === "" || phone === "" || password === "" || confirmPassword === "" || (gender !== "Nam" && gender !== "Nữ")) {
      alert("Trường bắt buộc còn rỗng!");
    } else if(isValidEmail === false) {
      return;
    } else {
      console.log(gender)
      UserApi.register({
        lastName: lastName,
        firstName: firstName,
        email: email,
        phone: phone,
        gender: gender,
        password: password,
      })
      .then(res => {
        if(res==="Đã có tài khoản!") {
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Đã có tài khoản!',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Đăng kí thành công!',
            showConfirmButton: false,
            timer: 1500
          });
        }
        
      })
      .catch(err => Swal.fire('Đăng kí thất bại!'))
    }
  }

  return (
    <div className="signUpWrap" onClick={handleExitSignUp}>
      <div className="signUp" onClick={e => e.stopPropagation()}>

        <div className="signUpWrapper">

          <div></div>

          <div className="signUp_form">
            <FontAwesomeIcon icon={solid('circle-xmark')} onClick={handleExitSignUp}/><br />
            <img src={Logo} alt="Logo" />
            <h1>ĐĂNG KÍ THÀNH VIÊN</h1>
            <div className="signUp_form-name">
              <input type="text" placeholder="Họ (*)" name="lastName" onChange={e => setLastName(e.target.value)}/>
              <input type="text" placeholder="Tên (*)" name="firstName" onChange={e => setFirstName(e.target.value)}/>
            </div>
            
            {/*<input type="date" name="dob" />*/}
            <input type="email" placeholder="Email (*)" name="email" onChange={e => setEmail(e.target.value)} onBlur={e => checkMail(e.target.value)}/>
            {isValidEmail ? "" : <h4 style={{color: "red", fontStyle: 'italic'}}>Email không hợp lệ!</h4>}
            <input type="text" placeholder="Số điện thoại (*)" name="phone" onChange={e => setPhone(e.target.value)}/>
            <select name="Gender" value={gender} onChange={e => setGender(e.target.value)}>
              <option value="Giới tính">-- Giới tính --</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <input type="password" placeholder="Mật khẩu (*)" name="userPassword" onChange={e => setPassword(e.target.value)}/>
            <input type="password" placeholder="Nhập lại mật khẩu (*)" name="confirmPassword" 
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              onBlur={e => handleConfirmPassword(e.target.value)}
            />
            
            <div className="signUp_check">
              <input type="checkbox" name="remember" />
              <label htmlFor="remember">Khách hành đồng ý với các <a href="#">điều khoản</a> thành viên của GoftMaid</label>
            </div>
            <button onClick={handleRegister}>Đăng ký</button>
            <div className="signUp_toSignUp">
              <span>Đã có tài khoản?</span>
              <button onClick={handleShowSignInBySignUp}>Đăng nhập</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SignUp
