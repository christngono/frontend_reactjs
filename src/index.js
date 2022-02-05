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
import Message from "./pages/Message/Message";
import Video from "./pages/Video/Video";
import Quiz from "./pages/Quiz/Quiz";
import Apropos from "./pages/Apropos/Apropos";
import Reviser from "./pages/Reviser/Reviser"
import Matter from "./pages/Matter/Matter";
import Courses from "./pages/Courses/Courses"
import Lessons from "./pages/Lessons/Lessons"
import Connexion from "./pages/Connexion/Connexion"
import Offers from "./pages/Offers/Offers"
import ObjectifPedagogique from "./pages/ObjectifPedagogique/ObjectifPedagogique"

import AppContextProvider from "./ApiContext"

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
     <Router>
        <Routes>
          <Route exact path="/" element={<Onboarding/>}/>
          <Route exact path="/profil" element={<ProfilClasse/>}/>
          <Route exact path="/profil2" element={<Profil/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/enseignements" element={<Home/>}/>
          <Route exact path="/enseignements/:matiere" element={<Matter/>}/>
          <Route exact path="/enseignements/:matiere/:typecourse" element={<Lessons/>}/>
          <Route exact path="/enseignements/:matiere/course/:course" element={<Courses/>}/>
          <Route exact path="/enseignements/:matiere/video/:video" element={<Video/>}/>
          <Route exact path="/enseignements/:matiere/quiz/:quiz" element={<Quiz/>}/>
          <Route exact path="/connexion/" element={<Connexion/>}/>
          <Route exact path="/reviser/" element={<Reviser/>}/>
          <Route exact path="/offers/" element={<Offers/>}/>
          <Route exact path="/apropos/" element={<Apropos/>}/>
          <Route exact path="/objectifpedagogique/" element={<ObjectifPedagogique/>}/>
         
          <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

