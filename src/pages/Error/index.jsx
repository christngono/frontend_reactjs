import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "../../shared-components/MainBanner/MainBanner"
function Error() {
  return (
    <>
      <MainBanner />
      <div className="row">
        <div className="col text-align center">
          <h1> Oup 🙈la page n'existe pas !</h1>
        </div>
      </div>
    </>
  )
}

export default Error
