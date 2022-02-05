import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import CardMatter from "../../shared-components/CardMatter/CardMatter"
import styled from "styled-components"
import ProgressBar from "../../shared-components/ProgressBar/ProgressBar"
import { Icone } from "../../Data/Icone"

import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

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
const clickMatter = styled.link`
  display: block;
`
const Home = () => {
  return (
    <>
      <MainBanner />
      <div className="container">
        <div class="row justify-content-md-center mb-3">
          <div class="col-md-12  el-class">
            <h3 class="text-center">Première</h3>
          </div>
          <ProgressBar />
        </div>
        <BlockMatter className="row mt-3">
          <CardMatter
            to="/profil2"
            image={Icone.philo}
            matter={"Philosophie"}
          />
          <CardMatter image={Icone.svt} matter={"Mathématique"} />
          <CardMatter image={Icone.physique} matter={"Physique"} />
          <CardMatter image={Icone.svt} matter={"Science"} />
          <CardMatter image={Icone.french} matter={"Français"} />
          <CardMatter image={Icone.anglais} matter={"Anglais"} />
        </BlockMatter>
      </div>
    </>
  )
}
export default Home
