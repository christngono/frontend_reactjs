import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Onboarding.css"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"
import { useNavigate } from "react-router-dom"

function Onboarding() {
  var backgroundStyle = {
    backgroundColor: "#235390",
    fonFamily: "'Nunito Sans', sans-serif",
    backgroundPosition: "bottom -50px right 150px",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundImage: `url(require("./etoile.svg"))`,
  }
  const history = useNavigate()
  return (
    <div style={backgroundStyle}>
      <div className="bg-white px-1 py-2">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 col-1">
            <img src="./logo-lasylab.png" height="50" alt="" />
          </div>
          <div className="col-md-6 col-10 text-end">
            {" "}
            <p className="num text-end">
              <span>Infos: </span> 6 77 51 88 62{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container-bb">
        <div className="row">
          <div className="col-lg-6 b1">
            <div className="row d-flex justify-content-around">
              <div className="col-lg-7 text-center col-md-8 col-12 align-self-start d-block d-sm-none">
                <h3>Tout pour réussir</h3>
                <p>Revise et apprend facilement tes leçons de la 6e en Tle</p>
              </div>
              <div className="col-lg-8 col-md-8 col-12 align-self-center">
                <img
                  src="../image-acceuil.svg"
                  alt="image-presentation"
                  height="220"
                  className="img-fluid mx-auto d-block"
                />
              </div>
              <div className="col-lg-6  col-md-8 col-10 d-block d-sm-none mt-5">
                <ButtonAction
                  onClick={() => history("/profil")}
                  text="C'est partie😀"
                />
                <a href="/discution" class="button-action-nof cob">
                  J'ai déjà un compte
                </a>
              </div>
              <div className="col-lg-8 col-md-8 col-12 align-self-end d-none d-sm-block">
                <p className="link-footer">
                  {" "}
                  <a href="#"> Découvrez la méthodologie lasylab</a>
                  <a href="#">Qui sommes-nous </a> <a href="#">Aide</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 b2 d-none d-sm-block ">
            <div className="row d-flex justify-content-around">
              <div className="col-lg-7 text-center col-md-8 col-12 align-self-center cow">
                <h3 class="cow">Tout pour réussir</h3>
                <p>Revise et apprend facilement tes leçons de la 6e en Tle</p>
              </div>
              <div className="col-lg-6  col-md-8 col-12">
                <ButtonAction
                  onClick={() => history("/profil")}
                  text="C'est partie😀"
                />
                <a href="/discution" class="button-action-nof">
                  J'ai déjà un compte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*<div id="app" className="">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 block-r pt-4 d-none d-sm-block">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <img src="../logo-lasylab.png" alt="logo" height="50" />
            </div>

            <div className="col-md-8 ">
              <img
                src="../image-acceuil.svg"
                alt="image-presentation"
                height="250"
              />
            </div>

            <div className="col-lg-6 col-md-8 align-self-center-end">
              <p className="link-footer">
                {" "}
                <a href="#"> Découvrez la méthodologie lasylab</a>
                <a href="#">Qui sommes-nous </a> <a href="#">Aide</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 block-l">
          <div className="row justify-content-center pt-5">
            <div className="col-md-3 offset-md-9">
             
            </div>

            <div className="col-md-7 offset-md-2 align-self-center">
              <h3>Tout pour réussir</h3>
              <p>Revise et apprend facilement tes leçons de la 6e en Tle</p>
            </div>

            <div className="col-md-5">
              <ButtonAction
                onClick={() => navigate("/profil")}
                text="C'est partie😀"
              />
              <a href="/discution" class="button-action-nof">
                J'ai déjà un compte
              </a>
            </div>
          </div>
        </div>
      </div>
  </div> */
  )
}

export default Onboarding
