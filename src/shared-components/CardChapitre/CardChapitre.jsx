import "./CardChapitre.css"

const Cardchapitre = ({ name_lesson, clik, num }) => {
  return (
    <div className="rod col-md-7 card_lesson" onClick={clik}>
      <div>
        <span className="rot">{num}</span>
        <span className="px-2">{name_lesson}</span>
      </div>
    </div>
  )
}

export default Cardchapitre
