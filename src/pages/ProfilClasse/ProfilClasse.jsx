import { useState, React } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./ProfilClasse.css"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"
import BannerSimple from "../../shared-components/BannerSimple/BannerSimple"
import CardProfil from "../../shared-components/CardProfil/CardProfil"
import { useNavigate } from "react-router-dom"

const Profilclasse = () => {
  var backgroundStyle = {
    backgroundColor: "#235390",
    fonFamily: "'Nunito Sans', sans-serif",
    backgroundPosition: "bottom -50px right 150px",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundImage: `url(require("./etoile.svg"))`,
  }
  const navigate = useNavigate()
  const [visibility, setVisibility] = useState(false)

  return (
    <div className="" style={backgroundStyle}>
      <BannerSimple />

      <div className="container">
        <div className=" row d-flex justify-content-around">
          <div className="col-md-9 title-crea text-center pt-5">
            <h2 className="cree-compte">Crée votre compte</h2>
            <p className="cree-subtitle">
              Si vous abonnez votre enfant, choisissez le profil parent.
            </p>
          </div>

          <div className="col-lg-5 col-10">
            <div class="row">
              <CardProfil
                onClick={() => setVisibility(!visibility)}
                link="./girl.svg"
                nameProfil="Elève"
              />
              <CardProfil
                onClick={() => setVisibility(!visibility)}
                link="./fille-mere.svg"
                nameProfil="Parent"
              />
              <CardProfil
                onClick={() => setVisibility(!visibility)}
                link="./girl.svg"
                nameProfil="Visiteur"
              />
            </div>
          </div>
          {/*end block */}
        </div>
        <div className="row d-flex justify-content-around mt-5">
          <div className="col-md-3 col-sm-6 col-8">
            {visibility && (
              <ButtonAction
                onClick={() => navigate("/profil2")}
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

export default Profilclasse
