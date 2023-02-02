import React from "react";
import { Signup } from "./component/Signup/Signin";
  import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./component/Home";
import { Aboutus } from "./component/AboutUs/Aboutus";
import { Login } from './component/Login/Login.js'
import { BookTable } from "./component/bookTable/BookTable";

function App() {

  return (
    <>   
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signin' element={<Signup />}></Route>
      <Route path='/about' element={<Aboutus />}></Route>
      <Route path='/bookTable' element={<BookTable/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;
