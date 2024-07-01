import { Component } from "react";
import './index.css'
class OddEvenApp extends Component{
    state = {count:0}

    onIncrement = () =>{
        const randomNumber = Math.floor(Math.random() * 101);
        this.setState(prevState => ({
            count: prevState.count + randomNumber
        }))
    }

    render(){
        const {count} = this.state
        const textMessage = count % 2 === 0 ? "Even" : "Odd"
        return(
         
            
                <div className="container">
                    <h1>Count {count}</h1>
                    <p className="status">Count is {textMessage}</p>
                    <button type="button" onClick={this.onIncrement}>Increament</button>
                    <p>*Increase by random number between 0 to 100</p>
                </div>

        )
    }
}
export default OddEvenApp