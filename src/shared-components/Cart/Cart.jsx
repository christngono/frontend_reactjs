import React from "react"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"
import "./Cart.css"

export default function Cart() {
  return (
    <div className="container-cart">
      <div className="head">
        <p className="cart-title">Offre Premium</p>
      </div>
      <div className="second-path">
        <p className="price">
          6990 F CFA <br />
          <span className="month">/mois</span>
        </p>
        <div className="list-container">
          <ul>
            <li>Fiches de cours méthodes</li>
            <li>Quiz</li>
            <li>Cours vidéo explicatifs</li>
            <li>Télécharge tes cours</li>
            <li>Chat avec un prof</li>
            <li>Epreuves corrigées</li>
            <li>Emplois de temps apprentissage</li>
          </ul>
        </div>
        <div className="btn-bottom mr-4 mb-2">
          <ButtonAction
            onClick={() => console.log("6990 F CFA")}
            text={"Choisir"}
          />
        </div>
      </div>
    </div>
  )
}
