import './App.css';
import logo from "./assets/logo.png"
import clouds from './assets/clouds.png'
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";



function App() {

  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div className="content">
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
            <div className='searchBar'>
              <input type="text" />
            </div>
            <p>Weather Details..</p>
            <div className="tempDetails">
              <h4>thunderstorm with light drizzle</h4>
              <div className="tempMax">
                <p>Temp max</p>
                <p>19°</p>
                <FaTemperatureHigh />                
              </div>
              <div className="tempMin">
                <p>Temp min</p>
                <p>15°</p>
                <FaTemperatureLow />               
              </div>
              <div className="tempMin">
                <p>Temp min</p>
                <p>15°</p>
                <FaTemperatureLow />               
              </div>
              <div className="tempMin">
                <p>Temp min</p>
                <p>15°</p>
                <FaTemperatureLow />               
              </div>
              <div className="tempMin">
                <p>Temp min</p>
                <p>15°</p>
                <FaTemperatureLow />               
              </div>
            </div>
            <hr></hr>
            <div className="todayWeather">
              <h4>Today’s Weather Forecast...</h4>
              <div className="hourlyTemp">
                <FaRegSnowflake />
                <div className="">
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <div className="hourlyTempC">
                  <p>19°</p>
                </div>
              </div>
              <div className="hourlyTemp">
                <FaRegSnowflake />
                <div className="">
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <div className="hourlyTempC">
                  <p>19°</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>     
    </>
  )
}

export default App
