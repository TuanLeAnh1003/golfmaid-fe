import React, { useState, useEffect } from 'react'
import Post from '../../../Components/Post'
import HouseHelperImage from './../../../Assets/Images/house-helper.svg'
import FamilyImage from './../../../Assets/Images/family-image.svg';
import PostApi from '../../../Apis/PostApi';
import { Link } from 'react-router-dom'

import './Search.css'

function Search({searchContent}) {
  const [type, setType] = useState(0)
  const [listHouseHelper, setListHouseHelper] = useState([])
  const [listFindHouseHelper, setListFindHouseHelper] = useState([])

  useEffect(() => {
    let temp = []
    PostApi.getListHouseHelper()
      .then(res => {
        for (let index = 0; index < res.length; index++) {
          const title = res[index].title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase()
          const search = searchContent.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase()
          if (title.includes(search)) {
            temp.push(res[index])
            console.log(temp);
          }
        }
        setListHouseHelper(temp)
      })
  }, [type])

  useEffect(() => {
    let temp = []
    PostApi.getListFindHouseHelper()
    .then(res => {
      for (let index = 0; index < res.length; index++) {
        const title = res[index].title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase()
        const search = searchContent.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase()
        if (title.includes(search)) {
          temp.push(res[index])
          console.log(temp);
        }
      }
      setListFindHouseHelper(temp)
    })
  }, [type])

  return (
    <div className="search">
      <div className="search-cate">
        <div className="search-cate-product">
          <input className="search-cate-product-input" type="radio" name="type" id="product" onClick={e => setType(0)} checked/>
          <label className="search-cate-product-label">Tìm kiếm công việc</label>
        </div>
        <div className="search-cate-post">
          <input className="search-cate-post-input" type="radio" name="type" id="post" onClick={e => setType(1)}/>
          <label className="search-cate-post-label">Tìm người giúp việc</label>
        </div>
      </div>

      {
        type === 0 ? (
          <>
            <div className="search-title">TÌM THẤY {listFindHouseHelper.length} KẾT QUẢ CHO {searchContent}</div>
            <div className="search-list">
              {
                listFindHouseHelper.map((element, index) => (
                  <div className="search-list-item">
                    <Post 
                      key={index} 
                      img={element.image}
                      title={element.title}
                      workplace={element.detail.workplace}
                      price={element.price}
                      address= {element.author[0]?.address.general}
                    />
                  </div>
                ))
              }
            </div>
          </>
        ) : (
          <>
            <div className="search-title">TÌM THẤY {listHouseHelper.length} KẾT QUẢ CHO {searchContent}</div>
            <div className="search-list">
              {
                listHouseHelper.map((element, index) => (
                  <div className="search-list-item">
                    <Post 
                      key={index} 
                      img={element.image}
                      title={element.title}
                      price={element.price}
                      workplace={element.detail.workplace}
                      address= {element.author[0]?.address.general}
                    />
                  </div>
                ))
              }
            </div>
          </>
        )
      }
        

      <Link to='/househelper' className="search-view-all">XEM TẤT CẢ BÀI KHÁC</Link>
    </div>
  )
}

export default Search