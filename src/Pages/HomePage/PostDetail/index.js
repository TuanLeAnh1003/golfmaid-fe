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
                    ? "Ng?????i gi??p vi???c"
                    : "Ng?????i thu??"}
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
                            Li??n h???: <b>0938269983</b> - Ch??? Duy An
                          </span>
                          <span>
                            N??i l??m vi???c: <b>64/13 Nguy??n H???ng, Ph?????ng 1</b>
                          </span>
                        </div>

                        <h3>{element.price}??</h3>

                        <div className='dotted-line'></div>

                        <p className='pro-detail__description'>
                          {element.content}
                        </p>

                        <div className='dotted-line'></div>

                        <div className='pro-detail__order'>
                          <div className='pro-detail__quantity'>
                            <h4>S??? L?????NG</h4>
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
                            <button>L??U TIN</button>
                            <button>LI??N H??? NGAY</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='pro-detail__info'>
                      <div className='pro-detail__info-titles'>
                        <div className='pro-detail__info-title'>CHI TI???T</div>
                      </div>

                      <div className='pro-detail__info-content'>
                        <div className='pro-detail__info-first'>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("credit-card")} />
                            <p>H??nh th???c tr??? l????ng: Theo th??ng</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("mars-and-venus")} />
                            <p>Gi???i t??nh: {element.author[0]?.gender}</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("graduation-cap")} />
                            <p>Tr??nh ????? h???c v???n: Kh??ng y??u c???u</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("square-minus")} />
                            <p>????? tu???i t???i thi???u: 18 tu???i</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("maximize")} />
                            <p>????? tu???i t???i ??a: 65 tu???i</p>
                          </div>
                        </div>

                        <div className='erect-line'></div>

                        <div className='pro-detail__info-second'>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("clock")} />
                            <p>Lo???i c??ng vi???c: To??n th???i gian</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("file")} />
                            <p>Kinh nghi???m: Kh??ng y??u c???u</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("location-dot")} />
                            <p>T??n c??ng ty: T???i nh??</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("shield")} />
                            <p>C??c quy???n l???i kh??c: T??ng l????ng</p>
                          </div>
                          <div className='pro-detail__info-first-item'>
                            <FontAwesomeIcon icon={solid("certificate")} />
                            <p>Ch???ng ch??? / k??? n??ng: Kh??ng y??u c???u</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pro-detail__employee">
                      <div className="pro-detail__employee-top">
                        <p>Ng?????i gi??p vi???c</p>
                      </div>
                      
                      <div className="pro-detail__employee-profile">
                        <div className="pro-detail__employee-profile-left">
                          <h2>{element.author[0].firstName} {element.author[0].lastName}</h2>
                          <div>
                            <FontAwesomeIcon icon={solid("mars-and-venus")} />
                            <p>Gi???i t??nh: {element.author[0]?.gender === "male" ? "Nam" : "N???"}</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={solid("cake-candles")} />
                            <p>Tu???i: 21</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={solid("phone")} />
                            <p>S??? ??i???n tho???i: {element.author[0].phoneNumber}</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={solid("location-dot")} />
                            <p>?????a ch???: {element.author[0].address.general}</p>
                          </div>
                        </div>
                        <img style={{ width: '300px', height: 'fit'}} src={element.image} alt="profile-img" />
                      </div>

                      <h3>M???C TI??U NGH??? NGHI???P</h3>
                      <p>
                        Gi??p vi???c nh?? s??ng ?????n t???i v??? l??m vi???c 8 - 9 ti???ng t???i nh?? Kh??ch h??ng
                        (kh??ng ??? l???i) v??o nh???ng ng??y v?? khung gi??? Kh??ch h??ng ????ng k??. C??ng vi???c g???m:
                        D???n nh??, n???u ??n, r???a b??t, ch??m s??c tr??? v?? m???t s??? y??u c???u kh??c n???u ph??t sinh.
                      </p>

                      <h3>H???C V???N</h3>
                      <p>TR?????NG TRUNG C???P NGH??? G?? V???P, TP. H??? CH?? MINH</p>
                      <p>Chuy??n ng??nh: <b>N???u ??n</b></p>
                      <p>B???ng c???p: <b>Trung c???p ngh???</b> </p>
                      <p>Lo???i t???t nghi???p: <b>Kh??</b></p>
                      <h3>KINH NGHI???M L??M VI???C</h3>
                      <p>
                        Chuy??n m??n: 
                        <b>
                          {element.detail.expertise}
                        </b>
                      </p>
                      <p>C?? s??? l??m vi???c: <b>{element.detail.workplace}</b> </p>
                      <p>??u ??i???m b???n th??n: <b>{element.detail.advantage}</b> </p>
                      <p>Th???i gian kinh nghi???m: <b>{element.detail.experience}</b> </p>
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
        <h2>TH??NG TIN LI??N QUAN</h2>
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
          <h3>B??NH LU???N</h3>
          {listComment.map(
            (comment, i) =>
              comment.postId === postId.postId && (
                <div className='pro-detail__comment' key={i}>
                  <h4>{comment.author[0]?.lastName || 'Nguy???n'} {comment.author[0]?.firstName || 'Duy An'}</h4>
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
          <h3>Th??m ????nh gi??</h3>
          <p>B??nh lu???n c???a b???n*</p>
          <textarea type='text' name='content'/>
          <div className='pro-detail__comments-right-wrapper'>
            <div>
              <p>T??n*</p>
              <input type='text' name='firstName'/>
            </div>
            <div>
              <p>Email*</p>
              <input type='text' name='email'/>
            </div>
          </div>
          <input type='submit' value='G???i ??i' />
        </form>
      </div>
    </div>
  );
}

export default PostDetail;
