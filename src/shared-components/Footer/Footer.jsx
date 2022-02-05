import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="row py-5">
        <div className="col-md-12 text-center lien">
          <a to={"/apropos"}>Aide</a>
          <a to={"/apropos"}>A propos de nous</a>
          <a to={"/apropos"}>Contacts</a>
        </div>
        <div className="col-md-12 text-center">
          <a>2022 lasylab</a>
        </div>
      </div>
    </>
  )
}

export default Footer
