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
import Account from "./components/account";
import Help from "./components/help";

function App() {

  const [token, setToken] = useState();

  if(token) {
    return <Account setToken={setToken} />
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
        <Route path="/account" element={<Account />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </div> 
  );
}
  
export default App;

