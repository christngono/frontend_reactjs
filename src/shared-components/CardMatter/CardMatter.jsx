import React from "react"
import "./CardMatter.css"
import { Link } from "react-router-dom"

function CardMatter({ matter, image }) {
  return (
    <div className="card-matter ">
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
