/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/SignUp';
import Login from '../pages/LogIn';
import Dashboard from '../pages/UserDashboard';
import ContactUs from '../pages/ContactUs';
import Blog from '../pages/Blog';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import VerifyCode from '../pages/VerifyCode';
import BorrowedBook from '../pages/BorrowedBook'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/forgot_password' element={<ForgotPassword />} />
      <Route path='/reset_password' element={<ResetPassword />} />
      <Route path='/verifyCode' element={<VerifyCode />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path="/borrowedbooks" element={<BorrowedBook />} />
    </Routes>
  );
};

export default AppRoutes;
