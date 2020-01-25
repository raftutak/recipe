import React from 'react';
import CalculatorTextInput from './CalculatorTextInput.js'
import styled from 'styled-components';
import CalculatorSubmitButton from './CalculatorSubmitButton.js';


const StyledDiv = styled('div')`
    .row {
        display: block;
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
    }
`;

class CalculatorForm extends React.Component {
    render() {
        return(
            <div>
                <StyledDiv className="row">
                    <CalculatorTextInput label="Height" placeholder="Wpisz wzrost w metrach" onChange={this.heightChange} />
                </StyledDiv>
                <StyledDiv className="row">
                    <CalculatorTextInput label="Weight" placeholder="Wpisz wagę w kilogramach" onChange={this.weightChange} />
                </StyledDiv>
                <StyledDiv className="row">
                     <CalculatorSubmitButton label="SUBMIT" onClick={ this.computeBmi } />
                </StyledDiv>
                <StyledDiv className="row">
                    <h3>BMI = {this.state.bmi}</h3>
                </StyledDiv>
                <StyledDiv className="row">
                    <h3>{this.state.bmiClass}</h3>
                </StyledDiv>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.weightChange = this.weightChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.bmiValue = this.bmiValue.bind(this);
        this.bmiClass = this.bmiClass.bind(this);
        this.bmi = this.bmi.bind(this);
    }
    
    weightChanged(weightValue) {
        this.setState({ weight : weightValue });
    }
    
    heightChanged(heightValue) {
        this.setState({ height:  heightValue });
    }

    computeBmi() {
        let bmiValue = ( this.state.weight / (this.state.height * this.state.height) );
        this.setState({ bmi : bmiValue });
        let bmiClass = this.getBmi(bmiValue);
        this.setState({ bmiClass : bmiClass });
    }

    getBmi(bmi) {
        if(bmi < 18.5) {
            return "Underweight";
        }
        if(bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight";
        }
        if(bmi >= 25 && bmi < 29.9) {
            return "Overweight";
        }
        if(bmi >= 30) {
            return "Obesity";
        }
    }
}

export default CalculatorForm;