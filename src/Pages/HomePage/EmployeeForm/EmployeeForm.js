import React, {useState} from 'react';
import './EmployerForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


function EmployeeForm() {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="ee-form">
      <div className="ee-form__col-1">
        <div className="ee-form__img">
          <FontAwesomeIcon icon={solid('camera')} style={{fontSize: "133px", color: "#29B490"}}/>
          <input type="file" name="Chọn ảnh" onChange={e => setSelectedImage(e.target.files[0])} />
        </div>

        <div className="ee-form__description">
          <textarea name="description" placeholder="Mô tả công việc..."></textarea>
        </div>
      </div>
      <div className="ee-form__col-2">
        <div className="ee-form__input">
          <h4>Danh mục tuyển dụng</h4>
          <select name="recruit-category">
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>

        <div className="ee-form__input">
          <h4>Thông tin nhà tuyển dụng</h4>
          <p>Bạn là*</p>
          <select name="scale">
            <option value="Cá nhân">Cá nhân</option>
            <option value="Công ty">Công ty</option>
            <option value="Gia đình">Gia đình</option>
          </select>
          <br />
          <input type="text" name="phone" placeholder="Thông tin liên hệ"/><br />
          <input type="text" name="address" placeholder="Nơi làm việc"/>
        </div>

        <div className="ee-form__input">
          <h4>Thông tin nhà tuyển dụng</h4>
          <input type="text" name="title" placeholder="Tiêu đề đăng tin"/><br />
          <input type="text" name="quatity" placeholder="Số lượng tuyển dụng" /><br />
          <select name="method-payment">
            <option value=""></option>
            <option value=""></option>
          </select>
          <br />
          <select name="job-type">
            <option value=""></option>
            <option value=""></option>
          </select>

          <div className="ee-form__row">
            <input type="text" name="min-paycheck" placeholder="Lương tối thiểu"/>
            <input type="text" name="max-paycheck" placeholder="Lương tối đa"/>
          </div>
        </div>

        <div className="ee-form__input">
          <h4>Thông tin thêm</h4>

          <div className="ee-form__row">
            <input type="text" name="min-age" placeholder="Độ tuổi tối thiểu"/>
            <input type="text" name="max-paycheck" placeholder="Độ tuối tối đa" />
          </div>

          <select name="gender">
            <option value="Không yêu cầu" name="not-require">Không yêu cầu</option>
            <option value="Nam" name="male">Nam</option>
            <option value="Nữ" name="female">Nữ</option>
          </select>
          <br />
          <input type="text" placeholder="Học vấn tối thiểu (Không bắt buộc)"/><br />
          <input type="text" placeholder="Kinh nghiệm (Không bắt buộc)"/><br />
          <input type="text" placeholder="Chứng chỉ/ Kỹ năng"/><br />
          <input type="text" placeholder="Sức khỏe"/><br />
          <input type="text" placeholder="Các quyền lợi khác"/>
        </div>

        <div className="ee-form__buttons">
          <button style={{backgroundColor: "#346F60"}}>XEM TRƯỚC</button>
          <button style={{backgroundColor: "#0E185F"}}>ĐĂNG TIN</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeForm