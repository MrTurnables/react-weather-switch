import { useEffect, useState } from "react";
import "./weather-switch.css";

interface WeatherSwitchProps {
    value:boolean;
    setValue:(value:boolean)=>void;
}

import React from 'react';
import Star from "./star";

const ForegroundCloud = () => {
    return (
      <div className="foreground-cloud">
          <div className="cloud-element cloud-element-1"></div>
          <div className="cloud-element cloud-element-2"></div>
          <div className="cloud-element cloud-element-3"></div>
          <div className="cloud-element cloud-element-4"></div>
          <div className="cloud-element cloud-element-5"></div>
          <div className="cloud-element cloud-element-6"></div>
          <div className="cloud-element cloud-element-7"></div>
      </div>
    )
  }

const BackgroundCloud = () => {
  return (
    <div className="background-cloud">
        <div className="cloud-element cloud-element-1"></div>
        <div className="cloud-element cloud-element-2"></div>
        <div className="cloud-element cloud-element-3"></div>
        <div className="cloud-element cloud-element-4"></div>
        <div className="cloud-element cloud-element-5"></div>
        <div className="cloud-element cloud-element-6"></div>
        <div className="cloud-element cloud-element-7"></div>
    </div>
  )
}


const WeatherSwitch:React.FC<WeatherSwitchProps> = ({value, setValue}) => {
    const [on, setOn] = useState(value);

    const toggleOn = () => {
        setOn((prev:boolean)=>!prev);
    }

    useEffect(()=>{
        setValue(on);
    },[on])

  return (
    <div 
    className={`switch-container ${on ? "on" : ""}`}
    onClick={toggleOn}>
        <div className={
            `switch-button ${on ? "on" : ""}`
        }>
            <div className="rays ray-1"></div>
            <div className="rays ray-2"></div>
            <div className="rays ray-3"></div>
        </div>

        {/* Stars */}
        <div className={`stars ${on ? "on" : ""}`}>
            <div style={{
                position:"absolute",
                top:"15%",
                left:"30%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={7} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"30%",
                left:"15%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={3} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"45%",
                left:"30%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={3} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"85%",
                left:"30%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={2} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"75%",
                left:"20%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={1} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"80%",
                left:"17%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={1} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"20%",
                left:"70%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={2} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"50%",
                left:"62%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={2} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"70%",
                left:"74%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={4} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"57%",
                left:"85%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={3} 
                />
            </div>

            <div style={{
                position:"absolute",
                top:"30%",
                left:"90%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Star 
                    size={7} 
                />
            </div>
        </div>

        {/* Clouds */}
        <div className={`clouds ${on ? "on" : ""}`}>
            <BackgroundCloud />
            <ForegroundCloud />
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default WeatherSwitch