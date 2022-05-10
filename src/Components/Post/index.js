import React, { forwardRef } from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Post({img, title, workplace, price, address}, ref) {
  return (
    <div className="post" ref={ref}>
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <p>{workplace}</p>
      <div className="post__price">
        <p>{price}đ</p>
      </div>
      <div className="post__address">
        <FontAwesomeIcon icon={solid("map-location-dot")}/>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default forwardRef(Post)