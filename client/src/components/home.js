import React from "react";
import './home.css';

export default function Home() {
    return (
        
        <div class = "featureddiv">

                <div class = "ad">
                <img src = "audi.jpg"alt=''></img>
                <h4>Audi A4</h4>
                <hr></hr>
                <h5>€2000</h5>
                <h5>Laois</h5>
                <button>See more</button>
                </div>

                <div class = "ad">
                    <img src = "bmw.jpg" alt=''></img>
                    <h4> BMW</h4>
                    <hr></hr>
                    <h5>€6000</h5>
                    <h5>Kildare</h5>
                    <button>See more</button>
                </div>

                <div class = "ad">
                    <img src = "skoda.jpg"alt=''></img>
                    <h4> Skoda</h4>
                    <hr></hr>
                    <h5>€8000</h5>
                    <h5>Dublin</h5>
                    <button>See more</button>
                </div>

                <div class = "ad">
                    <img src = "ford.jpeg"alt=''></img>
                    <h4> Ford</h4>
                    <hr></hr>
                    <h5>€10000</h5>
                    <h5>Meath</h5>
                    <button>See more</button>
                </div>
            </div>
        );
    }


