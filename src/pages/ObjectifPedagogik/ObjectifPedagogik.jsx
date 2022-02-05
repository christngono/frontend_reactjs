import React, { useState } from "react";
import "./ObjectifPedagogik.css";
import CloseButt from "../../shared-components/CloseButt/CloseButt";
import ProgressBar from "../../shared-components/ProgressBar/ProgressBar";
import { useHistory } from "react-router";

export default function ObjectifPedagogik() {
  const history = useHistory();
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
      active: "active-3",
      item: "item-3",
      content: "Comprendre une notion précise",
    },
  ];

  const [clicked, setClicked] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div>
          <>
            <div
              style={{
                position: "relative",
                top: "110px",
                left: "-50px",
              }}
            >
              <CloseButt />
            </div>
            <div style={{ marginTop: "82px" }}>
              <ProgressBar />
            </div>
          </>
        </div>
        <p className={"pedago"}>Choisis ton objectif pédagogique</p>
      </div>
      <div
        className={"choice-content w-50"}
        /*  style={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "red",
          }} */
      >
        {data.map((ele, index) => (
          <div
            key={ele.id}
            onClick={() => setClicked(ele.id)}
            className={ele.id === clicked ? ele.active : ele.item}
            style={{ width: "100%", height: "111px" }}
          >
            {ele.content}
          </div>
        ))}
        <div
          onClick={() => history.push("/offer")}
          className={"w-100 mt-5 continuer"}
        >
          Continuer
        </div>
      </div>
    </div>
  );
}
