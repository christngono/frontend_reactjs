import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { Icone } from "../../Data/Icone"
import Cardnext from "../../shared-components/cardnext/Cardnext"

const BlockMatter = styled.div`
  border: solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  outline: 0;
  touch-action: manipulation;
  transform: translateZ(0);
  margin-top: 20px;
`
function Reviser() {
  return (
    <>
      <MainBanner />
      <BlockMatter className="container py-5 mb-5">
        <p className="title-v px-2 py-2">Entraînez-vous</p>
        <div className="row ">
          <Cardnext
            text1={"Activité maths 1"}
            className="col-6 col-md-3"
            src={Icone.quiz}
          />
          <Cardnext
            text1={"Activité maths 2 "}
            className="col-6 col-md-3"
            src={Icone.quiz}
          />
          <Cardnext
            text1={"Activité français"}
            className="col-6 col-md-3"
            src={Icone.activity}
          />
        </div>
      </BlockMatter>
    </>
  )
}

export default Reviser
