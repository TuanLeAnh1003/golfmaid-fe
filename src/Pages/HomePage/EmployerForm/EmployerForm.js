import React, { useState, useEffect } from 'react';
import './EmployerForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function EmployerForm() {

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <h1 style={{textAlign: 'center', fontWeight: 'bold', color: '#39A388'}}>Đăng ký tìm người giúp việc</h1>
      <div className="er-form">
        <div className="er-form__col-1">
          <div className="er-form__img">
            <FontAwesomeIcon icon={solid('camera')} style={{fontSize: "133px", color: "#29B490"}}/>
            <input type="file" name="Chọn ảnh" onChange={e => setSelectedImage(e.target.files[0])} />
          </div>

          <div className="er-form__description">
            <h4>Mục tiêu nghề nghiệp</h4>
            <textarea name="description" placeholder="Mục tiêu nghề nghiệp..."></textarea>
          </div>
        </div>
        <div className="er-form__col-2">
          <div className="er-form__input">
            <h4>THÔNG TIN YÊU CẦU</h4>
            <input type="text" name="last-name" placeholder="Họ"/><br />
            <input type="text" name="first-name" placeholder="Tên"/>
            <select name="gender">
              <option value="Không yêu cầu">Không yêu cầu</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <br />
            <input type="date" /><br />
            <input type="text" name="phone" placeholder="Số điện thoại"/><br />
            <input type="text" name="address" placeholder="Địa chỉ"/>
          </div>

          <div className="er-form__input">
            <h4>HỌC VẤN</h4>
            <input type="text" name="university" placeholder="Tên trường"/><br />
            <input type="text" name="faculty" placeholder="Chuyên ngành"/><br />
            <input type="text" name="degree" placeholder="Bằng cấp"/><br />
            <input type="text" name="graduated-type" placeholder="Loại tốt nghiệp"/>
          </div>

          <div className="er-form__input">
            <h4>KINH NGHIỆM LÀM VIỆC</h4>
            <input type="text" name="previous-workplace" placeholder="Nơi từng làm việc"/><br />
            <input type="text" name="description" placeholder="Mô tả công việc"/><br />
            <input type="text" name="achievement" placeholder="Thành tích đạt được"/>
          </div>

          <div className="er-form__input">
            <h4>KỸ NĂNG</h4>
            <input type="text" name="previous-workplace" placeholder="Nơi từng làm việc"/><br />
            <input type="text" name="description" placeholder="Mô tả công việc"/>
          </div>

          <div className="er-form__input">
            <h4>SỨC KHỎE</h4>
            <input type="text" name="previous-workplace" placeholder="Nơi từng làm việc"/><br />
            <input type="text" name="description" placeholder="Mô tả công việc"/>
          </div>

          <div className="er-form__input">
            <h4>SỞ THÍCH</h4>
            <input type="text" name="previous-workplace" placeholder="Nơi từng làm việc"/>
          </div>

          <div className="er-form__buttons">
            <button style={{backgroundColor: "#346F60"}}>XEM TRƯỚC</button>
            <button style={{backgroundColor: "#0E185F"}}>ĐĂNG TIN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployerForm