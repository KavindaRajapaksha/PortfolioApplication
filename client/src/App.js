import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import ViewMessage from "./pages/ViewMessage";

import LoginAdmin from "./pages/LoginAdmin";
import Register from "./pages/Register";
import List from "./pages/List";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/viewmessage/:id" element={<ViewMessage />} />
          <Route path="/contacts/login" element={<LoginAdmin/>}/>
          <Route path="/contacts/register" element={<Register/>} />
          <Route path="/contacts/list" element={<List/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
