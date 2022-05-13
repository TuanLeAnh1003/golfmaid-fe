import React, { useState, useEffect } from 'react';
import './HouseHelper.css';
import CategoryItem from '../../../Components/Category/CategoryItem/index';
import Post from '../../../Components/Post/index';
import FindHouseHelperImage from './../../../Assets/Images/Find-house-helper-image.svg';
import FamilyImage from './../../../Assets/Images/family-image.svg';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import HouseHelperImage from './../../../Assets/Images/house-helper.svg'
import PostApi from '../../../Apis/PostApi'

function HouseHelper() {
  const { type } = useParams()
  const [listHouseHelper, setListHouseHelper] = useState([])
  const [listFindHouseHelper, setListFindHouseHelper] = useState([])

  const cateList = [
    {
      title: "NGƯỜI GIÚP VIỆC",
      contentList: ["Việc nhà", "Trông trẻ", "Chăm người già", "Chăm người bệnh", "Làm tạp vụ", "Vệ sinh nhà cửa"]
    },
    {
      title: "MỨC LƯƠNG",
      contentList: ["0đ - 2.000.000đ", "2.000.000đ - 4.000.000đ", "4.000.000đ - 8.000.000đ", "8.000.000đ - 12.000.000đ", "12.000.000đ - 15.000.000đ", "15.000.000đ +"]
    },
    {
      title: "CƠ SỞ LÀM VIỆC",
      contentList: ["Cá nhân", "Gia đình", "Công ty"]
    }, 
    {
      title: "Địa điểm",
      contentList: ["TP. Hồ Chí Minh  ", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Bình Dương"]
    },
    {
      title: "Giới tính",
      contentList: ["Nam", "Nữ"]
    }
  ]

  useEffect(() => {
    PostApi.getListHouseHelper()
      .then(res => {
        console.log(res);

        setListHouseHelper(res)
      })
  }, [])

  useEffect(() => {
    PostApi.getListFindHouseHelper()
      .then(res => {
        setListFindHouseHelper(res)
      })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="findHousehelper">
      <div className="findHousehelper__category">
        <div className="findHousehelper__category-gender">
          <Link to='/househelper' className="findHousehelper__category-gender-item findHousehelper__category-gender-item--active">
            TẤT CẢ
          </Link>
        </div>

        <div className="findHousehelper__category-line"></div>

        <div className="findHousehelper__category-type">
          <Link to="/househelper/find" className="findHousehelper__category-type-find">Tìm người giúp việc</Link><br />
          <Link to="/househelper/list" className="findHousehelper__category-type-list">Danh sách người giúp việc</Link>
        </div>


        {cateList.map((element, index) => (
            <div key={index} className="findHousehelper__category-element">
              <div className="findHousehelper__category-line"></div>

              <CategoryItem
                title={element.title}
                contentList={element.contentList}
              ></CategoryItem>
            </div>
        )
        )}
      </div>
      {
        type === 'find' ? (
          <div className="findHousehelper__family">
              <div className="findHousehelper__family-img">
                <img src={FindHouseHelperImage} alt="" className="findHousehelper__family-img--main" />
              </div>
              <p className="findHousehelper__family-title">TUYỂN NGƯỜI GIÚP VIỆC MỚI NHẤT 2022</p>
              <div className="findHousehelper__family-list">
                {
                  listFindHouseHelper.map((element, index) => (
                    <Link to={`/post-detail/${element.postId}`} key={index} className="findHousehelper__family-list-item">
                      <Post
                        img= {element.image}
                        title= {element.title}
                        workplace= {element.detail.workplace}
                        type= {element.type}
                        price= {element.price}
                        address= {element.author[0]?.address.general}
                      ></Post>
                    </Link>
                  ))
                }
              </div>
          </div>
        ) : (
          <div className="findHousehelper__family">
              <div className="findHousehelper__family-img">
                <img src={FindHouseHelperImage} alt="" className="findHousehelper__family-img--main" />
              </div>
              <p className="findHousehelper__family-title">DANH SÁCH NGƯỜI GIÚP VIỆC MỚI NHẤT 2022</p>
              <div className="findHousehelper__family-list">
                {
                  listHouseHelper.map((element, index) => (
                    <Link to={`/post-detail/${element.postId}`} key={index} className="findHousehelper__family-list-item">
                      <Post
                        img= {element.image}
                        title= {element.title}
                        type= {element.type}
                        workplace= {element.detail.workplace}
                        price= {element.price}
                        address= {element.detail.generalAddress}
                      ></Post>
                    </Link>
                  ))
                }
              </div>
          </div>
        )
      }
    </div>
  )
}

export default HouseHelper
