import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Connexion.css"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"
import TextField from "../../shared-components/TextField/TextField"
import { Icone } from "../../Data/Icone"
import "react-datepicker/dist/react-datepicker.css"

const Connexion = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-1">
          <img src="{{Icone.closed}}" alt="" />
        </div>
        <div className="col-md-3">
          <p>694744292</p>
        </div>
        <div className="col-md-3">
          <ButtonAction text="S'inscrire" />
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-around align-self-center align-items-center">
          <div className="col-md-12 col-sm-12 title-crea text-center pt-3">
            <h2 className="">😀Connecte toi!</h2>
          </div>
          <div className=" col-md-8 col-sm-8 col-lg-5 needs-validation">
            <TextField placeholder={"Telephone"} />
            <TextField placeholder={"Mot de passe"} />
          </div>
          <div className="col-md-10 col-lg-12 col-sm-12 col-12 d-flex justify-content-around mt-3 ">
            <div className="col-lg-6 col-md-10 col-sm-10 col-10">
              <ButtonAction text="Se econnecter" />
            </div>
          </div>
          <div className="col-md-10 text-center mt-5">
            <p>
              En te connectant à lasylab, tu acceptes nos Conditions
              d'utilisation et notre Politique de confidentialité.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connexion
