import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Container, ListGroup, Row, Col } from 'react-bootstrap';

import LoadingDots from '../atoms/LoadingDots';

import history from '../../utils/history';

class SingleRecipeSection extends React.Component {
  state = {
    singleRecipe: {
      isLoading: true,
      result: undefined
    }
  };

  handleSingleRecipe = async () => {
    this.setState({
      singleRecipe: {
        isLoading: true,
        result: undefined
      }
    });

    const id = this.props.id;
    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipeModel/?id=${id}`;
    const response = await axios(url);
    const result = await response.data.recipe;

    this.setState({
      singleRecipe: {
        isLoading: false,
        result
      }
    });
  };

  componentDidMount() {
    this.handleSingleRecipe();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.handleReadRecipe();
    }
  }

  render() {
    // const { id } = this.props;

    return this.state.singleRecipe && this.state.singleRecipe.result ? (
      <>
        <StyledSingleRecipeContainer fluid>
          <Container>
            <Row className="my-4">
              <Col style={{ textAlign: 'center' }}>
                <h2 className="mb-3">{this.state.singleRecipe.result.title}</h2>
                <p className="mb-1">
                  Przepis pochodzi z serwisu:{' '}
                  <strong>{this.state.singleRecipe.result.blog}</strong>
                </p>
                <p className="mb-0 text-break">
                  {this.state.singleRecipe.result.source_Url}
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} md={6} lg={6}>
                <StyledImageBackground
                  background={this.state.singleRecipe.result.image_Url}
                />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Składniki</strong>
                  </ListGroup.Item>
                  {this.state.singleRecipe.result.ingredients.map(item => {
                    return <ListGroup.Item>{item}</ListGroup.Item>;
                  })}
                </ListGroup>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={12} md={12} lg={12}>
                {this.state.singleRecipe.result.description}
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
