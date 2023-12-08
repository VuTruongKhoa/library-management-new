import logo from './logo.svg';
import Home from './pages/home-page';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import AdminHome from "./pages/admin-page"
import { Navbar } from 'react-bootstrap';
import AddBookPage from './pages/add-book-page';
import BookRegis from './pages/book-register';

import Infor from './pages/Infor';
import BookExtend from './pages/book-extend';
import ViewBookPage from './pages/view-book-page';
import ManageMemberPage from './pages/manage-member-page';
import AdminHeader from './components/Admin/AdminHeader';


function App() {
  return (
      <div>
        <AdminHeader/>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route  path='/login' element = {<Login/>} />
            <Route  path='/login' element = {<Login/>}></Route>
            <Route path ='/infor' element ={<Infor/>}></Route>
            <Route path='/infor/book-extend' element ={<BookExtend/>}></Route>
            <Route path='/infor/book-regis' element ={<BookRegis/>}></Route>
            <Route path='/adminhome/addnewbook' element ={<AddBookPage/>}></Route>
            <Route path='/adminhome/addmember' element ={<ManageMemberPage/>}></Route>
        </Routes>
      </div>
  );
}

export default App;