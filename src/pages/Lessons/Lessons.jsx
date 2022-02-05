import React from "react"
import styled from "styled-components"
import CardMatter from "../../shared-components/CardMatter/CardMatter"
import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import { Icone } from "../../Data/Icone"
import "./Lesson.css"
import Footer from "../../shared-components/Footer/Footer"

const BlockMatter = styled.div`
  border: solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  outline: 0;
  touch-action: manipulation;
  transform: translateZ(0);
  padding: 50px 10px 100px 10px;
`

const Lessons = () => {
  return (
    <>
      <MainBanner />
      <div className="row pt-5">
        <div className="col-md-3 offset-md-3">
          <p className="lien-cour"><img src={Icone.next} height="50" alt="next"/>
          Liste des cours</p>
        </div>
      </div>

      <div
        className="text-center"
        style={{ paddingBottom: 50, paddingTop: 50 }}
      >
        <h4>
          <img src={Icone.maths} height="40" />
          <span>Mathématique</span>
          <span>- PA4</span>
        </h4>
        <p className="title-lesson">
          <span className="badge1 rod">Leçons</span> Inéquations et inéquations
        </p>
      </div>

      <div className="container">
        <BlockMatter className="row d-flex justify-content-around">
          <div className=" col-md-12 text-center "> </div>
          <div className="row">
            <CardMatter image={Icone.course} matter={"Cours"} />
            <CardMatter image={Icone.video} matter={"Vidéo"} />
            <CardMatter image={Icone.quiz} matter={"Quiz"} />
            <CardMatter image={Icone.definitions} matter={"Définitions"} />
            <CardMatter image={Icone.activity} matter={"Méthodes"} />
            <CardMatter image={Icone.course} matter={"Epreuves"} />
          </div>
        </BlockMatter>
        <Footer />
      </div>
    </>
  )
}

export default Lessons
