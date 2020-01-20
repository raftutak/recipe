import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import LoadingDots from '../LoadingDots';

import search from '../../assets/img/search.png';
import AppContext from '../../context';

import noimage from '../../assets/img/noimage.png';

class DailyRecipeSection extends React.Component {
  state = {
    dailyRecipe_result: undefined
  };

  handleDailyRecipe = async () => {
    this.setState({
      dailyRecipe_isLoading: true,
      dailyRecipe_result: undefined
    });

    const url =
      'https://recipe-search.projektstudencki.pl/recipe/searchDayRecipe';
    const response = await axios(url);
    const dailyRecipe_result = await response.data.recipe;

    this.setState({ dailyRecipe_isLoading: false, dailyRecipe_result });

    console.log(this.state.dailyRecipe_result);
  };

  handleRandomRecipe = async () => {
    this.setState({
      randomRecipe_isLoading: true,
      randomRecipe_result: undefined
    });

    const url =
      'https://recipe-search.projektstudencki.pl/recipe/searchRandomRecipe';
    const response = await axios(url);
    const randomRecipe_result = await response.data.recipe;

    this.setState({ randomRecipe_isLoading: false, randomRecipe_result });

    console.log(this.state.randomRecipe_result);
  };

  componentDidMount() {
    this.handleDailyRecipe();
    this.handleRandomRecipe();
  }

  render() {
    return this.state.dailyRecipe_result && this.state.randomRecipe_result ? (
      <>
        <StyledSearchContainer fluid>
          <StyledBackground fluid />
          <StyledInnerContainer>
            <Container>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <h5 className="mb-4">
                    <strong>Przepis dnia</strong>
                  </h5>
                  <Row>
                    <Col xs={12} md={6} lg={6}>
                      <StyledImageBackground
                        background={
                          this.state.dailyRecipe_result.image_Url
                            ? this.state.dailyRecipe_result.image_Url
                            : noimage
                        }
                      />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                      <ListGroup style={{ minHeight: '196px' }}>
                        <ListGroup.Item>
                          <strong>{this.state.dailyRecipe_result.title}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <strong>Źródło: </strong>
                          {this.state.dailyRecipe_result.blog}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: 'hsl(215, 37%, 19%)'
                            }}
                            to={{
                              pathname: `/recipe/${this.state.dailyRecipe_result.id}`
                            }}
                          >
                            <strong>Przejdź do przepisu</strong>
                          </Link>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </Col>
                {this.state.dailyRecipe_result && (
                  <Col xs={12} md={6} lg={6}>
                    <h5 className="mb-4">
                      <strong>Szczęśliwy traf</strong>
                    </h5>
                    <Row>
                      <Col xs={12} md={6} lg={6}>
                        <StyledImageBackground
                          background={
                            this.state.randomRecipe_result.image_Url
                              ? this.state.randomRecipe_result.image_Url
                              : noimage
                          }
                        />
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <ListGroup style={{ minHeight: '196px' }}>
                          <ListGroup.Item>
                            <strong>
                              {this.state.randomRecipe_result.title}
                            </strong>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong>Źródło: </strong>
                            {this.state.randomRecipe_result.blog}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Link
                              style={{
                                textDecoration: 'none',
                                color: 'hsl(215, 37%, 19%)'
                              }}
                              to={{
                                pathname: `/recipe/${this.state.randomRecipe_result.id}`
                              }}
                            >
                              <strong>Przejdź do przepisu</strong>
                            </Link>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Col>
                )}
              </Row>
            </Container>
          </StyledInnerContainer>
        </StyledSearchContainer>
      </>
    ) : (
      <LoadingDots />
    );
  }
}

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 10px;
`;

const StyledSearchContainer = styled(Container)`
  position: relative;
  padding: 32px 0;
  text-align: center;
  background-color: hsl(0, 0%, 95%);
  z-index: 1;
`;

const StyledBackground = styled(Container)`
  position: absolute;
  top: 0;
  padding: 0;
  height: 100%;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.1;

  @media (min-width: 992px) {
    background-position-y: -80px;
  }
`;

const StyledInnerContainer = styled(Container)`
  padding: 0 10px;
`;

const StyledImageBackground = styled(Container)`
  min-height: 196px;
  height: 100%;
  background-image: url('${props => props.background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.125);
`;

export default DailyRecipeSection;
