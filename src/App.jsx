import './App.css';
import logo from "./assets/logo.png"
import clouds from './assets/clouds.png'

function App() {

  return (
    <>
    <div className="mainContainer">
      <div className="container">
        <div className="leftDiv">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="weatherData">
            <h1>16°</h1>
            <div className="cityDateTime">
              <h2>London</h2>
              <p>06:09 - Monday, 9 Sep ‘23</p>
            </div>
            <img src={clouds} alt="" />
          </div>
        </div>
        <div className="rightDiv">

        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
