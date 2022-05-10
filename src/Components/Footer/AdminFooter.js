import React from 'react';
import './AdminFooter.css';
import logo from '../../Assets/Images/lo-go.png';

import { Link } from "react-router-dom";

function AdminFooter() {
  return (
    <div className="ad-footer">
      <Link to="/" className="ad-footer__logo">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
}

export default AdminFooter