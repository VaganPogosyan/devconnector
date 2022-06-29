import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
