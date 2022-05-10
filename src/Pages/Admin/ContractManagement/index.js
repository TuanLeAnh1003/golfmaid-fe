import React, { useState } from 'react'
import './NewsManagement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom'
import FamilyImage from "./../../../Assets/Images/family-image.svg";
import HouseHelperImage from "./../../../Assets/Images/house-helper.svg";

function ContractManagement() {
  const [hideDeletePopup, setHideDeletePopup] = useState(false)

  const contractList = [
    {
      create_at: new Date("2022-05-08"),
      contractId: "CT001",
      employer: "Lê Anh Tuấn",
      employee: "Nguyễn Duy An",
      startDate: new Date("2022-05-08"),
      endDate: new Date("2022-06-08"),
      workingTime: "1 tháng",
      price: 7500000
    },
    {
      create_at: new Date("2022-05-08"),
      contractId: "CT001",
      employer: "Lê Anh Tuấn",
      employee: "Nguyễn Duy An",
      startDate: new Date("2022-05-08"),
      endDate: new Date("2022-06-08"),
      workingTime: "1 tháng",
      price: 7500000
    },
    {
      create_at: new Date("2022-05-08"),
      contractId: "CT001",
      employer: "Lê Anh Tuấn",
      employee: "Nguyễn Duy An",
      startDate: new Date("2022-05-08"),
      endDate: new Date("2022-06-08"),
      workingTime: "1 tháng",
      price: 7500000
    },
    {
      create_at: new Date("2022-05-08"),
      contractId: "CT001",
      employer: "Lê Anh Tuấn",
      employee: "Nguyễn Duy An",
      startDate: new Date("2022-05-08"),
      endDate: new Date("2022-06-08"),
      workingTime: "1 tháng",
      price: 7500000
    },
  ]

  return (
    <div className="news-mng">
      <h1>Quản lý hợp đồng</h1>
      <div className="news-mng-wrap">
        <Link className="news-mng-create" to='/admin/contract-create'>Tạo hợp đồng</Link>
        <div className="news-mng-search">
          <input type="text" placeholder="Tìm hợp đồng ..." />
          <FontAwesomeIcon className="news-mng-search--icon" icon={solid('search')} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
              <th>ContractId</th>
              <th>Người giúp việc</th>
              <th>Người thuê</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Tiền</th>
              <th>Thời gian làm việc</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {contractList.map((contract, i) => (
            <tr key={i}>
              <td>{contract.contractId}</td>
              <td>{contract.employee}</td>
              <td>{contract.employer}</td>
              <td>{contract.startDate.toLocaleDateString('pt-PT')}</td>
              <td>{contract.endDate.toLocaleDateString('pt-PT')}</td>
              <td>{contract.price}</td>
              <td>{contract.workingTime}</td>
              <td>
                <FontAwesomeIcon icon={solid('eye')} />{"  "}
                <Link to="/admin/contract-update" style={{textDecoration: 'none', color: '#855446'}}>
                  <FontAwesomeIcon icon={solid('pen')} />{"  "}
                </Link>
                <FontAwesomeIcon icon={solid('trash')} style={{cursor: 'pointer'}} onClick={e => setHideDeletePopup(true)}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {
        hideDeletePopup && (
          <div className="news-mng-delete-wrapper" onClick={e => setHideDeletePopup(false)}>
            <div className="news-mng-delete" onClick={e => e.stopPropagation()}>
              <h3>Xóa hợp đồng</h3>
              <FontAwesomeIcon className="news-mng-delete-icon" icon={solid('circle-xmark')} onClick={e => setHideDeletePopup(false)}/>
              <p>Bạn có chắc mình muốn xóa hợp đồng này?</p>
              <button>
                Hủy bỏ
              </button>
              <button>
                Xóa luôn
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ContractManagement