import "bootstrap/dist/css/bootstrap.min.css"
import BannerSimple from "../../shared-components/BannerSimple/BannerSimple"
import "./Apropos.css"
const Apropos = () => {
  return (
    <>
      <BannerSimple />
      <div className="container-apropos">
        <h1 className="text-center">TOUT SUR LASYLAB</h1>
        <div className="row">
          <h2>LE COMMENCEMENT: </h2>
          <p>
            En Afrique, au Cameroun particulièrement, nous avons constate un
            grand manque d’innovation dans le domaine de l’éducation et le
            niveau scolaire des élèves est de plus en plus bas dans le sens où
            il se pose le besoin d’interactivité car sans interactivité,
            l’éducation devient morose. Chez nous, la science se fait dans la
            tête et c’est ce qui démotive de plus en plus nos jeunes. Nous
            notons également l’arrivé en Afrique des réseaux sociaux qui les a
            encore plus éloignés de l’école. Nous même en tant que jeunes
            camerounais, avons également souffert du manque de flexibilité et de
            solutions adaptées à nos lacunes lorsque nous étions encore sur les
            bancs de l’école. C’est pour cette raison que nous avons créé
            Lasylab avec pour but de fournir des contenus de qualité accessibles
          </p>
        </div>

        <div className="row">
          <h2>NOTRE MISSION: </h2>
          <p>
            Notre mission est très simple : simplifier l’enseignement et
            l’adapter à tous les enfants quels que soit leurs difficultés et
            leurs niveaux de compréhension dans l’optique de leur redonner
            l’envie d’apprendre et la lucidité à saisir les opportunités
            qu’offre ce monde. Ainsi, nos contenus sont conçus pour répondre à
            toutes problématiques scolaires : Comprendre, Apprendre, Réviser et
            Progresser. Ces compétences leur seront utiles aujourd’hui ainsi que
            dans leurs différentes vies professionnelles et ensuite, libre à eux
            de devenir ingénieurs, physiciens, ou enseignants.
          </p>
        </div>

        <div className="row">
          <h2>Méthodologie d'apprentissage</h2>
          <p>
            Lasylab est 100% digitale, avec un site et une application qui
            donnent accès aux leçons/cours 24/24h et 7/7j. Nous mettons la
            méthodologie au cœur de nos contenus et de notre plateforme. Nous
            développons des contenus novateurs : cours vidéo, exercices
            interactifs et échange permanent avec des enseignants compétents.
            Cela plaît tellement aux élèves, les motive et les rend autonomes !
          </p>
        </div>
      </div>
    </>
  )
}

export default Apropos
