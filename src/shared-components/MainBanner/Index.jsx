import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/header.css';


function Header() {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-color">
  <div className="container">
    <a className="navbar-brand"><img src="/logo-lasylab.png" alt="" width="140" height="60" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
         <Link className="nav-link elt-menu" to="/apprendre"><img />Apprendre</Link>
         <Link className="nav-link elt-menu" to="/reviser"><img />Reviser</Link>
         <Link className="nav-link elt-menu" to="/discuter"><img  />Discuter</Link>
        <a className="nav-link profil-rounded" tabindex="-1" aria-disabled="true"></a>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header;