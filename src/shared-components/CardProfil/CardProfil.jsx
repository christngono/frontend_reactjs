import React from "react"
import "./CardProfil.css"

const CardProfil = ({ link, nameProfil, onClick }) => {
  return (
    <div className="col-md-2 col-4" onClick={onClick}>
      <div class="card" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
        <img src={link} class="card-img-top" height="100px" alt="profil" />
        <div class="card-body">
          <p class="card-text">{nameProfil}</p>
        </div>
      </div>
    </div>
  )
}

export default CardProfil
