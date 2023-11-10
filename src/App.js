import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import DashboardPage from './Dashboard/DashboardPage';
import './App.css';

function App() {
  return <>
    <BrowserRouter>
        <Routes>
            <Route exact path='login' element={<LoginPage/>} />
            <Route exact path='register' element={<RegisterPage/>} />
            <Route exact path='dashboard' element={<DashboardPage/>} />
            <Route exact path='/' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
