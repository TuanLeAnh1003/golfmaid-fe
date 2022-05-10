import React, { useState } from 'react'
import './SearchContract.css'
import { Link } from 'react-router-dom'

function SearchContract() {
  const [contractId, setContractId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
    console.log(e.target.phone);
  }

  return (
    <form className="search-contract">
      <div className="search-contract--title">TRA CỨU HỢP ĐỒNG</div>
      <input type="text" className="search-contract--input" placeholder="Mã hợp đồng" name='contractId' onChange={e => setContractId(e.target.value)}/><br />
      <input type="text" className="search-contract--input" placeholder="Số điện thoại" name='phone' onChange={e => setPhoneNumber(e.target.value)}/><br />
      <Link to={`/result-search-contract/contractId=${contractId}&phoneNumber=${phoneNumber}`} className="search-contract--submit" onClick={e => handleSubmit(e)}>Tra cứu</Link>
    </form>
  )
}

export default SearchContract
