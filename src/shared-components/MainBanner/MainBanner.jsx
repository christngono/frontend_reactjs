import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import "./MainBanner.css"
import { Icone } from "../../Data/Icone"

function MainBanner() {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-color">
        <div className="container">
          <a
            className="navbar-brand"
            to="/enseignements"
            style={{ cursor: "pointer" }}
          >
            <img src="/logo-lasylab.png" alt="" width="140" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link elt-menu align-middle"
                to="/enseignements"
              >
                <img src={Icone.learning} height="40" />
                <span className="align-middle"> Apprendre</span>
              </Link>
              <Link className="nav-link elt-menu" to="/reviser">
                <img src={Icone.revision} height="40" />
                <span className="align-middle"> S'entrainer</span>
              </Link>
              <Link className="nav-link elt-menu" to="/Message">
                <img src={Icone.message} height="40" />
                <span className="align-middle"> Message</span>
              </Link>
              <Link className="nav-link elt-menu" to="/Message">
                <img src={Icone.rubit} height="30" />
                <span className="align-middle">2</span>
              </Link>
              <Link className="nav-link elt-menu" to="/compte">
                <img src={Icone.defaultavatar} height="50" />
                <span className="align-middle">Christian</span>
              </Link>
              <a
                className="nav-link profil-rounded"
                tabindex="-1"
                aria-disabled="true"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
