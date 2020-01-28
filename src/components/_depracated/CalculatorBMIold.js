import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';

// BOOTSTRAP
import { Form } from 'react-bootstrap';

// DATA - ASSETS
import CalculatorForm from '../atoms/CalculatorForm.js';
import CalculatorTextInput from '../atoms/CalculatorTextInput.js';
import CalculatorSubmitButton from '../atoms/CalculatorSubmitButton.js';

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: '15px'
  })
};

const CalculatorBMI = () => (
    <AppContext.Consumer>
        {context => (
            <CalculatorForm>
            </CalculatorForm>
        )}
    </AppContext.Consumer>
);

// class Calculator extends React.Component {

//   handleChange(event) {
//     let inputValue = event.target.value;
//     this.setState({ value: inputValue });
//     this.props.onChange(inputValue);
//   }

//   constructor(props) {
//       super(props);
//       this.state = { value : '' };
//       this.handleChange = this.handleChange.bind(this);
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     alert('Alert: ' + this.state.value);
//   }

//   weightChange(weightValue) {
//     this.setState({ weight: weightValue });
//   }

//   heightChange(heightValue) {
//     this.setState({ height: heightValue });
//   }

//   calculateBMI() {
//     let bmiValue = this.state.weight / (this.state.height * this.state.height);
//     this.setState({ bmi: bmiValue });
//     let bmiClass = this.getBmi(bmiValue);
//     this.setState({ bmiClass: bmiClass });
//   }

//   getBmi(bmi) {
//     if (bmi < 18.5) {
//       return 'Underweight';
//     }
//     if (bmi >= 18.5 && bmi < 24.9) {
//       return 'Normal weight';
//     }
//     if (bmi >= 25 && bmi < 29.9) {
//       return 'Overweight';
//     }
//     if (bmi >= 30) {
//       return 'Obesity';
//     }
//   }

//   render() {
//       return (
//           <AppContext.Consumer>
//               {context => (
//                 <>

//             <div>
//                    <h3> BMI: {context.bmi} </h3>
//             </div>
//                 </>
//               )
//             }
//           </AppContext.Consumer>
//       );
//   }

// }


export default CalculatorBMI;
