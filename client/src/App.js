import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
 
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Home from "./components/home";
import Buy from "./components/buy";
import Sell from "./components/sell"; 
import Footer from "./components/footer";
import Favourites from "./components/favourites";
import Account from "./components/account";
import Help from "./components/help";
import Login from "./components/login";

function App() {

  const [token, setToken] = useState();

  if(token) {
    return <Login setToken={setToken} />
  }

  return (
    <div id = "background">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/account" element={<Account />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div> 
  );
}
  
export default App;

