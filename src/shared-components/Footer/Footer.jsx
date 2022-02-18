import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="row py-3">
        <div className="col-md-12 text-center lien">
          <Link to="/apropos">Aide</Link>
          <Link to="/apropos">A propos de nous</Link>
          <Link to="/apropos">Contacts</Link>
        </div>
        <div className="col-md-12 text-center">
          <a>2022 lasylab</a>
        </div>
      </div>
    </>
  )
}

export default Footer
