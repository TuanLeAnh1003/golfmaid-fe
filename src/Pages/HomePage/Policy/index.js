import React, { useEffect } from "react";
import "./Policy.css";

function Policy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="policy">
      <div className="policy-body">
        <div className="policy-body-title">CHÍNH SÁCH</div>
        <div className="policy-body-heading">CHÍNH SÁCH NGƯỜI GIÚP VIỆC</div>
        <div className="policy-body-content">
          <div>
            <b>Các trường hợp chấm dứt hợp đồng mà không phải báo trước::</b>
            <ul>
              <li>
              Người lao động đơn phương chấm dứt hợp đồng lao động vì các lý do: Không được bố trí theo đúng công việc, địa điểm làm việc hoặc không được bảo đảm điều kiện làm việc theo thỏa thuận

              </li>
              <li>
              Không được trả đủ lương hoặc trả lương không đúng thời hạn
              </li>
              <li>Bị người sử dụng lao động ngược đãi, đánh đập hoặc có lời nói, hành vi nhục mạ, hành vi làm ảnh hưởng đến sức khỏe, nhân phẩm, danh dự
              </li>
              <li>Người sử dụng lao động cung cấp thông tin không trung thực
              </li>
            </ul>
          </div>
          <div>
            <b>Mức lương theo công việc không được thấp hơn mức lương tối thiểu vùng:</b>
            <ul>
              <li>
              Theo quy định tại Chương VI (trừ Điều 93) của Bộ luật Lao động, trong đó tiền lương của người lao động thỏa thuận trong hợp đồng lao động theo quy định tại khoản 1, khoản 2 Điều 90 của Bộ luật Lao động bao gồm mức lương theo công việc, phụ cấp lương và các khoản bổ sung khác nếu có.
              </li>
              <li>
              Mức lương theo công việc bao gồm cả chi phí tiền ăn, ở của người lao động tại gia đình người sử dụng lao động (nếu có) không được thấp hơn mức lương tối thiểu vùng do Chính phủ công bố.
              </li>
              <li>Người sử dụng lao động và người lao động thỏa thuận mức chi phí ăn, ở hằng tháng của người lao động (nếu có), tối đa không quá 50% mức lương theo công việc ghi trong hợp đồng lao động.</li>
            </ul>
          </div>
          <div>
            <b>Được nghỉ bình quân 01 tháng ít nhất 04 ngày</b>
            <ul>
              <li>
              Vào ngày làm việc bình thường, ngoài thời giờ làm việc thỏa thuận trong hợp đồng lao động theo quy định, người sử dụng lao động phải bảo đảm, tạo điều kiện cho người lao động được nghỉ ít nhất 8 giờ, trong đó có 6 giờ liên tục trong 24 giờ liên tục
              </li>
              <li>
              Người lao động được nghỉ hằng tuần theo quy định tại Điều 111 của Bộ luật Lao động, trường hợp người sử dụng lao động không thể bố trí nghỉ hằng tuần thì phải bảo đảm cho người lao động được nghỉ tính bình quân 01 tháng ít nhất 04 ngày.
              </li>
            </ul>
          </div>
          <div>
            <b>Đảm bảo an toàn, vệ sinh lao động</b>
            <ul>
              <li>
              Người sử dụng lao động có trách nhiệm hướng dẫn cách sử dụng máy, thiết bị, đồ dùng, các biện pháp phòng, chống cháy, nổ trong gia đình có liên quan đến công việc của người lao động; trang bị phương tiện bảo vệ cá nhân cho người lao động trong quá trình làm việc.
              </li>
              <li>
              Khi người lao động bị tai nạn lao động, bệnh nghề nghiệp, người sử dụng lao động phải thực hiện các trách nhiệm đối với người lao động theo quy định tại Điều 38, Điều 39 của Luật An toàn, vệ sinh lao động.
              </li>
              <li>
              Người lao động có trách nhiệm chấp hành đúng hướng dẫn sử dụng máy, thiết bị, đồ dùng và phòng, chống cháy, nổ; bảo đảm các yêu cầu vệ sinh môi trường của hộ gia đình, dân cư nơi cư trú.
              </li>
            </ul>
          </div>
        </div>
        <div className="policy-body-heading">HƯỚNG DẪN LIÊN HỆ</div>
        <div className="policy-body-content">
          <div>
            <ul>
              <li>
              Sau khi tìm được công việc thích hợp hoặc người giúp việc thì bấm vào liên hệ ngay để liên hệ với bên còn lại.
              </li>
              <li>
              Chúng tôi khuyến khích người giúp việc và người thuê gặp mặt trực tiếp để có thể dễ trao đổi và kí kết hợp đồng.
              </li>
              <li>
              Trường hợp một trong hai bên ở xa hoặc không thể tham gia trực tiếp được thì chúng tôi sẽ chuẩn bị một phònghọp trên zoom để hai bên có thể trao đổi và ký kết hợp đồng.
              </li>
            </ul>
          </div>
        </div>
        <div className="policy-body-heading">CHÍNH SÁCH TRUNG GIAN</div>
        <div className="policy-body-content">
          <p>Phí giao dịch trung gian sẽ là 40% tổng giá trị hợp đồng.</p>
        </div>
      </div>
    </div>
  );
}

export default Policy;
