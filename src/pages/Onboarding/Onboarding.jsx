import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Onboarding.css';
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction";
import { useNavigate} from 'react-router-dom';



function Onboarding(){

  const navigate = useNavigate();
  return(
<div id="app" className="container-fluid">

<div className="row contain-block">
     
    <div className="col-md-6 col-12 block-r pt-4 d-none d-sm-block">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <img src="../logo-lasylab.png" alt="logo" height="50" />
        </div>

        <div className="col-md-8 ">
          <img src="../image-acceuil.svg" alt="image-presentation" height="250" />
        </div>

        <div className="col-md-8 align-self-center-end">
          <p className='link-footer'> <a href="#"> Découvrez la méthodologie lasylab</a>
            <a href="#">Qui sommes-nous ?</a> <a href="#">Aide</a></p>
        </div>
      </div>
    </div>

     
        <div className="col-md-6 col-12 block-l">
          <div className="row justify-content-center pt-5">
            <div className="col-md-3 offset-md-9">
              <p className='num'> 6 94 74 42 92 </p>
            </div>

            <div className="col-md-7 offset-md-2 align-self-center">
              <h3>Tout pour réussir</h3>
              <p>Revise et apprend facilement tes leçons de la 6e en Tle</p>
            </div>

            <div className="col-md-5">
              <ButtonAction onClick={() => navigate("/profil")} text="C'est partie😀"/>
              <a href="/discution" class="button-action-nof">J'ai déjà un compte</a>
            </div>
          </div>
        </div>
     
    
   </div>
   </div>
  
  
  )

}

export default Onboarding;