import React from "react"
import CloseButt from "../../shared-components/CloseButt/CloseButt"
import ProgressBar from "../../shared-components/ProgressBar/ProgressBar"
import Question from "../../shared-components/Question/Question"
import Response from "../../shared-components/Response/Response"
import "./Quiz.css"
import { useNavigate } from "react-router-dom"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"

const Quiz = () => {
  const history = useNavigate()
  return (
    <>
      <div class="container-fluid" style={{ backgroundColor: "#ffffff" }}>
        <div className="row px-4 pt-2">
          <CloseButt style={{ height: "50" }} />
          <div className="col-md-8 col-10 pt-4">
            <ProgressBar />
          </div>

          <div class="row justify-content-md-center ">
            <Question consigne="Choisir la bonne reponse">
              A quoi sert une lentille divergente?
            </Question>
          </div>

          <div class="row justify-content-md-center block-reponse">
            <Response range={1}>
              <p>Diverge la lumiere</p>
            </Response>
            <Response range={2}>
              <p>converge la lumiere</p>
            </Response>
            <Response range={3}>
              <p>Disperse la lumiere</p>
            </Response>
          </div>

          <div className="row d-flex justify-content-around">
            <div class="col-md-4 my-5">
              <ButtonAction
                onClick={() => history("/profil")}
                text="Continuer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
