import React from 'react'
import { Route, Routes } from "react-router-dom";
import Feed from '../pages/Feed';
import Posts from '../pages/Post';
import Update from '../pages/Update';
import Sobre from '../pages/Sobre';

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Feed/>}></Route>
        <Route path="/post" element={<Posts/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
    </Routes>
  );
}

export default AppRouter;