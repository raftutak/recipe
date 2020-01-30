import React from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

class Converter extends React.Component {

    state = {
      volume: {
        ml: 0
      },
      weight: {
        g: 0
      },

    }

    handleVolumeChange = (newVolume) => {
      this.setState({
        volume: newVolume
      });

        return( 
        <>
        {this.state.volume}
        </>
        );

    }

    handleWeightChange = (newWeight) => {
      this.setState({
        weight: newWeight
      });
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
                Wprowadź ilość:
              </p>

              <input
                type="number"
                //className="field"
                name="volume"
                required
                value={this.state.volume}
               // onBlur={this.blur}
                onChange={this.handleVolumeChange}
              />



            </Form>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Converter;
