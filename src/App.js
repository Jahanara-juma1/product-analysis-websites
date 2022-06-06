
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';

import DashBoard from './component/DashBoard/DashBoard';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NoFound from './component/NoFound/NoFound';
import Reviews from './component/Reviews/Reviews';



function App() {
  return (
    <div className='App'>
    <Header></Header>
   
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='*' element={<NoFound></NoFound>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    </div>
  );
}

export default App;
