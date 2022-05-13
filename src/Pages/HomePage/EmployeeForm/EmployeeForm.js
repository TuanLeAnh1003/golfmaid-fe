import React, {useState, useEffect} from 'react';
import './EmployerForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { uploadFile, deleteFile } from "../../../firebase/util";
import PostApi from '../../../Apis/PostApi';
import UserApi from '../../../Apis/UserApi';

function EmployeeForm() {
  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState()
  const [urlImage, setUrlImage] = useState()

  const [user, setUser] = useState()
  const [title, setTitle] = useState()
  const [workplace, setWorkplace] = useState()
  const [expertise, setExpertise] = useState()
  const [advantage, setAdvantage] = useState()
  const [experience, setExperience] = useState()
  const [price, setPrice] = useState()
  const [content, setContent] = useState()
  const [injection, setInjection] = useState()
  const [anamnesis, setAnamnesis] = useState()
  const [generalAddress, setGeneralAddress] = useState()
  const [detailAddress, setDetailAddress] = useState()

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    UserApi.getMe({userId: localStorage.getItem("userid")})
    .then(data => {setUser({...data}); console.log(user);})
    .catch(err => {console.log(err);});
  }, [])
  
  const handleSubmit = () => {
    const detail = {
      workplace: workplace,
      expertise: expertise,
      advantage: advantage,
      experience: experience,
      injection: injection,
      anamnesis: anamnesis,
      generalAddress: generalAddress,
      detailAddress: detailAddress
    }

    const name = `${user?.lastName} ${user?.firstName}`
    PostApi.createPost({
      author: name,
      title: title,
      detail: detail,
      price: price,
      content: content,
      type: 'employee',
      image: urlImage
    })
    .then(res => {
      console.log(res);
      alert("Tạo bài viết thành công!!!")
    })
    .catch(err => {
      console.log('err', err);
    })
  }
  return (
    <>
      <h1 style={{textAlign: 'center', fontWeight: 'bold', color: '#39A388'}}>Đăng ký làm người giúp việc</h1>
      <div className="ee-form">
        <div className="ee-form__col-1">
          <div className="ee-form__img">
            {
              image === null ? (
                <FontAwesomeIcon icon={solid('camera')} style={{fontSize: "133px", color: "#29B490"}}/>
              ) : (
                <img style={{maxWidth: '300px'}} src={urlImage} alt="img" />
              )
            }
            <input type="file" name="Chọn ảnh" onChange={e => setImage(e.target.files[0])} />
          </div>
          <div className="ee-form__input">
            <div>Nội dung cụ thể:</div>
            <textarea style={{width: '80%', height: '300px'}} onChange={e => setContent(e.target.value)} />
          </div>

        </div>
        <div className="ee-form__col-2">
          <div className="ee-form__input">
            <h4>Chủ đề</h4>
            <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
          </div>

          <div className="ee-form__input">
            <h4>Thông tin chi tiết</h4>
            <p>Nơi làm việc</p>
            <select name="workplace" onChange={e => setWorkplace(e.target.value)}>
              <option value="">Chọn nơi làm việc</option>
              <option value="Cá nhân">Cá nhân</option>
              <option value="Công ty">Công ty</option>
              <option value="Gia đình">Gia đình</option>
            </select>
            <br />
            <p>Chuyên môn</p>
            <input type="text" name="expertise" placeholder="Vệ sinh nhà cửa, chăm con cái, ..." onChange={e => setExpertise(e.target.value)}/><br />
            <p>Ưu điểm</p>
            <input type="text" name="advantage" placeholder="Khỏe mạnh, thật thà, nhanh nhẹn, ..." onChange={e => setAdvantage(e.target.value)}/>
            <p>Kinh nghiệm</p>
            <input type="text" name="experience" placeholder="1 năm, 2 năm, ..." onChange={e => setExperience(e.target.value)}/>
            <h4>Sức khỏe</h4>
            <p>Bạn đã tiêm bao nhiêu mũi covid?</p>
            <input type="text" name="health" placeholder="2 mũi, 3 mũi, ..." onChange={e => setInjection(e.target.value)}/>
            <p>Tiền sử bệnh</p>
            <input type="text" name="anamnesis" placeholder="bệnh hô hấp, bệnh phổi, ..." onChange={e => setAnamnesis(e.target.value)}/>
          </div>

          <div className="ee-form__input">
            <h4>Mức tiền mong muốn 1 tháng</h4>
            <input type="number" name="price" placeholder="... đ / tháng" onChange={e => setPrice(e.target.value)}/><br />
            <h4>Địa chỉ</h4>
            <p>Địa chỉ lân cận</p>
            <input type="text" placeholder="Quận, huyện, tỉnh, TP, ..." onChange={e => setGeneralAddress(e.target.value)}/>
            <p>Địa chỉ cụ thể</p>
            <input type="text" placeholder="số nhà, đường, quận, tp, ..." onChange={e => setDetailAddress(e.target.value)}/>
          </div>

          <div className="ee-form__buttons">
            <button style={{backgroundColor: "#346F60"}}>XEM TRƯỚC</button>
            <div className="ee-form__buttons-submit" style={{backgroundColor: "#0E185F"}} onClick={handleSubmit}>ĐĂNG TIN</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeForm