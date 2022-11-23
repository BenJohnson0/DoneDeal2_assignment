import "./sell.css";

export default function Sell() {
    return (
        <div className="sellcontainer">
            <h1>Sell Your Car</h1>

            <p>Post your car up for sale here. </p>


            <div class = "sellform">
                <label>Car name</label>
                <input type = "text"></input>

                <label>Car engine</label>
                <input type = "text"></input>

                <label>Car Registration Number</label>
                <input type = "text"></input>

                <label>Car price</label>
                <input type = "text"></input>

                <label>Car Image filename</label>
                <input type = "text"></input>
                
            </div>
        </div>
    )
}