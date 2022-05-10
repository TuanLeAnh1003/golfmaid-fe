import React, { useEffect, useState } from 'react'
import './ResultSearchContract.css'
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import ContractApi from '../../../Apis/ContractApi';
import ReactToPrint from "react-to-print";


function ResultSearchContract() {
  const [contract, setContract] = useState()
  const { contractInfo } = useParams()

  const contractId = contractInfo?.slice(contractInfo.indexOf('contractId=') + 11, contractInfo.indexOf('&'))
  const phoneNumber = contractInfo.slice(contractInfo.indexOf('&') + 13)

  useEffect(() => {
    ContractApi.getContractByIdAndPhone({contractId: contractId, phoneNumber: phoneNumber})
      .then(async (res) => {
        console.log(res[0]);
        setContract(res[0])
      })
  }, [])

  return (
    <div className="result-search-contract">
      <div className="result-search-contract--title">HỢP ĐỒNG THỎA THUẬN</div>
      <hr className="result-search-contract--line__solid" />

      <div className="result-search-contract__wrapper">
        <div className="result-search-contract__top">
          <h3><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b></h3>
          <h4><b>Độc lập - Tự do - Hạnh phúc</b></h4>
          <p>________________ o0o ________________</p>
        </div>
        <div className="result-search-contract__date">
          Gò Vấp, ngày {contract?.createdAt.slice(8,2) || '09'} tháng {contract?.createdAt.slice(6,2) || '05'} năm {contract?.createdAt.slice(0,4) || '2022'}
        </div>
        <div className="result-search-contract__title">HỢP ĐỒNG THUÊ GIÚP VIỆC</div>
        <div className="result-search-contract__content">
          <p>Mã Hợp đồng: <b>{contract?.contractId}</b></p>
          <p>Người sử dụng lao động: ông/bà <b>{contract?.employer}</b></p>
          <p>Người lao động: ông/bà <b>{contract?.employee}</b></p>
          <p>Thoả thuận ký kết hợp đồng lao động và cam kết làm đúng những điều khoản sau đây:</p>
          <p><b>Điều 1: Thời hạn và công việc hợp đồng</b></p>
          <p>Bắt đầu làm việc từ ngày {contract?.startDate.slice(8,2) || '09'} tháng {contract?.startDate.slice(6,2) || '05'} năm {contract?.startDate.slice(0,4) || '2022'}</p>
          <p>Kết thúc làm việc từ ngày {contract?.endDate.slice(8,2) || '09'} tháng {contract?.endDate.slice(6,2) || '06'} năm {contract?.endDate.slice(0,4) || '2022'}</p>
          <p><b>Điều 2: Chế độ làm việc</b></p>
          <p>Thời giờ làm việc: {contract?.workingTime}</p>
          <p><b>Điều 3: Nghĩa vụ và quyền lợi của người lao động</b></p>
          <p>Quyền lợi:</p>
          <p>Mức lương chính hoặc tiền công: {contract?.price} đồng/tháng</p>
          <p>Hình thức trả lương: Trả lương bằng tiền mặt.</p>
          <p>Nghĩa vụ:</p>
          <p>Hoàn thành những công việc đã cam kết trong hợp đồng lao động.</p>
          <p><b>Điều 4: Nghĩa vụ và quyền hạn của người sử dụng lao động</b></p>
          <p>Nghĩa vụ:</p>
          <p>Bảo đảm việc làm và thực hiện đầy đủ những điều đã cam kết trong hợp đồng lao động.</p>
          <p>Thanh toán đầy đủ, đúng thời hạn các chế độ và quyền lợi cho người lao động theo hợp đồng lao động.</p>
          <p>Quyền hạn:</p>
          <p>Điều hành người lao động hoàn thành công việc theo hợp đồng (bố trí, điều chuyển, tạm ngừng việc….).</p>
          <p>Tạm hoãn, chấm dứt hợp đồng lao động, kỷ luật người lao động theo quy định của pháp luật (nếu có) và khi người lao động vi phạm quy định về lao động.</p>
          <p><b>Điều 5: Điều khoản thi hành</b></p>
          <p>Những vấn đề về lao động không ghi trong hợp đồng lao động này thì áp dụng quy định của pháp luật lao động.</p>
          <p>Hợp đồng lao động được làm thành 2 bản có giá trị ngang nhau, mỗi bên giữ một bản và có hiệu lực kể từ ngày ký.</p>
        </div>
        <div className="result-search-contract__bottom">
          <p>Người lao động</p>
          <p>Người trung gian</p>
          <p>Người sử dụng lao động</p>
        </div>
      </div>
      
      <div className="result-search-contract--button">
        <Link to="/" className="result-search-contract--export">
          <FontAwesomeIcon icon={solid("house")} />
          Trở về
        </Link>
        <a className="result-search-contract--export" onClick={e => {e.preventDefault();window.print()}}>
          <FontAwesomeIcon icon={solid("print")} />
          In hợp đồng
        </a>
      </div>
    </div>
  )
}

export default ResultSearchContract