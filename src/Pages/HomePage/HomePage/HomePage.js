import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import About from '../About';
import Account from '../Account';
import Contact from '../Contact';
import Home from '../Home';
import Policy from '../Policy';
import PostDetail from '../PostDetail';
import ResultSearchContract from '../ResultSearchContract';
import HouseHelper from '../HouseHelper';
import Search from '../Search';
import SearchContract from '../SearchContract';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployerForm from '../EmployerForm/EmployerForm';
import PrivateRoute from '../../../Routes/PrivateRoute';

function HomePage() {
  const [searchContent, setSearchContent] = useState('')

  const parentSearch = (searchInput) => {
    setSearchContent(searchInput);
  }

  return (
    <div>
    <Header parentSearch={parentSearch} />
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/househelper" element={<HouseHelper />} />
      <Route path="/househelper/:type" element={<HouseHelper />} />
      <Route path="/post-detail/:postId" element={<PostDetail />} />
      <Route path="/search-contract" element={<SearchContract />} />
      <Route path="/result-search-contract/:contractInfo" element={<ResultSearchContract />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search searchContent={searchContent} />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/account/:id" element={<PrivateRoute><Account /></PrivateRoute>}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/employee-form" element={<EmployeeForm />} />
      <Route path="/employer-form" element={<EmployerForm />} />

    </Routes>
    <Footer />
    </div>
  )
}

export default HomePage