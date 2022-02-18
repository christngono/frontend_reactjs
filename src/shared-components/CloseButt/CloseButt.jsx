import React from "react"
import { Icone } from "../../Data/Icone"
import "./CloseButt.css"

export default function CloseButt() {
  return (
    <div className="col-md-2 col-2">
      <span className="closeButt ">
        <img src={Icone.closed} height="30" />
      </span>
    </div>
  )
}
