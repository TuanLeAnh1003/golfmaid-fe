import React from 'react';
import './AdminHeader.css';
import logo from '../../Assets/Images/lo-go.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


function AdminHeader() {
  return (
    <div className="ad-header">
      <Link to="/" className="ad-header__logo">
        <img src={logo} alt="logo" />
        
      </Link>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('house')} />
        <h3>GOLFMAID</h3>
      </div>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('book')} />
        <h3>DANH SÁCH </h3>
      </div>

      <div className="ad-header__item">
        <FontAwesomeIcon icon={solid('book')} />
        <h3>TÌM NGƯỜI GIÚP VIỆC</h3>
      </div>
    </div>
  )
}

export default AdminHeader