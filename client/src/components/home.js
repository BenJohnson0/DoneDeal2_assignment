import React from "react";
import './home.css';

export const Home = () => {
  return (
    <div id = "main">
    <h2>Homepage</h2>
    <div id = "homecontainer">
        

        <div class = "homeitem">
            <img src="bmw.jpg" alt=""></img>
            <h2>Buy a car</h2> 
            <p>Buy all types of cars from new, including New 222 cars and Antiques.</p>

        </div>

        <div class = "homeitem">
            <img src = "salesman.jpg" alt=""></img>
            <h2>Sell a car</h2>
            <p>Place your car up for sale for millions of our users to view and enquire about!</p>
            
        </div>

        <div class = "homeitem">
            <img src="login.jpg" alt=""></img>
            <h2>Login</h2>

            <p>Login to see your ads performance and to sell your car.</p>
            
        </div>

        <div class = "homeitem">
            <img src="signup.jpg" alt=""></img>
            <h2>Sign up</h2>
            <p>Create your account today to: </p>

            Favourite your favourite ads <br></br>
            Place an Ad <br></br>
            Enquire about an Ad              
        </div>
      </div>
      </div>
  );
};

export default Home;


