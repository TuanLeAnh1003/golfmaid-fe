import React, { useState } from "react";
import { Link } from "react-router-dom";
import FamilyImage from "./../../../Assets/Images/family-image.svg";

function ContractUpdate() {
  const [image, setImage] = useState();

  const contract = {
    create_at: new Date("2022-05-08"),
    contractId: "CT001",
    employer: "Lê Anh Tuấn",
    employee: "Nguyễn Duy An",
    startDate: new Date("2022-05-08"),
    endDate: new Date("2022-06-08"),
    workingTime: "1 tháng",
    price: 7500000
  }

  return (
    <form className='news-create'>
      <div className='news-create-wrapper'>
        <h1>SỬA HỢP ĐỒNG</h1>
        <p>Sửa hợp đồng mới Golf Maid ở đây</p>
      </div>
      <div className='news-create-form'>
      <div className='news-create-item'>
          <p>Tên người giúp việc</p>
          <input
            type='text'
            name='employee'
            placeholder={contract.employee}
          />
        </div>
        <div className='news-create-item'>
          <p>Tên người thuê</p>
          <input
            type='text'
            name='employer'
            placeholder={contract.employer}
          />
        </div>
        <div className='news-create-item'>
          <p>Ngày bắt đầu</p>
          <input type='text' name='startDate' placeholder={contract.startDate.toLocaleDateString('pt-PT')} onFocus={e => e.target.type = 'date'} />
        </div>
        <div className='news-create-item'>  
          <p>Ngày kết thúc</p>
          <input type='text' name='endDate' placeholder={contract.endDate.toLocaleDateString('pt-PT')} onFocus={e => e.target.type = 'date'}/>
        </div>
        <div className='news-create-item'>
          <p>Giá tiền</p>
          <input type='number' name='price' placeholder={contract.price} />
        </div>
        <div className='news-create-item'>
          <p>Thời gian làm việc</p>
          <div>
            <input type='radio' name='workingTime' value='fulltime' /> Toàn thời
            gian
            <input type='radio' name='workingTime' value='parttime' /> Bán thời
            gian
            <input type='radio' name='workingTime' value='allday' /> Cả ngày
          </div>
        </div>
      </div>
      <div className='news-create-func'>
        <button>XÁC NHẬN</button>
        <Link className='news-create-func--cancel' to='/admin/news-management'>
          HỦY
        </Link>
      </div>
    </form>
  );
}

export default ContractUpdate;
