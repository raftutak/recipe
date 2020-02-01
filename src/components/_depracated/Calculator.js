import React from 'react';
import AppContext from '../../context';
import styled from 'styled-components';

// BOOTSTRAP
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

// DATA - ASSETS
import { categories } from '../../data/categories';
import { dishes } from '../../data/dishes';
import { features } from '../../data/features';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: '15px'
  })
};

class Calculator extends React.Component {
  state = { value: 'coconut' };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert('Your favorite flavor is: ' + this.state.value);
  }

  weightChanged(weightValue) {
    this.setState({ weight: weightValue });
  }

  heightChanged(heightValue) {
    this.setState({ height: heightValue });
  }

  computeBmi() {
    let bmiValue = this.state.weight / this.state.height / this.state.height;
    this.setState({ bmi: bmiValue });
    let bmiClass = this.getBmi(bmiValue);
    this.setState({ bmiClass: bmiClass });
  }

  getBmi(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    }
    if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    }
    if (bmi >= 30) {
      return 'Obesity';
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>

      // <StyledForm autoComplete="off" onSubmit={context.handleSubmitSearch}>
      //   <Form.Row className="mb-3">
      //     <Col>
      //       <InputGroup>
      //         <Form.Control
      //           name="search_input"
      //           type="search"
      //           value={context.search_input}
      //           onChange={context.handleInputChange}
      //           as="input"
      //           placeholder="Wpisz szukaną frazę ..."
      //           required
      //         />
      //         <InputGroup.Append>
      //           <Button type="submit" variant="secondary">
      //             Szukaj
      //           </Button>
      //         </InputGroup.Append>
      //       </InputGroup>
      //     </Col>
      //   </Form.Row>
      //   <Form.Row>
      //     <Col xs={12} md={4} lg={4}>
      //       <Form.Group>
      //         <Select
      //           styles={customStyles}
      //           options={categories}
      //           getOptionLabel={category => category.name}
      //           getOptionValue={category => category.id}
      //           placeholder="Wybierz kategorię główną"
      //           onChange={context.handleMainCategoryChange}
      //           isClearable
      //         />
      //       </Form.Group>
      //     </Col>
      //     <Col xs={12} md={4} lg={4}>
      //       <Form.Group>
      //         <Select
      //           styles={customStyles}
      //           options={
      //             context.search_mainCategory &&
      //             context.search_mainCategory.subcategories
      //           }
      //           getOptionLabel={subcategory => subcategory.name}
      //           getOptionValue={subcategory => subcategory.id}
      //           placeholder="Wybierz podkategorię"
      //           onChange={context.handleSubCategoryChange}
      //           isDisabled={context.search_mainCategory ? false : true}
      //           isClearable
      //         />
      //       </Form.Group>
      //     </Col>
      //     <Col xs={12} md={4} lg={4}>
      //       <Form.Group>
      //         <Select
      //           styles={customStyles}
      //           options={
      //             context.search_subCategory &&
      //             dishes.filter(
      //               dish =>
      //                 dish.subCategoryId === context.search_subCategory.id
      //             )
      //           }
      //           getOptionLabel={dish => dish.name}
      //           getOptionValue={dish => dish.id}
      //           placeholder="Wybierz typ dania"
      //           onChange={context.handleDishTypeChange}
      //           isDisabled={context.search_subCategory ? false : true}
      //           isClearable
      //         />
      //       </Form.Group>
      //     </Col>
      //   </Form.Row>
      //   <Form.Row>
      //     <Col xs={12} md={4} lg={4}>
      //       <Form.Group>
      //         <Select
      //           styles={customStyles}
      //           options={features.filter(
      //             feature => feature.categoryId === 9
      //           )}
      //           getOptionLabel={feature => feature.name}
      //           getOptionValue={feature => feature.id}
      //           placeholder="Rodzaj posiłku"
      //           isClearable
      //         />
      //       </Form.Group>
      //     </Col>
      //     <Col xs={12} md={8} lg={8}>
      //       <Form.Group className="mb-0">
      //         <Select
      //           styles={customStyles}
      //           options={features.filter(
      //             feature => feature.categoryId === 7
      //           )}
      //           getOptionLabel={feature => feature.name}
      //           getOptionValue={feature => feature.id}
      //           placeholder="Wybierz wykluczenia"
      //           components={animatedComponents}
      //           isMulti
      //           isClearable
      //         />
      //       </Form.Group>
      //     </Col>
      //   </Form.Row>
      // </StyledForm>
    );
  }
}

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 0;
  width: 80%;

  .form-control {
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 15px;
  }

  .btn-secondary {
    padding: 0 20px;
    border: none;
    border-radius: 0 15px 15px 0;

    :hover {
      background-color: hsl(44, 60%, 42%);
    }
  }
`;

export default Calculator;
