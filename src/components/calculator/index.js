import {Component} from "react";
import "./index.css";

class Calculator extends Component {

    state = {lettersCount: 0};

    countForLetters = (event) => {
        const word = event.target.value;
        const wordLength = word.length

        this.setState({lettersCount: wordLength});

    }

    render() {

        const {lettersCount} = this.state;

        return (
            <div className="bg-letter-calculator">
                <h1 className="calculator-heading">Calculate the Letters you enter</h1>
                <div className="cal-input-container">
                    <label className="label-element-cal" htmlFor="lettersInputCal">Enter the phrase</label>
                    <input type="text" placeholder="Enter the phrase" id="lettersInputCal" 
                    className="cal-input-element" onChange={this.countForLetters} />
                </div>
                <div className="cal-counter-container">
                    <p className="no-of-letters-cal">No.of letters: {lettersCount}</p>
                </div>
            </div>
        );
    }
}

export default Calculator;

