import { BrowserRouter, Routes, Route,Router} from 'react-router-dom';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './App.css';
import Welcome from './Components/Welcome';
import FeatureBoxes from './Components/FeatureBoxes';

import Courses from './Components/Courses';
import UserForm from './Components/UserForm';
import AdminPage from './Components/AdminPage';
import AdminLogin from './Components/AdminLogin';
import WhyChooseUs from './Components/WhyChooseUs';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Header" element={<Header/>}/>  
      <Route path="/Welcome" element={<Welcome/>}/>
      <Route path="/FeatureBoxes" element={<FeatureBoxes/>}/> 
      <Route path="/Footer" element={<Footer/>}/> 
      <Route path="/Courses" element={<Courses/>}/>  
      <Route path="/UserForm" element={<UserForm/>}/>  
       <Route path="/AdminPage" element={<AdminPage/>}/>  
       <Route path ="/AdminLogin" element={<AdminLogin/>}/> 
       <Route path ="/WhyChooseUs" element={<WhyChooseUs/>}/> 
       <Route path="/enroll" element={<UserForm />} />
          
</Routes>
</BrowserRouter>
    </div>
  );
};

export default App;
