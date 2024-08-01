import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Regsiter";
import Reset from "./Reset";
import Profile from "./Profile";
import About from "./About";
import Notifications from './Notifications'

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="reset" element={<Reset></Reset>}></Route>
        
        <Route path = '/Profile' element = {<Profile></Profile>} />
        <Route path = '/About' element = {<About></About>} />
        <Route path = '/Notifications' element = {<Notifications></Notifications>} />

      
      </Routes>
    </div>
  );
};

export default Pages;
