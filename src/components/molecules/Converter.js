import React from 'react';
import { Container, Row } from 'react-bootstrap';

class Converter extends React.Component {

    state = {
      volume: {
        ml: 0
      },
      weight: {
        g: 0
      },

    }

    handleOnChange = (property, value) => {
      this.setState({[`${property.category}`]: {...this.state[`${property.category}`], [`${property.unit}`]: value}})
    }

    kitchenUnits = (ml) => {
      let unit, value
  
      if (ml <= 5) {
          unit = 'łyżeczka', value = ml
      } else if ( ml > 5 && ml <= 15 ) {
          unit = 'łyżka', value = ml
      } else if ( ml > 15 && ml <= 250 ) {
          unit = 'szklanka', value = ml 
      } else {
          unit = 'ml', value = ml
      }
  
      return {unit: unit, value: value}
  
  }
  

  render() {
    return (
      <Container fluid>
        <Row>
            <h3>
              Przelicznik Miar Kuchennych
            </h3>
        </Row>

      </Container>
    );
  }
}

export default Converter;
