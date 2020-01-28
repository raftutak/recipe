import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Container, ListGroup, Card, Nav, Row, Col } from 'react-bootstrap';

import LoadingDots from '../atoms/LoadingDots';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import history from '../../utils/history';

class SingleRecipeSection extends React.Component {
  state = {
    singleRecipe_result: undefined
  };

  handleReadRecipe = async () => {
    await this.setState({
      singleRecipe_isLoading: true,
      singleRecipe_result: undefined
    });

    const id = this.props.id;
    const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?id=${id}`;

    const response = await axios(url);
    const singleRecipe_result = await response.data.recipe;

    this.setState({ singleRecipe_isLoading: false, singleRecipe_result });

    console.log(this.state.singleRecipe_result);
  };

  componentDidMount() {
    this.handleReadRecipe();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.handleReadRecipe();
    }
  }

  render() {
    const { id } = this.props;

    return this.state.singleRecipe_result ? (
      <>
        <StyledSingleRecipeContainer fluid>
          <Container>
            <Row className="my-4">
              <Col style={{ textAlign: 'center' }}>
                <h2 className="mb-3">{this.state.singleRecipe_result.title}</h2>
                <p className="mb-1">
                  Przepis pochodzi z serwisu:{' '}
                  <strong>{this.state.singleRecipe_result.blog}</strong>
                </p>
                <p className="mb-0 text-break">
                  {this.state.singleRecipe_result.source_Url}
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} md={6} lg={6}>
                <StyledImageBackground
                  background={this.state.singleRecipe_result.image_Url}
                />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Składniki</strong>
                  </ListGroup.Item>
                  {this.state.singleRecipe_result.ingredients.map(item => {
                    return <ListGroup.Item>{item}</ListGroup.Item>;
                  })}
                </ListGroup>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} md={12} lg={12}>
                {this.state.singleRecipe_result.description}
              </Col>
            </Row>
            <div>
              <button onClick={history.goBack}>
                <strong>Powrót</strong>
              </button>
            </div>
          </Container>
        </StyledSingleRecipeContainer>
      </>
    ) : (
      <LoadingDots />
    );
  }
}

const StyledSingleRecipeContainer = styled(Container)``;

const StyledImageBackground = styled(Container)`
  min-height: 200px;
  height: 100%;
  background-image: url('${props => props.background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default SingleRecipeSection;
