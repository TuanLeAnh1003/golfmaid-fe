import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-first">
        <div className="footer-first__wrapper">
          <div className="footer-first__icon">

          </div>

          <ul className="footer-first__about-us">
            <li><h3>VỀ CHÚNG TÔI</h3></li>
            <li></li>
            <li>Giới thiệu</li>
            <li>Gmail: golfmaid@gmail.com</li>
            <li>Số điện thoại: 093269974</li>
          </ul>

          <ul className="footer-first__product">
            <li><h3>NGƯỜI GIÚP VIỆC</h3></li>
            <li></li>
            <li>Người giúp việc nam</li>
            <li>Người giúp việc nữ</li>
          </ul>

          <ul className="footer-first__help">
            <li><h3>HỖ TRỢ</h3></li>
            <li></li>
            <li><Link to="/contact" style={{textDecoration: "none", color: "#fff"}}>Liên hệ</Link></li>
            <li><Link to="/policy" style={{textDecoration: "none", color: "#fff"}}>Chính sách chung</Link></li>
            <li><Link to="/search-contract" style={{textDecoration: "none", color: "#fff"}}>Tra cứu hợp đồng</Link></li>
            <li><Link to="/about" style={{textDecoration: "none", color: "#fff"}}>Về chúng tôi</Link></li>
          </ul>

          <ul className="footer-first__social-media">
            <li><h3>LIÊN KẾT MẠNG XÃ HỘI</h3></li>
            <li>
              <FontAwesomeIcon icon={brands('facebook-square')} />
              <FontAwesomeIcon icon={brands('instagram-square')} />
              <FontAwesomeIcon icon={brands('youtube-square')} />
            </li>

          </ul>
        </div>
      </div>

      <div className="footer-second">
        <p>Copyright 2022 © GolfMaid</p>
        <div className="footer-second__payment-methods">
          <FontAwesomeIcon icon={brands('cc-visa')} />
          <FontAwesomeIcon icon={brands('cc-paypal')} />
          <FontAwesomeIcon icon={brands('cc-mastercard')} />
          <FontAwesomeIcon icon={solid('truck-moving')} />
        </div>
      </div>
    </div>
  )
}

export default Footer