import React from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

import styled from 'styled-components';

class Converter extends React.Component {

    state = {
    //  volume: '',
      weight: '',
      product: ''
    }

    handleProductChange = (newProduct) => {
      this.setState({
        product: newProduct
      });

      return(
        <>
        {this.state.product}
        </>
      );
    }

    // handleVolumeChange = (newVolume) => {
    //   this.setState({
    //     volume: newVolume
    //   });

    //     return( 
    //     <>
    //     {this.state.volume}
    //     </>
    //     );
    // }

    handleWeightChange = (newWeight) => {
      this.setState({
        weight: newWeight
      });

        return( 
        <>
        {this.state.weight}
        </>
        );

    }

    submitButton = (event) => {
      event.preventDefault();

      let product = this.state.product;
      let weight = this.state.weight / 100;

      let volume = '';
      let teaSpoon = 0;
      let spoon = 0;
      let glass = 0;
      // let teaSpoon = 0.05;
      // let spoon = 0.15;
      // let glass = 2.5;

      if( product === 'liquids' ) {
        teaSpoon = weight * 0.05
        spoon = weight * 0.15
        glass = weight * 2.5 

      } else if ( product === 'flour' ) {
        teaSpoon = weight * 0.03
        spoon = weight * 0.11
        glass = weight * 1.65

      } else if ( product === 'sugar' ) {
        teaSpoon = weight * 0.04
        spoon = weight * 0.13
        glass = weight * 2.2

      } else if ( product === 'rice' ) {
        teaSpoon = weight * 0.05
        spoon = weight * 0.14
        glass = weight * 2.3

      } else if ( product === 'butter' ) {
        teaSpoon = weight * 0.05
        spoon = weight * 0.14
        glass = weight * 2.4

      } else {
        teaSpoon = weight * 0.05
        spoon = weight * 0.15
        glass = weight * 2.5
      }

      return (
        <>
        {this.state.teaSpoon}{this.state.spoon}{this.state.glass}
        </>
      )

    }

    // handleOnChange = (property, value) => {
    //   this.setState({[`${property.category}`]: {...this.state[`${property.category}`], [`${property.unit}`]: value}})
    // }

// kitchenUnits = (ml) => {
//     let unit, value

//     if (ml <= 5) {
//         unit = 'łyżeczka'
//         value = ml
//     } else if ( ml > 5 && ml <= 15 ) {
//         unit = 'łyżka'
//         value = ml
//     } else if ( ml > 15 && ml <= 250 ) {
//         unit = 'szklanka'
//         value = ml 
//     } else {
//         unit = 'ml'
//         value = ml
//     }

//     return {unit: unit, value: value}

// }


  render() {
    return (
      <StyledContainer>
      <Container fluid>
        <Row>
            <h3>
              Przelicznik Miar Kuchennych
            </h3>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Form onSubmit={this.SubmitButton}>

              <p className="mb-2">
                Wybierz rodzaj produktu z listy:
              </p>

              <select value={this.state.product} onChange={() => this.handleProductChange()}>
                <option value="liquids">Substancje płynne</option>
                <option value="flour">Mąka</option>
                <option value="sugar">Cukier</option>
                <option value="rice">Ryż</option>
                <option value="butter">Masło</option>
                <option value="oil">Olej</option>
                <option value="salt">Sól</option>
              </select>

              <p className="mb-2 mt-2">
                Wprowadź ilość:
              </p>

              <input
                type="number"
                className="field"
                name="volume"
                required
                //value={this.state.volume}
               // onBlur={this.blur}
                onChange={this.handleVolumeChange}
              />

              {/* 
              <p className="mb-2 mt-2">
                Wprowadź ilość w g:
              </p>

              <input
                type="number"
                className="field"
                name="weight"
                required
                //value={this.state.weight}
               // onBlur={this.blur}
                onChange={this.handleWeightChange}
              />
              */}
              
              <Button
                type="submit"
                className="btn-secondary"
                onSubmit={this.submitButton}>
                Przelicz!
              </Button>

              <p className="mb-2">
                Ilość łyżeczek: {this.state.teaSpoon}
              </p>
              <p className="mb-2 mt-2">
                Ilość łyżek: {this.state.spoon}
              </p>
              <p className="mb-2 mt-2">
                Ilość szklanek: {this.state.glass}
              </p>

            </Form>
          </Col>
        </Row>

      </Container>
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


export default Converter;
