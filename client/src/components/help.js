import React from "react";
import "./help.css";

export default function Help() {
    return (
        <div className="maincontainerhelp">
            <h1>Get Help</h1>
            <p>Find all information and FAQ's here</p>
            <div className="helpcontainer">
                <div className="contactusdiv">
                    <h3>Contact us</h3>
                    <p>Contact us by emailing us at benjohnson@tud.ie, carltallon@tud.ie</p>

                    <h3>This project's source code</h3>
                    <p>Find it on our <a href="https://github.com/carltallon">github</a> pages</p>
                </div>

                <div className="contactusdiv">
                    <h3>The Technology used </h3>

                    <p>We used ReactJS, MongoDB and Bootstrap CSS to build this webpage</p>
                </div>

                <div className="contactusdiv">
                <h3>Find us</h3>
                    <div class = "googlemaps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.180775147405!2d-6.2894665841611275!3d53.357919579981456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c02cb588d75%3A0xd288d4099c509cd6!2sTechnological%20University%20Dublin!5e0!3m2!1sen!2sie!4v1669068505156!5m2!1sen!2sie" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
                    </div>
                </div>

                <div className="contactusdiv">
                    <h3>Frequently asked Questions</h3>

                    <h5>Who are we?</h5>
                    <p>We are college students currently studying Computer Science (Infrastructure) in TUD</p>

                    <h5>What is this website?</h5>
                    <p>This is our third year Web Development Project, based on a replication of popular Irish car marketplace donedeal.ie</p>
                </div>

    
            </div>
        </div>
    )
}