import {useState, React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilClasse.css';
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction";
import BannerSimple from "../../shared-components/BannerSimple/BannerSimple";
import CardProfil from "../../shared-components/CardProfil/CardProfil";
import { useNavigate} from "react-router-dom";


const Profilclasse = () => {
    var backgroundStyle = {
        backgroundColor:"#235390",
        fonFamily:"'Nunito Sans', sans-serif",
        backgroundPosition:"bottom -50px right 150px",
        backgroundRepeat:"no-repeat",
        height:"100%",
        backgroundImage: `url(require("./etoile.svg"))`

      };
      const navigate = useNavigate();
      const [visibility, setVisibility] = useState(true);
      


     const handleToggleVisibility = () =>{
      setVisibility(()=>{
          return { visibility: true};
         
          });
          
        }

      
    return (
        <div className="" style={backgroundStyle}>
              <BannerSimple/>
              <div className="col-md-12 title-crea text-center pt-5">
            <h2 className="cree-compte">Crée votre compte</h2>
            <p className="cree-subtitle">
              Si vous abonnez votre enfant, choisissez le profil parent.
            </p>
          </div>

            <div className="d-flex justify-content-center">
              <div className="cover-container d-flex justify-content-around">
              <CardProfil onclick={handleToggleVisibility} link="./girl.svg" nameProfil="Elève"/>
              <CardProfil  onclick={handleToggleVisibility}link="./fille-mere.svg" nameProfil="Parent"/>
              <CardProfil  onclick={handleToggleVisibility} link="./girl.svg" nameProfil="Visiteur"/>
            </div>
            </div>
           
    
          <div className="col-md-12 text-center">
              <p > <a href='#'>Déjà un compte? connecte-toi</a></p>
          </div>
        
          <div className="d-flex justify-content-center pt-5">
              <div className="col-md-3 col-sm-6 col-8">
              {visibility && (
                 <ButtonAction onClick={() => navigate("/profil2")} text="Continuer"/>
                 )}
             </div>
          </div>
          
    </div>
    
            

    );
}

export default Profilclasse;
