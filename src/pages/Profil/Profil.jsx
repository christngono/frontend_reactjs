import { useState, React } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Profil.css"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"
import BannerSimple from "../../shared-components/BannerSimple/BannerSimple"
import { useNavigate } from "react-router-dom"

const Profil = () => {
  var backgroundStyle = {
    backgroundColor: "#235390",
    fonFamily: "'Nunito Sans', sans-serif",
    height: "850px",
    backgroundImage: `url("/background.svg")`,
    backgroundPositionY: "bottom",
  }
  const navigate = useNavigate()
  const [visibility, setVisibility] = useState(false)

  const handleToggleVisibility = () => {
    setVisibility(() => {
      return { visibility: true }
    })
  }

  return (
    <div className="" style={backgroundStyle}>
      <BannerSimple />

      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-10 title-crea text-center mt-5 pt-5">
            <h2 className="cree-compte">
              😀En quelle classe es-tu (2020 -2021)?
            </h2>
          </div>

          <div className="col-lg-3 col-12 ">
            <div className="row justify-content-around">
              <div
                className="col-1 select-clas "
                onClick={() => setVisibility(!visibility)}
              >
                <span>3eme</span>
              </div>
              <div
                className="col-1 select-clas "
                onClick={() => setVisibility(!visibility)}
              >
                <span>1ereC</span>
              </div>
              <div
                className="col-1 select-clas "
                onClick={() => setVisibility(!visibility)}
              >
                <span>1ereD</span>
              </div>
              <div
                className="col-2 select-clas "
                onClick={() => setVisibility(!visibility)}
              >
                <span>1ereA</span>
              </div>
              <div
                className="col-3 select-clas "
                onClick={() => setVisibility(!visibility)}
              >
                <span>Tle A</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center pt-5">
          <div className="col-md-3 col-sm-6 col-8">
            {visibility && (
              <ButtonAction
                onClick={() => navigate("/login")}
                text="Continuer"
              />
            )}
          </div>
          <div className="col-md-10 text-center mt-5">
            <p>
              {" "}
              <a href="#">Déjà un compte? connecte-toi</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil
