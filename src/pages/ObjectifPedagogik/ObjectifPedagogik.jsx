import React, { useState } from "react"
import "./ObjectifPedagogik.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CloseButt from "../../shared-components/CloseButt/CloseButt"
import ProgressBar from "../../shared-components/ProgressBar/ProgressBar"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"
import { useNavigate } from "react-router-dom"
// import { useHistory } from "react-router";

export default function ObjectifPedagogik() {
  // const history = useHistory();
  const data = [
    {
      id: 0,
      active: "active-1",
      item: "item-1",
      content: "Augmenter ma moyenne en classe",
    },
    {
      id: 1,
      active: "active-2",
      item: "item-2",
      content: "Avoir la moyenne sur une seule matière",
    },
    {
      id: 2,
      active: "active-2",
      item: "item-2",
      content: "Comprendre une notion précise",
    },
    {
      id: 3,
      active: "active-3",
      item: "item-2",
      content: "Reussir son examen",
    },
  ]

  const [clicked, setClicked] = useState(0)
  const history = useNavigate()

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#ffffff" }}>
        <div className="row px-4 pt-2">
          <CloseButt style={{ height: "50" }} />
          <div className="col-md-8 col-10 pt-4">
            <ProgressBar />
          </div>
        </div>

        <div className="row text-center py-4">
          <p className="ch_title">choisir l'objectif pédagogiqie</p>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-md-5 col-12">
            {data.map((ele, index) => (
              <div
                key={ele.id}
                onClick={() => setClicked(ele.id)}
                className={ele.id === clicked ? ele.active : ele.item}
                style={{ width: "100%", height: "100px" }}
              >
                {ele.content}
              </div>
            ))}
          </div>
        </div>
        <div className="row d-flex justify-content-around">
          <div class="col-md-4 my-5">
            <ButtonAction onClick={() => history("/profil")} text="Continuer" />
          </div>
        </div>
      </div>
    </>
  )
}
