import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';
import { Container, Form } from 'react-bootstrap';

class CalculatorBMI extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
           name: '',
           weight: '',
           height: '',
           bmi: '',
           optimalweight: ''
        };
       this.submitButton = this.submitButton.bind(this);
       this.heightChange = this.heightChange.bind(this);
       this.weightChange = this.weightChange.bind(this);
       this.change = this.change.bind(this);  
       this.ticker = this.ticker.bind(this); 
       this.blur = this.blur.bind(this); 
       this.calculateBMI = this.calculateBMI.bind(this); 
    }
  
  
    heightChange(event){
      this.setState({height: event.target.value});
      event.preventDefault();
    }
  
    blur(event){
     this.calculateBMI();
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
        this.setState({message: message});  
        this.setState({optimalweight: "Sugerowana waga dla Twojego wzrostu to przedział: "+low+ " - "+high + " kg."});    
        this.setState({bmi: Math.round(bmi * 100) / 100});   
  
    }
  
    submitButton(e) {
       e.preventDefault();
       this.calculateBMI();
    }
  
    ticker() {
      this.setState({time: new Date().toLocaleTimeString()})
    }
   
    componentDidMount(){
      setInterval(this.ticker, 60000);
    }
  
    change(e){
      e.preventDefault();
      console.log(e.target);
      this.setState({name: e.target.value});
    }
  
    render() {

      return (
        <StyledContainer>
          <div>
            <h3>Oblicz swój wskaźnik BMI</h3>
          </div>
            <StyledForm onSubmit={this.submitButton}>
              <label>
                Wpisz swoje imię: 
              </label>
              <input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change}   />
               <label>
               Wprowadź swój wzrost w cm: 
              </label>
              <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightChange}   />
               <label>
               Wprowadź swoją wagę w kg : 
              </label>
              <input type="text" name="weight" value={this.state.weight} onChange={this.weightChange}    />
              <label>{this.state.checked} Cześć {this.state.name}. Twoje BMI wynosi: {this.state.bmi} </label>

              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
               
              <input type="submit" value="Submit"/>
            </StyledForm>
        
        </StyledContainer>
      );

    }
  }

const StyledContainer = styled(Container)`

`;

const StyledForm = styled(Form)``;

  export default CalculatorBMI;