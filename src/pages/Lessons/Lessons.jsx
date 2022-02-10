import React from "react"
import styled from "styled-components"
import CardMatter from "../../shared-components/CardMatter/CardMatter"
import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import { Icone } from "../../Data/Icone"
import "./Lesson.css"
import Footer from "../../shared-components/Footer/Footer"
import { Link, useNavigate } from "react-router-dom"

const BlockMatter = styled.div`
  border: solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: pointer;
  outline: 0;
  background-color: #fff;
  touch-action: manipulation;
  transform: translateZ(0);
`
const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`

const Lessons = () => {
  const navigate = useNavigate()
  return (
    <div className="color-fond container-fluid">
      <MainBanner />
      <div className="row pt-2">
        <div className="col-md-3 offset-md-1">
          <p className="lien-cour">
            <img src={Icone.next} height="30" alt="next" />
            <a
              onClick={() => navigate("/enseignements/:matiere")}
              style={{ cursor: "pointer" }}
            >
              Liste des cours
            </a>
          </p>
        </div>
      </div>

      <div
        className="text-center"
        style={{ paddingBottom: 10, paddingTop: 10 }}
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
            <StyledLink
              to="/enseignements/matiere/course/moncours"
              className="col-md-3 col-4"
            >
              <CardMatter image={Icone.course} matter={"Cours"} />
            </StyledLink>
            <StyledLink
              to="/enseignements/matiere/video/mavideo"
              className="col-md-3 col-4"
            >
              <CardMatter image={Icone.video} matter={"Vidéo"} />
            </StyledLink>
            <StyledLink
              to="/enseignements/matiere/definition/mesdef"
              className="col-md-3 col-4"
            >
              <CardMatter image={Icone.definitions} matter={"Définition"} />
            </StyledLink>

            <StyledLink
              to="/enseignements/matiere/quiz/mesquiz"
              className="col-md-3 col-4"
            >
              <CardMatter image={Icone.quiz} matter={"Quiz"} />
            </StyledLink>

            <StyledLink
              to="/enseignements/matiere/activite/mesmethode"
              className="col-md-3 col-4"
            >
              <CardMatter image={Icone.activity} matter={"Méthodes"} />
            </StyledLink>
            <StyledLink
              to="/enseignements/matiere/epreuves/mesepreuve"
              className="col-md-3 col-4"
            >
              <CardMatter image={Icone.course} matter={"Epreuves"} />
            </StyledLink>
          </div>
        </BlockMatter>
        <Footer />
      </div>
    </div>
  )
}

export default Lessons
