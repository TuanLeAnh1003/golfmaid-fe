import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import CommentApi from '../../../Apis/CommentApi';
import PostApi from '../../../Apis/PostApi';
import Post from "../../../Components/Post";
import smallImg from "./../../../Assets/Images/post-detail-1.svg";
import "./PostDetail.css";

function PostDetail() {
  const [listPost, setListPost] = useState([])
  const [listComment, setListComment] = useState([])
  const postId = useParams();

  useEffect(() => {
    PostApi.getPostsAndAuthor()
      .then(res => {
        setListPost(res)
      })
  }, [])

  useEffect(() => {
    CommentApi.getCommentsByPostId({postId: postId.postId})
      .then(res => {
        setListComment(res)
      })
  }, [])

  // -------------------------
  const [trans1, setTrans1] = useState(0);
  const [num1, setNum1] = useState(0);
  const move1 = useRef();
  const product1 = useRef();

  useEffect(() => {
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(product);
    setTrans1(-(1300 + 38) * num1);
  }, [num1]);

  const handleRightClick1 = () => {
    if (num1 < Math.floor(move1.current.childNodes.length / 4))
      setNum1((num1) => num1 + 1);
    // console.log(num, "click");
  };

  const handleLeftClick1 = () => {
    if (num1 > 0) setNum1((num1) => num1 - 1);
    // console.log(num);
  };

  // -----------------------------------
  const [productCount, setProductCount] = useState(1);
  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrement = () => {
    if (productCount > 0) setProductCount(productCount - 1);
  };

  return (
    <div className='pro-detail'>
      {listPost.map(
        (element) =>
          element.postId === postId.postId && (
            <>
              <ul className='pro-detail__type'>
                <li>
                  {element.type === "employee"
                    ? "Người giúp việc"
                    : "Người thuê"}
                </li>
                <li>{element.workplace}</li>
                <li>{element.generalAddress}</li>
              </ul>

              <hr />

              {
                element.type === 'employer' ? (
                  <>
                    <div className='pro-detail__brief'>
                      <div className='pro-detail__imgs'>
                        <img src={element.image} alt='img' />
                        <div className='pro-detail__more-img'>
                          <img src={smallImg} alt='smallImg' />
                          <img src={smallImg} alt='smallImg' />
                          <img src={smallImg} alt='smallImg' />
                          <img src={smallImg} alt='smallImg' />
                        </div>
                      </div>

                      <div className='pro-detail__more'>
                        <h3>{element.title}</h3>
                        <div className='pro-detail__status'>
                          <span>
                            Liên hệ: <b>0938269983</b> - Chị Duy An
                          </span>
                          <span>
                            Nơi làm việc: <b>64/13 Nguyên Hồng, Phường 1</b>
                          </span>
                        </div>

                        <h3>{element.price}đ</h3>

                        <div className='dotted-line'></div>

                        <p className='pro-detail__description'>
                          {element.content}
                        </p>

                        <div className='dotted-line'></div>

                        <div className='pro-detail__order'>
                          <div className='pro-detail__quantity'>
                            <h4>SỐ LƯỢNG</h4>
                            <div className='pro-detail__count'>
                              <span onClick={handleDecrement}>-</span>
                              <input
                                type='number'
                                value={productCount}
                                onChange={(e) => setProductCount(e.current.value)}
                              />
                              <span onClick={handleIncrement}>+</span>
                            </div>
                          </div>
                        </div>

                        <div className='dotted-line'></div>

                        <div className='pro-detail__buttons'>
                          <div className='add-to-cart'>
                            <button>LƯU TIN</button>
                            <button>LIÊN HỆ NGAY</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='pro-detail__info'>
                      <div className='pro-detail__info-titles'>
                        <div className='pro-detail__info-title'>CHI TIẾT</div>
                      </div>

                      <div className='pro-detail__info-content'>
                        <div className='pro-detail__info-first'>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("credit-card")} />
                            <p>Hình thức trả lương: Theo tháng</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("mars-and-venus")} />
                            <p>Giới tính: {element.author[0]?.gender}</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("graduation-cap")} />
                            <p>Trình độ học vấn: Không yêu cầu</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("square-minus")} />
                            <p>Độ tuổi tối thiểu: 18 tuổi</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("maximize")} />
                            <p>Độ tuổi tối đa: 65 tuổi</p>
                          </div>
                        </div>

                        <div className='erect-line'></div>

                        <div className='pro-detail__info-second'>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("clock")} />
                            <p>Loại công việc: Toàn thời gian</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("file")} />
                            <p>Kinh nghiệm: Không yêu cầu</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("location-dot")} />
                            <p>Tên công ty: Tại nhà</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("shield")} />
                            <p>Các quyền lợi khác: Tăng lương</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("certificate")} />
                            <p>Chứng chỉ / kỹ năng: Không yêu cầu</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pro-detail__employee">
                      <div className="pro-detail__employee-top">
                        <p>Người giúp việc</p>
                      </div>
                      
                      <div className="pro-detail__employee-profile">
                        <div className="pro-detail__employee-profile-left">
                          <h2>{element.author[0].firstName} {element.author[0].lastName}</h2>
                          <div>
                            <FontAwesomeIcon icon={solid("mars-and-venus")} />
                            <p>Giới tính: {element.author[0]?.gender === "male" ? "Nam" : "Nữ"}</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={solid("cake-candles")} />
                            <p>Tuổi: 21</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={solid("phone")} />
                            <p>Số điện thoại: {element.author[0].phoneNumber}</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={solid("location-dot")} />
                            <p>Địa chỉ: {element.author[0].address.general}</p>
                          </div>
                        </div>
                        <img style={{ width: '300px', height: 'fit'}} src={element.image} alt="profile-img" />
                      </div>

                      <h3>MỤC TIÊU NGHỀ NGHIỆP</h3>
                      <p>
                        Giúp việc nhà sáng đến tồi về làm việc 8 - 9 tiếng tại nhà Khách hàng
                        (không ở lại) vào những ngày và khung giờ Khách hàng đăng ký. Công việc gồm:
                        Dọn nhà, nấu ăn, rửa bát, chăm sóc trẻ và một số yêu cầu khác nếu phát sinh.
                      </p>

                      <h3>HỌC VẤN</h3>
                      <p>TRƯỜNG TRUNG CẤP NGHỀ GÒ VẤP, TP. HỒ CHÍ MINH</p>
                      <p>Chuyên ngành: <b>Nấu ăn</b></p>
                      <p>Bằng cấp: <b>Trung cấp nghề</b> </p>
                      <p>Loại tốt nghiệp: <b>Khá</b></p>
                      <h3>KINH NGHIỆM LÀM VIỆC</h3>
                      <p>
                        Chuyên môn: 
                        <b>
                          {element.detail.expertise}
                        </b>
                      </p>
                      <p>Cơ sở làm việc: <b>{element.detail.workplace}</b> </p>
                      <p>Ưu điểm bản thân: <b>{element.detail.advantage}</b> </p>
                      <p>Thời gian kinh nghiệm: <b>{element.detail.experience}</b> </p>
                    </div>
                    <div className="pro-detail__employee-top"></div>
                  </>
                )
              }


              <hr style={{ width: "50%", margin: "50px auto" }} />
            </>
          )
      )}

      {/* ------------------------------------- */}

      <div className='pro-detail__relation'>
        <h2>THÔNG TIN LIÊN QUAN</h2>
        <div className='pro-detail__products-wrapper'>
          <FontAwesomeIcon
            icon={solid("angle-left")}
            onClick={handleLeftClick1}
          />

          <div className='pro-detail__products'>
            <ul
              className='pro-detail__product-wrap'
              style={{ left: trans1 + "px" }}
              ref={move1}
            >
              {listPost.map((item, index) => (
                <li key={index}>
                  <div className='pro-detail__product-frame'>
                    <div className='pro-detail__product'>
                      <Post
                        ref={product1}
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
          <FontAwesomeIcon
            icon={solid("angle-right")}
            onClick={handleRightClick1}
          />
        </div>
      </div>
      <div className='pro-detail__comments'>
        <div className='pro-detail__comments-left'>
          <h3>BÌNH LUẬN</h3>
          {listComment.map(
            (comment, i) =>
              comment.postId === postId.postId && (
                <div className='pro-detail__comment' key={i}>
                  <h4>{comment.author[0]?.lastName || 'Nguyễn'} {comment.author[0]?.firstName || 'Duy An'}</h4>
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>
                        <FontAwesomeIcon icon={solid("star")} />
                      </span>
                    ))}
                  <p>{comment.content}</p>
                  <hr style={{ color: "#CBCBCB", margin: "50px 0" }} />
                </div>
              )
          )}
        </div>
        <form className='pro-detail__comments-right'>
          <h3>Thêm đánh giá</h3>
          <p>Bình luận của bạn*</p>
          <textarea type='text' name='content'/>
          <div className='pro-detail__comments-right-wrapper'>
            <div>
              <p>Tên*</p>
              <input type='text' name='firstName'/>
            </div>
            <div>
              <p>Email*</p>
              <input type='text' name='email'/>
            </div>
          </div>
          <input type='submit' value='Gửi đi' />
        </form>
      </div>
    </div>
  );
}

export default PostDetail;
