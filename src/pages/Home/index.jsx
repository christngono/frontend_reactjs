import React from "react"
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import CardMatter from "../../shared-components/CardMatter/CardMatter"
import styled from "styled-components"
import ProgressBar from "../../shared-components/ProgressBar/ProgressBar"
import { Icone } from "../../Data/Icone"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../../shared-components/Footer/Footer"

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

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="color-fond container-fluid">
      <MainBanner />
      <div className="container ">
        <div class="row justify-content-md-center mb-3">
          <div class="col-md-12  el-class">
            <h3 class="text-center">Première</h3>
          </div>
          <ProgressBar />
        </div>
        <BlockMatter className="row mt-3">
          <StyledLink
            to="/enseignements/philosophie"
            className="col-md-3 col-4"
          >
            <CardMatter image={Icone.philo} matter={"Philosophie"} />
          </StyledLink>
          <StyledLink
            to="/enseignements/mathémqatique/:typecourse"
            className="col-md-3 col-4"
          >
            <CardMatter image={Icone.maths} matter={"Mathématique"} />
          </StyledLink>
          <StyledLink to="/enseignements/Physique" className="col-md-3 col-4">
            <CardMatter image={Icone.physique} matter={"Physique"} />
          </StyledLink>
          <StyledLink to="/enseignements/Anglais" className="col-md-3 col-4">
            <CardMatter image={Icone.anglais} matter={"Anglais"} />
          </StyledLink>
          <StyledLink to="/enseignements/Francais/" className="col-md-3 col-4">
            <CardMatter image={Icone.french} matter={"Français"} />
          </StyledLink>
          <StyledLink to="/enseignements/Science/" className="col-md-3 col-4">
            <CardMatter image={Icone.svt} matter={"Science"} />
          </StyledLink>
        </BlockMatter>
      </div>
      <Footer className=" position-absolute bottom-0 end-0" />
    </div>
  )
}
export default Home
