import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

function App() {
  const NewLandingPage = Auth(LandingPage, null)
  const NewLoginPage = Auth(LoginPage, false)
  const NewRegisterPage = Auth(RegisterPage, false)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NewLandingPage/>}></Route>
        <Route exact path="/login" element={<NewLoginPage/>}></Route>
        <Route exact path="/register" element={<NewRegisterPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
