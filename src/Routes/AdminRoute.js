import React, {useEffect} from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

function AdminRoute({ children }) {
  console.log(localStorage.getItem("role"));
  return JSON.parse(localStorage.getItem("role")) ? children : <Navigate to="/" />;
}

export default AdminRoute;