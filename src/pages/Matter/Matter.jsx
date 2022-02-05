import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import CardChapitre from "../../shared-components/CardChapitre/CardChapitre"
import { Icone } from "../../Data/Icone"
import "./Matter.css"
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

function Matter() {
  return (
    <>
      <MainBanner />
      <div
        className="text-center"
        style={{ paddingBottom: 50, paddingTop: 50 }}
      >
        <h4>
          <img src={Icone.maths} height="40" />
          <span>Mathématique</span>
          <span>- PA4</span>
        </h4>
      </div>

      <div className="container mb-3">
        <BlockMatter className="row d-flex justify-content-around mt-5 ">
          <div className=" text-center ">
            {" "}
            <span className="badge1 rod">Leçons</span>
          </div>
          <CardChapitre num={1} name_lesson={"Inequation et inéquation"} />
          <CardChapitre num={2} name_lesson={"Trigonometrie"} />
          <CardChapitre num={3} name_lesson={"Fonction numérique"} />
          <CardChapitre num={4} name_lesson={"Limites et continuité"} />
          <CardChapitre num={5} name_lesson={"Dérivation"} />
          <CardChapitre num={6} name_lesson={"Suites numérique"} />
          <CardChapitre num={7} name_lesson={"Arithmétique"} />
          <CardChapitre num={8} name_lesson={"Statistique"} />
          <CardChapitre num={9} name_lesson={"Dénombrement"} />
        </BlockMatter>
        <Footer />
      </div>
    </>
  )
}

export default Matter
