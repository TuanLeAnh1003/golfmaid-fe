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
      alert("T???o b??i vi???t th??nh c??ng!!!")
    })
    .catch(err => {
      console.log('err', err);
    })
  }
  return (
    <>
      <h1 style={{textAlign: 'center', fontWeight: 'bold', color: '#39A388'}}>????ng k?? l??m ng?????i gi??p vi???c</h1>
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
            <input type="file" name="Ch???n ???nh" onChange={e => setImage(e.target.files[0])} />
          </div>
          <div className="ee-form__input">
            <div>N???i dung c??? th???:</div>
            <textarea style={{width: '80%', height: '300px'}} onChange={e => setContent(e.target.value)} />
          </div>

        </div>
        <div className="ee-form__col-2">
          <div className="ee-form__input">
            <h4>Ch??? ?????</h4>
            <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
          </div>

          <div className="ee-form__input">
            <h4>Th??ng tin chi ti???t</h4>
            <p>N??i l??m vi???c</p>
            <select name="workplace" onChange={e => setWorkplace(e.target.value)}>
              <option value="">Ch???n n??i l??m vi???c</option>
              <option value="C?? nh??n">C?? nh??n</option>
              <option value="C??ng ty">C??ng ty</option>
              <option value="Gia ????nh">Gia ????nh</option>
            </select>
            <br />
            <p>Chuy??n m??n</p>
            <input type="text" name="expertise" placeholder="V??? sinh nh?? c???a, ch??m con c??i, ..." onChange={e => setExpertise(e.target.value)}/><br />
            <p>??u ??i???m</p>
            <input type="text" name="advantage" placeholder="Kh???e m???nh, th???t th??, nhanh nh???n, ..." onChange={e => setAdvantage(e.target.value)}/>
            <p>Kinh nghi???m</p>
            <input type="text" name="experience" placeholder="1 n??m, 2 n??m, ..." onChange={e => setExperience(e.target.value)}/>
            <h4>S???c kh???e</h4>
            <p>B???n ???? ti??m bao nhi??u m??i covid?</p>
            <input type="text" name="health" placeholder="2 m??i, 3 m??i, ..." onChange={e => setInjection(e.target.value)}/>
            <p>Ti???n s??? b???nh</p>
            <input type="text" name="anamnesis" placeholder="b???nh h?? h???p, b???nh ph???i, ..." onChange={e => setAnamnesis(e.target.value)}/>
          </div>

          <div className="ee-form__input">
            <h4>M???c ti???n mong mu???n 1 th??ng</h4>
            <input type="number" name="price" placeholder="... ?? / th??ng" onChange={e => setPrice(e.target.value)}/><br />
            <h4>?????a ch???</h4>
            <p>?????a ch??? l??n c???n</p>
            <input type="text" placeholder="Qu???n, huy???n, t???nh, TP, ..." onChange={e => setGeneralAddress(e.target.value)}/>
            <p>?????a ch??? c??? th???</p>
            <input type="text" placeholder="s??? nh??, ???????ng, qu???n, tp, ..." onChange={e => setDetailAddress(e.target.value)}/>
          </div>

          <div className="ee-form__buttons">
            <button style={{backgroundColor: "#346F60"}}>XEM TR?????C</button>
            <div className="ee-form__buttons-submit" style={{backgroundColor: "#0E185F"}} onClick={handleSubmit}>????NG TIN</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeForm