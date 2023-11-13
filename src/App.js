import logo from './logo.svg';
import Home from './pages/home-page';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import AdminHome from "./pages/admin-page"
import { Navbar } from 'react-bootstrap';
import AddBookPage from './pages/add-book-page';

function App() {
  return (
      <div>
        {/* <Header/>
      <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route  path='/login' element = {<Login/>} />
      </Routes> */}
      {/* <AdminHome/> */}
      <AddBookPage/>
      </div>
  );
}

export default App;
