import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
import CardMatter from "../../shared-components/Cardmatter/CardMatter"
import styled from "styled-components"

const CardLabel = styled.div``

const Home = () => {
  return (
    <>
      <MainBanner />
      <CardMatter />
    </>
  )
}

export default Home
