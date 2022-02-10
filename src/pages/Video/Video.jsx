import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import CardChapitre from "../../shared-components/CardChapitre/CardChapitre"
import "./Video.css"
import { Icone } from "../../Data/Icone"
import Cardnext from "../../shared-components/cardnext/Cardnext"
import CloseButt from "../../shared-components/CloseButt/CloseButt"

const BlockMatter = styled.div`
  border: solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  outline: 0;
  background-color: #fff;
  touch-action: manipulation;
  transform: translateZ(0);
  margin-top: 20px;
`
const Video = () => {
  return (
    <div className="color-fond">
      <div className="container py-2">
        <div className="row text-end ">
          <CloseButt style={{ height: "50" }} />
        </div>
      </div>
      <BlockMatter className="container">
        <div className="row">
          <div className="row py-5 container">
            <div className="col-md-7 col-12">
              <p className="title-v">Presentation de lasylab</p>
              <div class="embed-responsive embed-responsive-16by9 rounded">
                <iframe
                  class="embed-responsive-item"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/8xKlT9WYMg8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <CardChapitre
                col-md-6
                name_lesson={"presentation de lasylab"}
                num={1}
              />
              <CardChapitre
                col-md-6
                name_lesson="Inéquation et inéquation partie 1"
                num={2}
              />
              <CardChapitre
                col-md-6
                name_lesson="Comment resoudre une équation du 2nd"
                num={3}
              />
            </div>
          </div>
        </div>
      </BlockMatter>

      <BlockMatter className="container my-5 mb-5">
        <p className="title-v px-2 py-2">Entraînez-vous</p>
        <div className="row ">
          <Cardnext
            text1={"Quiz"}
            className="col-6 col-md-3"
            src={Icone.quiz}
          />
          <Cardnext
            text1={"Activité"}
            className="col-6 col-md-3"
            src={Icone.activity}
          />
        </div>
      </BlockMatter>
    </div>
  )
}

export default Video
