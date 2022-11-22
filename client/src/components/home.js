import React from "react";
import './home.css';

export default function Home() {
    return (
        <div class = "homemaindiv">
            <h2>Featured Ads</h2>
        <div class = "featureddiv">

                <div class = "ad">
                <img src = "audi.jpg"alt=''></img>
                <h4>Audi A4</h4>
                <hr></hr>
                <h5>€2,000</h5>
                <h5>Laois</h5>
                <button>See more</button>
                <button><i className="fa fa-heart"></i></button>
                </div>

                <div class = "ad">
                    <img src = "bmw.jpg" alt=''></img>
                    <h4> BMW</h4>
                    <hr></hr>
                    <h5>€6,000</h5>
                    <h5>Kildare</h5>
                    <button>See more</button>
                    <button><i className="fa fa-heart"></i></button>
                </div>

                <div class = "ad">
                    <img src = "skoda.jpg"alt=''></img>
                    <h4> Skoda</h4>
                    <hr></hr>
                    <h5>€8,000</h5>
                    <h5>Dublin</h5>
                    <button>See more</button>
                    <button><i className="fa fa-heart"></i></button>
                </div>

                <div class = "ad">
                    <img src = "ford.jpeg"alt=''></img>
                    <h4> Ford</h4>
                    <hr></hr>
                    <h5>€10,000</h5>
                    <h5>Meath</h5>
                    <button>See more</button>
                    <button><i className="fa fa-heart"></i></button>
                </div>
            </div>
        </div>
        );
    }


