import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';

//Bootstrap 
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

//Data & assets
import bmiDescription from '../../data/bmiDescription.js'

class CalculatorBMI extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
       //    name: '',
           weight: '',
           height: '',
           bmi: '',
           optimalWeight: '',
          //  fields: {},
          //  errors: {}
        };
       this.submitButton = this.submitButton.bind(this);
       this.heightChange = this.heightChange.bind(this);
       this.weightChange = this.weightChange.bind(this);
       this.handleChange = this.handleChange.bind(this);  
       //this.ticker = this.ticker.bind(this); 
       this.blur = this.blur.bind(this); 
       this.calculateBMI = this.calculateBMI.bind(this); 
    }
  
    heightChange(event){
      this.setState({height: event.target.value});
      event.preventDefault();
    }
  
    blur(event){
     this.calculateBMI();
     event.preventDefault();
    }
     weightChange(event){
      this.setState({weight: event.target.value});
      event.preventDefault();
    }
  
    calculateBMI(){
  
        let heightSquared = (this.state.height/100  * this.state.height/100);
        let bmi = this.state.weight / heightSquared;
        let low = Math.round(18.5 * heightSquared);                                                         
        let high = Math.round(24.99 * heightSquared);    
        let message = "";

        if( bmi >= 18.5  && bmi <= 24.99 ){
            message = "Wartość BMI jest prawidłowa!";
        }
        else if(bmi >= 25 && bmi <= 29.9){
          message = "Masz nadwagę.";
        }
        else if(bmi >= 30 && bmi <= 34.99){
            message ="Masz I stopień otyłości.";
        }
        else if(bmi >= 34.99 && bmi <= 39.99){
            message ="Masz II stopień otyłości.";
        }
        else if(bmi >= 40){
            message ="Masz skrajną otyłość.";
        }
        else if(bmi >= 17 && bmi <= 18.49){
          message = "Masz niedowagę.";
        }
        else if(bmi >= 16 && bmi <= 16.99){
          message = "Jesteś wychudzony/a.";
        }
        else if(bmi < 16){
          message = "Jesteś skrajnie wychudzony/a.";
        }
        
        // this.setState({message: message});  
        // this.setState({optimalWeight: "Sugerowana waga dla Twojego wzrostu to od "+low+ " kg do "+high + " kg."});
        // this.setState({bmi: Math.round(bmi * 100) / 100});   
    }
  
    // ticker() {
    //   this.setState({time: new Date().toLocaleTimeString()})
    // }
   
    // componentDidMount(){
    //   setInterval(this.ticker, 60000);
    // }
  
    handleChange(event){
      event.preventDefault();
      console.log(event.target);
      this.setState({name: event.target.value});
    }
  
    // handleValidation(){
    //     let fields = this.state.fields;
    //     let errors = {};
    //     let isFormValid = true;

    //     if(!fields["name"]){
    //       isFormValid = false;
    //       errors["name"] = "Pole nie może być puste."
    //     }

    //     if(typeof fields["name"] !== "undefined"){
    //       if(!fields["name"].match(/[0-9]*/)){
    //         isFormValid = false;
    //         errors["name"] = "Wprowadź tylko liczby"
    //       }
          
    //     this.setState({errors: errors});
    //     return isFormValid;

    //     }

    // }
  
    submitButton(event) {
      this.calculateBMI();
      event.preventDefault();
      let message = "";
      let heightSquared = (this.state.height/100  * this.state.height/100);
      let bmi = this.state.weight / heightSquared;
      let low = Math.round(18.5 * heightSquared);                                                         
      let high = Math.round(24.99 * heightSquared);  
      this.setState({message: message});  
      this.setState({optimalWeight: "Sugerowana waga dla Twojego wzrostu to od "+low+ " kg do "+high + " kg."});
      this.setState({bmi: Math.round(bmi * 100) / 100});   
    //   if(this.handleValidation()){

    //   } else {
    //     alert("Błędy!");
    //   }
    }


    render() {

      return (
        <StyledContainer fluid>
          <Row className="my-4">
            <h3>Oblicz swój wskaźnik BMI</h3>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={6} lg={6}>
              <StyledForm onSubmit={this.submitButton}>
                
                <p className="mb-2">
                Wprowadź swój wzrost w centymetrach: 
                </p>

                <input
                  className="field"
                  type="number"
                  name="height"
                  required
                  value={this.state.height}
                  onBlur={this.blur}
                  onChange={this.heightChange}
                />

                <p className="mb-2 mt-2">
                Wprowadź swoją wagę w kilogramach: 
                </p>
                
                <input
                  className="field"
                  type="number"
                  refs="weight"
                  required
                  value={this.state.weight}
                  onChange={this.weightChange}
                />

                <p className='mt-2 mb-2'>
                  {this.state.checked}Twoje BMI wynosi: {this.state.bmi}
                </p>

                <p className="mb-2">{this.state.message}</p>
                <p className="mt-2 mb-2">{this.state.optimalWeight}</p>

                <Button
                  type="submit"
                  className="btn btn-secondary"
                  onSubmit={this.submitButton}
                >
                  Oblicz BMI
                </Button>

              </StyledForm>
            </Col>
            <Col xs={12} md={6} lg={6} className="mt-2">
              <StyledDescriptionContainer>
              <h3 className="mb-3">
              Czym jest BMI?
              </h3>
              <p className="mt-2">
              BMI jest jednym z ważnych wskaźniów określających nasz stan fizyczny, ale niestety nie wystarczającym.
              Bardzo ważnym uzupełnieniem BMI jest wskaźnik ilości tłuszczu brzusznego - zbyt duży może oznaczać niebezpieczną
              otyłość brzuszną i to nawet przy prawidłowym BMI! Ponadto, paradoksalnie, badania naukowe wskazują, że osoby
              z lekką nadwagą zwykle są zdrowsze i żyją dłużej od osób z tzw. "prawidłową wagą". Pojawiają się nawet głosy,
              że ustalony arbitralnie przez WHO próg nadwagi (25) jest zbyt niski.
              </p>
              </StyledDescriptionContainer>
            </Col>
          </Row>
        </StyledContainer>
      );

    }
  }

const StyledDescriptionContainer = styled(Container)`
      width: 100%;
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 5px;
      padding: 1.2em;
      text-align: justify;
`;

const StyledContainer = styled(Container)`
    padding: 1.2em;

    Button { 
      width: 100%;
      color: hsl(215, 40%, 12%);
      font-weight: 600;
      background-color: rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 5px;
    }

    Button:hover {
      color: rgb(255,255,255);
      background-color: hsl(44, 60%, 42%);
      border: 1px solid hsl(44, 60%, 42%);
    }

    Button:focus {
      outline: none;
      color: rgb(255,255,255);
      background-color: hsl(44, 60%, 42%);
      border: 1px solid hsl(44, 60%, 42%);
    }
`;

const StyledForm = styled(Form)`
    .field {
      text-indent: 10px;
      width: 100%;
      height: 30px;
      border: 1px solid rgba(0,0,0,0.1);
    }
`;



  export default CalculatorBMI;