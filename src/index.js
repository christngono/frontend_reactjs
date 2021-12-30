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
import Live from "./pages/Live/Live";
import Apropos from "./pages/Apropos/Apropos";
import Reviser from "./pages/Reviser/Reviser"
import Matter from "./pages/Matter/Matter";
import Courses from "./pages/Courses/Courses"
import Lessons from "./pages/Lessons/Lessons"

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route exact path="/" element={<Onboarding/>}/>
          <Route exact path="/profil" element={<ProfilClasse/>}/>
          <Route exact path="/profil2" element={<Profil/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/enseignements" element={<Home/>}/>
          <Route exact path="/enseignements/:matiere" element={<Matter/>}/>
          <Route exact path="/enseignements/:matiere/:name_course" element={<Courses/>}/>
          <Route exact path="/enseignements/:matiere/:name_course/:type_course" element={<Lessons/>}/>
          <Route exact path="/reviser/" element={<Reviser/>}/>
          <Route exact path="/live/" element={<Live/>}/>
          <Route exact path="/apropos/" element={<Apropos/>}/>
          
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

