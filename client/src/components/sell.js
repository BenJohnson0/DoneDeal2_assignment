import "./sell.css";
import React from 'react';

class Sell extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          newCar: [
            " ",
            " ",
            " ",
            " "
          ]
        };
      }

      onSubmit(e) {
        e.preventDefault();
        console.log(this.state.newCar);
      }

      onCarChange(index, e) {

        var cars = this.state.newCar.slice();
   
        cars[index] = e.target.value;
   
        this.setState({
          newCar: cars
        });
      }
   
      render() {

        const list = this.state.newCar.map(value => {
            return <li>{value}</li>
            
          });

    return (
        <div className="sellcontainer">
            <h1>Sell Your Car</h1>
                <p>Post your car up for sale here. </p>
                    <div class = "sellform">
                        <form onSubmit={this.onSubmit}>
                <label>Car name</label>
                <input type = "text" value={this.state.newCar[0]} onChange={this.onCarChange.bind(this, 0)} required></input><br></br>

                <label>Car engine</label>
                <input type = "text" value={this.state.newCar[1]} onChange={this.onCarChange.bind(this, 1)} required></input><br></br>

                <label>Car Registration Number</label>
                <input type = "text" value={this.state.newCar[2]} onChange={this.onCarChange.bind(this, 2)} required></input><br></br>

                <label>Car price</label>
                <input type = "text" value={this.state.newCar[3]} onChange={this.onCarChange.bind(this, 3)} required></input><br></br>

                <button>Sell my car!</button>
                        </form>
                    </div>

                    <div id="list" class="ad">
                        <ul>{list}</ul>
                        </div>

                </div>
            )
        }
    }

export default Sell;