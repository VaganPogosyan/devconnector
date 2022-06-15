import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>
        <section className='container'>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
