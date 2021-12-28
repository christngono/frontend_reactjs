import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilClasse.css';
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction";
import BannerSimple from "../../shared-components/BannerSimple/BannerSimple";
import CardProfil from "../../shared-components/CardProfil/CardProfil";


const Profilclasse = () => {
    var backgroundStyle = {
        backgroundColor:"#235390",
        fonFamily:"'Nunito Sans', sans-serif",
        backgroundPosition:"bottom -50px right 150px",
        backgroundRepeat:"no-repeat",
        height: "100%",
        backgroundImage: `url(require("./etoile.svg"))`

      };
      
    return (
        <div className="container-fluid-lasylab" style={backgroundStyle}>
              <BannerSimple/>

          <div className="row pt-5 ">
            <div className="col-md-12 title-crea text-center">
              <h2>Crée votre compte</h2>
            <p>Si vous abonnez votre enfant, choisissez le profil parent.</p>
            </div>
          </div>

          <div className="row justify-content-md-center pt-5">
              <CardProfil link="./girl.svg" nameProfil="Elève"/>
              <CardProfil link="./fille-mere.svg" nameProfil="Parent"/>
              <CardProfil link="./girl.svg" nameProfil="Visiteur"/>
           </div>
    
        <div className="row">
          <div className="col-md-12 text-center">
              <p > <a href='#'>Déjà un compte? connecte-toi</a></p>
          </div>
        </div>
  
          <div className="row justify-content-center pt-5">
              <div className="col-md-3 col-sm-6 col-8">
              <ButtonAction text="Continuer"/>
          </div>
          </div>
    </div>
            

    );
}

export default Profilclasse;
