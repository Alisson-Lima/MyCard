import {Card} from "./components/Card/"
import colorfulPoly from "./assets/images/triangulo.png"
import blackPoly from "./assets/images/trianguloBlack.png"
import "./appStyle.css"
function App() {

  return (
    <div className="App">
      <div className="container">
        <img src={colorfulPoly} className="poly colorful" />
        <Card />
        <img src={colorfulPoly} className="poly colorful" />
        <img src={blackPoly} className="poly black" />
      </div>
    </div>
  )
}

export default App
