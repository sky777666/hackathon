import React, { useState } from 'react'
import Compass from './svg/Compass'


export default function Landmark(props) {
    const [showInfo, setShowInfo] = useState(false)

    function toggleInfo() {
        setShowInfo(!showInfo)
    }

    return (
       
        <div>
             <section className="mainSection">
            <div className="background">
                <img width='500px' height='600' src={props.currentLandmark.image} alt="landmark" />
            </div>
            <div className={`${showInfo ? 'info' : 'hideInfo'}`}>
                <div className>
                    <span>{props.currentLandmark.name}</span>
                    <span>{props.currentLandmark.city}, {props.currentLandmark.country}</span>
                </div>

                <div className="">
                <div>
                    <span>{props.currentLandmark.language}</span>
                    <span>{props.currentLandmark.currency}</span>
                    <span>{props.currentLandmark.climate}</span>
                </div>
                <div>
                    <img width="200px" height="100px" src={props.currentLandmark.location} alt="landmark-location"/>
                </div>
                <div>
                    <span>{props.currentLandmark.desc}</span>
                </div>
            </div>
            <div className="button">
                <div className="button" onClick={toggleInfo}>
                    <Compass />
                </div>
            </div>
            </section>
        </div>
    )
}