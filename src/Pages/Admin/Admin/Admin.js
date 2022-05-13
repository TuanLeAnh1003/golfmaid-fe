import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminProfile from '../AdminProfile/AdminProfile';
import NewsManagement from '../NewsManagement';
import NewsCreate from '../NewsManagement/NewsCreate';
import NewsUpdate from '../NewsManagement/NewsUpdate';
import SettingOptions from '../SettingOptions/SettingOptions';
import UserManagement from '../UserManagement';
import UserCreate from '../UserManagement/UserCreate';
import UserUpdate from '../UserManagement/UserUpdate';
import AdminSideBar from './../../../Components/AdminSideBar/AdminSideBar';
import AdminFooter from './../../../Components/Footer/AdminFooter';
import AdminHeader from './../../../Components/Header/AdminHeader';
import ContractManagement from '../ContractManagement/index';
import ContractCreate from '../ContractManagement/ContractCreate';
import ContractUpdate from '../ContractManagement/ContractUpdate';

import './Admin.css';
import CommentManagement from '../CommentManagement';
import AdminRoute from '../../../Routes/AdminRoute';


function Admin() {
  return (
    <div className='admin'>
      <AdminHeader />
      <div className='admin__cols'>
        <AdminSideBar />
        <div className='admin__col'>
          <div>
            <Routes>
              <Route path='setting' element={<SettingOptions />} />
              <Route path='admin-profile' element={<AdminProfile />} />
              <Route path='user-management' element={<UserManagement />} />
              <Route path='user-create' element={<UserCreate />} />
              <Route path='user-update' element={<UserUpdate />} />
              
              <Route path='/*' element={<NewsManagement />}></Route>
              <Route path='post-management' element={<NewsManagement />} />
              <Route path='post-create' element={<NewsCreate />} />
              <Route path='post-update' element={<NewsUpdate />} />

              <Route path='contract-management' element={<ContractManagement />} />
              <Route path='contract-create' element={<ContractCreate />} />
              <Route path='contract-update' element={<ContractUpdate />} />

              <Route path='comment-management' element={<CommentManagement />}></Route>
            </Routes>
          </div>

          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

export default Admin