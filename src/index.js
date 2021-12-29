import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import ProfilClasse from "./pages/ProfilClasse/ProfilClasse";
import Profil from "./pages/Profil/Profil";
import Login from "./pages/Login/Login";
import Error from "./pages/Error";

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route exact path="/" element={<Onboarding/>}/>
          <Route exact path="/profil" element={<ProfilClasse/>}/>
          <Route exact path="/profil2" element={<Profil/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

