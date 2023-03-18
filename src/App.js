import React, { useEffect, useState } from "react";
// import { Routes, Route } from 'react-router-dom';  
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import fetchData from "./APIUtils";
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };
  // const param = 'https://api.sfd.interview.ovckd.dev/v1/user';
  // useEffect(() => {
  //   fetchData(param)
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // }, [])

  return (
    <>
      {isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Sidebar />
          <main className="main">
            <Header />
            <Dashboard />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
