import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Image, Button, Container, ListGroup, Row, Col } from 'react-bootstrap';

import LoadingDots from '../atoms/LoadingDots';

import history from '../../utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretLeft,
  faAngleLeft,
  faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons';

// DATA
import { featuresCategories } from '../../data/featuresCategories';
import { categories } from '../../data/categories';
import { dishes } from '../../data/dishes';
import { ingredients } from '../../data/ingredients';

// ASSETS
import noimage from '../../assets/img/noimage.png';
import starRegular from '../../assets/img/icons/star-regular.png';
import starSolid from '../../assets/img/icons/star-solid.png';
import { features } from '../../data/features';
import Rating from 'react-rating';
import { Auth0Context } from '../../react-auth0-spa';

class SingleRecipeSection extends React.Component {
  static contextType = Auth0Context;

  state = {
    singleRecipe: {
      isLoading: true,
      result: undefined
    },

    disabled: false
  };

  handleRecipeRatePost = async (value, recipeId, user) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/insertRecipeRate/?recipeId=${recipeId}&rate=${value}&username=${user.name}`;
    const response = await axios.post(url);

    if (!response.data.exists) {
      this.setState({
        amount: response.data.amount,
        average: response.data.average
      });
    }

    if (response.data.exists) {
      alert('Już głosowałeś na ten przepis!');
      this.setState({
        disabled: true
      });
    }

    this.setState({ disabled: false });
  };

  handleAddToFavourites = async (recipeId, user) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/InsertFavRecipe/?recipeId=${recipeId}&username=${user.name}`;
    const response = await axios.post(url);

    console.log(response);
  };

  handleSingleRecipe = async () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    this.setState({
      singleRecipe: {
        isLoading: true,
        result: undefined
      },

      average: undefined,
      amount: undefined
    });

    const id = this.props.id;
    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipeModel/?id=${id}`;
    const response = await axios(url);
    const result = await response.data.recipe;

    this.setState({
      singleRecipe: {
        isLoading: false,
        result
      },

      average: result.rate.average,
      amount: result.rate.amount
    });
  };

  componentDidMount() {
    this.handleSingleRecipe();
  }

  componentDidUpdate(prevProps) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    if (this.props.id !== prevProps.id) {
      this.handleSingleRecipe();
    }
  }

  render() {
    const { recipe } = this.props;
    const { isAuthenticated, user } = this.context;
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
                <p className="mb-1 text-break">
                  <a
                    style={{
                      color: 'hsl(215, 37%, 19%)',
                      textDecoration: 'none'
                    }}
                    href={this.state.singleRecipe.result.source_Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {this.state.singleRecipe.result.source_Url}
                  </a>
                </p>
                <p className="mb-1">
                  <strong>Kategoria:</strong>{' '}
                  {this.state.singleRecipe.result.dishMainCategoryId !== 0 ? (
                    categories[
                      this.state.singleRecipe.result.dishMainCategoryId - 1
                    ].name
                  ) : (
                    <strong style={{ color: 'red' }}>Brak kategorii</strong>
                  )}
                  {' / '}
                  {this.state.singleRecipe.result.dishMainCategoryId !== 0 ? (
                    categories[
                      this.state.singleRecipe.result.dishMainCategoryId - 1
                    ].subcategories[
                      categories[
                        this.state.singleRecipe.result.dishMainCategoryId - 1
                      ].subcategories.findIndex(
                        index =>
                          index.id ===
                          this.state.singleRecipe.result.dishSubCategoryId
                      )
                    ].name
                  ) : (
                    <strong style={{ color: 'red' }}>Brak podkategorii</strong>
                  )}
                  {' / '}
                  {this.state.singleRecipe.result.dishId ? (
                    dishes[
                      dishes.findIndex(
                        index =>
                          index.id === this.state.singleRecipe.result.dishId
                      )
                    ].name
                  ) : (
                    <strong style={{ color: 'red' }}>Brak dishId</strong>
                  )}
                </p>
                <p className="mb-1">
                  <strong>Ocena: </strong>
                  <Rating
                    // readonly={
                    //   false ? true : this.state.disabled ? true : false
                    // }
                    readonly={
                      !isAuthenticated
                        ? true
                        : this.state.disabled
                        ? true
                        : false
                    }
                    onClick={value =>
                      // this.handleRecipeRatePost(
                      //   value,
                      //   recipe.id,
                      //   'raftutak@gmail.com'
                      // )
                      this.handleRecipeRatePost(
                        value,
                        this.state.singleRecipe.result.id,
                        user.name
                      )
                    }
                    placeholderRating={this.state.average}
                    emptySymbol={
                      <img src={starRegular} className="icon" alt="" />
                    }
                    fullSymbol={<img src={starSolid} className="icon" alt="" />}
                    placeholderSymbol={
                      <img src={starSolid} className="icon" alt="" />
                    }
                  />
                  <br />
                  <strong>Liczba ocen: </strong>
                  {this.state.amount}
                </p>
              </Col>
            </Row>
            <Row>
              <div
                className="background"
                style={{
                  margin: 'auto',
                  width: '100%',
                  margin: '0px 15px 25px 15px',
                  height: '400px',
                  backgroundImage: `url(${this.state.singleRecipe.result.image_Url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed'
                }}
              ></div>
            </Row>
            <Row className="mb-4">
              <Col xs={12} md={6} lg={6} className="mb-4">
                <ListGroup>
                  {featuresCategories.map(featureCategory => (
                    <ListGroup.Item>
                      <>
                        <strong>{featureCategory.name}: </strong>
                        {this.state.singleRecipe.result.featureIds
                          ? this.state.singleRecipe.result.featureIds.map(
                              featureID => (
                                <>
                                  {features[
                                    features.findIndex(
                                      index =>
                                        index.id === featureID &&
                                        index.categoryId === featureCategory.id
                                    )
                                  ] &&
                                    features[
                                      features.findIndex(
                                        index =>
                                          index.id === featureID &&
                                          index.categoryId ===
                                            featureCategory.id
                                      )
                                    ].name + ', '}
                                </>
                              )
                            )
                          : null}
                      </>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
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
              <Col
                xs={12}
                md={12}
                lg={12}
                style={{ textAlign: 'justify', lineHeight: '1.8rem' }}
              >
                {this.state.singleRecipe.result.description}
              </Col>
            </Row>
            <Row className="my-4">
              <Col xs={12} md={12} lg={12}>
                <StyledButton
                  onClick={history.goBack}
                  className="btn-secondary"
                >
                  {arrow}&nbsp;&nbsp;&nbsp;&nbsp;Powrót do wyników
                </StyledButton>
                <StyledButtonGold
                  onClick={() =>
                    this.handleAddToFavourites(
                      this.state.singleRecipe.result.id,
                      user
                    )
                  }
                  className="btn-secondary"
                >
                  <strong>Dodaj do ulubionych</strong>
                </StyledButtonGold>
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

const StyledSingleRecipeContainer = styled(Container)`
  .icon {
    height: 1.4rem;
    padding-bottom: 5px;
    padding-right: 2px;
  }
`;

const arrow = <FontAwesomeIcon icon={faAngleLeft} size="lg" />;

const StyledButton = styled(Button)`
  display: inline-block;
  width: auto;
  height: 47px;
  padding: 10px 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 15px;

  :hover {
    background-color: hsl(44, 60%, 42%);
  }
`;

const StyledButtonGold = styled(Button)`
  background-color: hsl(44, 60%, 42%);
  display: inline-block;
  width: auto;
  height: 47px;
  padding: 10px 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 15px;

  :hover {
    background-color: auto;
  }
`;

export default SingleRecipeSection;
