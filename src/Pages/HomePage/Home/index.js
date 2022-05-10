import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import Advertisement from '../../../Components/Advertisement';
import ContactItem from '../../../Components/ContactItem/index';
import List from '../../../Components/List';
import NewsItem from '../../../Components/NewsItem';
import Post from '../../../Components/Post';
import adImg1 from './../../../Assets/Images/ad-img-1.png';
import adImg2 from './../../../Assets/Images/ad-img-2.png';
import bigImg2 from './../../../Assets/Images/big-img-2.png';
import bigImg from './../../../Assets/Images/big-img.png';
import FamilyImage from "./../../../Assets/Images/family-image.svg";
import HouseHelperImage from "./../../../Assets/Images/house-helper.svg";
import listImg1 from './../../../Assets/Images/list-img-1.png';
import listImg2 from './../../../Assets/Images/list-img-2.png';
import listImg3 from './../../../Assets/Images/list-img-3.png';
import newsItemImg1 from './../../../Assets/Images/news-item-1.svg';
import newsItemImg2 from './../../../Assets/Images/news-item-2.svg';
import newsItemImg3 from './../../../Assets/Images/news-item-3.svg';
import newsItemImg4 from './../../../Assets/Images/news-item-4.svg';
import PostApi from '../../../Apis/PostApi';
import './Home.css';

const contactList = [
  {
    title: "ĐỊA CHỈ",
    icon: "location-dot",
    content: ["64/15 Nguyên Hồng", "Phường 1, Quận Gò Vấp", "Thành phố Hồ Chí Minh"]
  },
  {
    title: "GIỜ MỞ CỬA",
    icon: "clock",
    content: ["Thứ 2 - Thứ 6: 8h00 - 20h00", "Thứ 7: 8h00 - 21h00", "Chủ nhật: 8h00 - 21h30"]
  },
  {
    title: "EMAIL",
    icon: "envelope",
    content: ["golfmaid@gmail.com", "19522009@gm.uit.edu.vn", "nduyan1601@gmail.com"]
  },
  {
    title: "ĐIỆN THOẠI",
    icon: "phone",
    content: ["Anh An - 0938269974", "Anh Phong - 093569712", "Anh Hưng - 0908926975"]
  }
]

const newsList = [
  {
    img: newsItemImg1,
    title: "Tìm người quét dọn",
    desc: "Tôi hiện đang sống ở một mình và thường xuyên về nhà chiều muộn nên nhà cửa lúc nào cũng bụi bặm. Vì thế nên cần một người giúp việc... "
  },
  {
    img: newsItemImg2,
    title: "Tìm người phụ quán",
    desc: "Gia đình tôi vừa mới vay vốn và mở được một cửa hàng quần áo nhỏ. Nên tôi cần tuyển một người phụ giúp trông coi cửa hàng. Yêu cầu:..."
  },
  {
    img: newsItemImg3,
    title: "Tìm người chăm em...",
    desc: "Vợ tôi vừa mới sinh đôi vào cuối năm ngoái, đến nay thì cũng gần được nửa năm, cô ấy sắp phải đi làm lại ở công ty. Do vậy nên tôi cần một..."
  },
  {
    img: newsItemImg4,
    title: "6 cách giữ nhà sạch",
    desc: "Bạn quá bận rộn với công việc và không có nhiều thời gian dọn dẹp nhà cửa? Bạn muốn giữ cho không gian nhà ở của mình luôn sạch sẽ..."
  }
]

function Home() {
  const [trans, setTrans] = useState(0);
  const [num, setNum] = useState(0);
  const [listPost, setListPost] = useState([])

  const move = useRef();
  const product = useRef()

  useEffect(() => {
    PostApi.getPostsAndAuthor()
      .then(res => {
        setListPost(res)
      })
  }, [])

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(num, "effect");
    setTrans(-(window.innerWidth-170)*num);

  }, [num]);

  const handleRightClick = () => {
    if(num < Math.floor(move.current.childNodes.length/4)) setNum((num) => num + 1);
    // console.log(num, "click");
  }

  const handleLeftClick = () => {
    if(num > 0) setNum((num) => num - 1);
    // console.log(num);
  }

  return (
    <div className="home">
      <img src={bigImg} alt="big-img" />
      <div className="home__ads">
        <Advertisement 
          img={adImg1}
          title="TÌM  NGƯỜI CHĂM EM BÉ"
          des="Vợ tôi vừa mới sinh đôi vào cuối năm ngoái, đến nay thì cũng gần được nửa năm, cô ấy sắp phải đi làm lại ở công ty. Do vậy nên tôi cần 1 người giúp việc có thể chăm sóc 2 bé nhà tôi. Bên cạnh đó thì nhà tôi cần có thêm một người nữa để có thể quét dọn nhà cửa, giặt đồ, phơi đồ."
        />

        <Advertisement 
          img={adImg2}
          title="TÌM NGƯỜI PHỤ QUÁN"
          des="Gia đình tôi vừa mới vay vốn và mở được một cửa hàng quần áo nhỏ. Nên tôi cần tuyển một người phụ giúp trông coi cửa hàng. Yêu cầu: chăm chỉ, thật thà, nhanh nhẹn."
        />
      </div>

      {/* DỊCH VỤ */}
      <h1>DỊCH VỤ VỦA CHÚNG TÔI</h1>
      <div className="home__lists">
        <List 
          img={listImg1}
          title="Giúp việc nam"
          list={{
            item1: "Lĩnh vực",
            item2: "Địa điểm",
            item3: "Mức lương",
          }}
        />

        <List 
          img={listImg2}
          title="Giúp việc nữ"
          list={{
            item1: "Lĩnh vực",
            item2: "Địa điểm",
            item3: "Mức lương",
          }}
        />

        <List 
          img={listImg3}
          title="Tìm giúp việc"
          list={{
            item1: "Lĩnh vực",
            item2: "Địa điểm",
            item3: "Mức lương",
          }}
        />
      </div>

      <h1>DANH SÁCH TÌM NGƯỜI GIÚP VIỆC</h1>
      <div className="home__contracts-wrapper">
        <FontAwesomeIcon icon={solid('angle-left')} onClick={handleLeftClick}/>
        
        <div className="home__contracts">
          <ul 
            className="home__contract-wrap"
            style={{left: trans + "px"}}
            ref={move}
          >
            {listPost.map((item, index) => (
              <li key={index}>
                <div className="home__contract-frame">
                  <div className="home__contract">
                    <Post
                        ref={product}
                        img={item.author[0]?.image || "https://via.placeholder.com/200"}
                        title={item.title}
                        type={item.type}
                        price={item.price}
                        address={item.author[0]?.address.general}
                      />
                  </div>    
                </div>
              </li>
            ))}
          </ul>
        </div>

        <FontAwesomeIcon icon={solid('angle-right')} onClick={handleRightClick}/>
      </div>

      <img src={bigImg2} alt="image-poster" style={{margin: "20px 0"}}/>

      <div className="home__bottom">
        <div className="home__bottom-contact">
            <div className="home__bottom-contact-title">THÔNG TIN LIÊN LẠC</div>
            <div className="home__bottom-contact-desc">Nếu bạn có bất kì phản hồi gì về tiệm bánh HachatMacaron, hãy liên hệ ở các thông tin bên dưới:</div>
            <div className="home__bottom-contact-list">
            {
              contactList.map((element, index) => (
                <ContactItem
                  key={index}
                  title={element.title}
                  icon={element.icon}
                  content={element.content}
                ></ContactItem>
              ))
            }
            </div>
        </div>

        <div className="home__bottom-line"></div>

        <div className="home__bottom-news">
          <div className="home__bottom-news-title">TIN TỨC VÀ BÀI VIẾT</div>
          <div className="home__bottom-news-list">
            {
              newsList.map((element, index) => (
                <NewsItem
                  key={index}
                  img={element.img}
                  title={element.title}
                  desc={element.desc}
                ></NewsItem>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home