import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

<<<<<<< HEAD
import { Container, ListGroup, Card, Nav, Row, Col, Button } from 'react-bootstrap';
=======
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
>>>>>>> develop

import LoadingDots from '../atoms/LoadingDots';

import history from '../../utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faAngleLeft, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

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
<<<<<<< HEAD
                  <a href={this.state.singleRecipe_result.source_Url} style={{textDecoration: "none", color: "hsl(215, 37%, 19%)"}}>
                    {this.state.singleRecipe_result.source_Url}
                  </a>
=======
                  {this.state.singleRecipe.result.source_Url}
>>>>>>> develop
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
            <Row className="mb-2 mt-4">
              <Col xs={12} md={12} lg={12}>
                <StyledButton onClick={history.goBack} className="btn-secondary">
                  {arrow}{' '}Powrót do wyników
                </StyledButton>
              </Col>
            </Row>
          </Container>
        </StyledSingleRecipeContainer>
      </>
    ) : (
      <LoadingDots />
    );
  }
}

const StyledSingleRecipeContainer = styled(Container)``;

const arrow = <FontAwesomeIcon icon={faAngleLeft} size="lg"/>;

const StyledImageBackground = styled(Container)`
  min-height: 200px;
  height: 100%;
  background-image: url('${props => props.background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledButton = styled(Button)`
    display: inline-block;
    width: auto;
    height: 47px;
    padding: 12px;
    border: none;
    border-radius: 5px;

    :hover {
      background-color: hsl(44, 60%, 42%);
    }
`

export default SingleRecipeSection;
