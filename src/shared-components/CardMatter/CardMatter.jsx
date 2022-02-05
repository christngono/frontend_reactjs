import React from "react"
import "./CardMatter.css"
import { Link } from "react-router-dom"

function CardMatter({ matter, image, onClick }) {
  return (
    <div className="col-md-3 col-4  card-matter " onClick={onClick}>
      <div className="">
        <div className="matter-body">
          <div className="matter-img">
            <img src={image} alt="" height="40" />
          </div>
        </div>
        <div className="matter-name">
          <p className="text-center">{matter}</p>
        </div>
      </div>
    </div>
  )
}

export default CardMatter
