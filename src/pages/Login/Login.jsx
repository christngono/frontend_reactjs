import { useState, React } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.scoped.css"
import ButtonAction from "../../shared-components/ButtonAction/ButtonAction"
import BannerSimple from "../../shared-components/BannerSimple/BannerSimple"
import TextField from "../../shared-components/TextField/TextField"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Login = () => {
  var backgroundStyle = {
    backgroundColor: "#235390",
    fonFamily: "'Nunito Sans', sans-serif",
    backgroundPosition: "bottom -50px right 150px",
    backgroundRepeat: "no-repeat",
    display: "block",
    height: "100vh",
    backgroundImage: `url(require("../../etoile.svg"))`,
  }
  const [startDate, setStartDate] = useState(new Date())
  const navigate = useNavigate()

  return (
    <div
      className=""
      style={{
        backgroundImage: `url("/background.svg")`,
        backgroundPositionY: "bottom",
        height: "850px",
      }}
    >
      <BannerSimple />
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-12 col-sm-12 title-crea text-center pt-3">
            <h2 className="">😀Dernière ligne droite !</h2>
          </div>
          <div className=" col-md-8 col-sm-8 col-lg-5 needs-validation">
            <TextField placeholder={"Nom"} />
            <TextField placeholder={"Telephone"} />
            <TextField placeholder={"Etablissement"} />
            <TextField placeholder={"Mot de passe"} />
            <TextField placeholder={"Confirmé le mot passe"} />
            <div className="col-md-12">
              <div className="label-birthday text-start">Date de naissance</div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-md-10 col-lg-12 col-sm-12 col-12 d-flex justify-content-around mt-3 ">
              <div className="col-lg-6 col-md-10 col-sm-10 col-10">
                <ButtonAction
                  onClick={() => navigate("/enseignements")}
                  text="Inscription"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
