import React, { useState } from "react";
import "./ContractCreate.css";
import { Link } from "react-router-dom";
import ContractApi from "../../../Apis/ContractApi";

function ContractCreate() {
  const [type, setType] = useState("");
  const [image, setImage] = useState();
  // console.log(image);

  const [employee, setEmployee] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [workingTime, setWorkingTime] = useState("");

  const handleCreateContract = () => {
    ContractApi.createContract({
      employee: employee,
      employer: employer,
      startDate: startDate,
      endDate: endDate,
      price: price,
      workingTime: workingTime,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  const onChangeValue = (e) => {
    setWorkingTime(e.target.value);
  }

  return (
    <form className='news-create'>
      <div className='news-create-wrapper'>
        <h1>TẠO HỢP ĐỒNG</h1>
        <p>Tạo hợp đồng mới GolfMaid ở đây</p>
      </div>
      <div className='news-create-form'>
        <div className='news-create-item'>
          <p>Tên người giúp việc</p>
          <input
            type='text'
            name='employee'
            placeholder='Nhập tên người giúp việc ...'
            value={employee}
            onChange={e => setEmployee(e.target.value)}
          />
        </div>
        <div className='news-create-item'>
          <p>Tên người thuê</p>
          <input
            type='text'
            name='employer'
            placeholder='Nhập tên người thuê ...'
            value={employer}
            onChange={e => setEmployer(e.target.value)}
          />
        </div>
        <div className='news-create-item'>
          <p>Ngày bắt đầu</p>
          <input type='date' name='startDate' onChange={e => setStartDate(e.target.value)}/>
        </div>
        <div className='news-create-item'>
          <p>Ngày kết thúc</p>
          <input type='date' name='endDate' onChange={e => setEndDate(e.target.value)}/>
        </div>
        <div className='news-create-item'>
          <p>Giá tiền</p>
          <input type='number' name='price' placeholder='Nhập giá tiền ...' onChange={e => setPrice(e.target.value)}/>
        </div>
        <div className='news-create-item'>
          <p>Thời gian làm việc</p>
          <div onChange={onChangeValue}>
            <input type='radio' name='workingTime' value='fulltime' /> Toàn thời
            gian
            <input type='radio' name='workingTime' value='parttime' /> Bán thời
            gian
            <input type='radio' name='workingTime' value='allday' /> Cả ngày
          </div>
        </div>
      </div>

      <div className='news-create-func'>
        <button onClick={handleCreateContract}>TẠO</button>
        <Link className='news-create-func--cancel' to='/admin/news-management'>
          HỦY
        </Link>
      </div>
    </form>
  );
}

export default ContractCreate;
