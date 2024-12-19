import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Signup from './pages/Signup';
import Login from './pages/Logi';
import Editor from './pages/Editor';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/editor/:projectid' element={<Editor/>}></Route>
      <Route path='*' element={<NoPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

