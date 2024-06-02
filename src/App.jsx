import './App.css';
import logo from "./assets/logo.png"
import clouds from './assets/clouds.png'
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
// import { FaRegSnowflake } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BsClouds } from "react-icons/bs";
import { FaWind } from "react-icons/fa";



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
                <input type="text" placeholder='Search Location...' />
                <FaMagnifyingGlass className='magnifier' />
              </div>
              <hr />
              <p className='weatherDetails'>Weather Details..</p>
              <div className="tempDetails">
                <h4>thunderstorm with light drizzle</h4>
                <div className="tempMax">
                  <p className='tempMaxText'>Temp max</p>
                  <p className='tempMaxDeg'>19°</p>
                  <FaTemperatureHigh className='tempMaxIcon' />                
                </div>
                <div className="tempMin">
                  <p className='tempMinText'>Temp min</p>
                  <p className='tempMinDeg'>15°</p>
                  <FaTemperatureLow className='tempMinIcon' />               
                </div>
                <div className="tempMin">
                  <p className='tempMinText' >Humadity</p>
                  <p className='tempMinDeg'>58%</p>
                  <MdOutlineWaterDrop className='tempMinIcons' />               
                </div>
                <div className="tempMin">
                  <p className='tempMinText'>Cloudy</p>
                  <p className='tempMinDeg'>86%</p>
                  <BsClouds className='tempMinIcons' />               
                </div>
                <div className="tempMin">
                  <p className='tempMinText'>Wind</p>
                  <p className='tempMinWind'>5km/h</p>
                  <FaWind className='tempMinIcons'/>               
                </div>
              </div>
              <hr></hr>
              
              {/* <div className="todayWeather">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>     
    </>
  )
}

export default App
