import logo from './logo.svg';
import Home from './pages/home-page';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login';

function App() {
  return (
      <div>
        <Header/>
      <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route  path='/login' element = {<Login/>} />
      </Routes>
      </div>
  );
}

export default App;
