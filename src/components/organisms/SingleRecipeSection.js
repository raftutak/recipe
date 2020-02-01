import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  Image,
  Button,
  Container,
  ListGroup,
  Row,
  Col,
  Overlay,
  Tooltip,
  Modal
} from 'react-bootstrap';

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

    disabled: false,
    favouritesExistsNotificaiton: false,
    favouritesAddedNotification: false,
    rateExistsNotification: false,
    rateAddedNotification: false
  };

  handleRecipeRatePost = async (value, recipeId, username) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/insertRecipeRate/?recipeId=${recipeId}&rate=${value}&username=${username}`;
    const response = await axios.post(url);

    if (!response.data.exists) {
      this.setState({
        amount: response.data.amount,
        average: response.data.average,
        rateAddedNotification: true
      });
    }

    if (response.data.exists) {
      this.setState({
        disabled: true,
        rateExistsNotification: true
      });
    }

    this.setState({ disabled: false });
  };

  handleAddToFavourites = async (recipeId, username) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/InsertFavRecipe/?recipeId=${recipeId}&username=${username}`;
    const response = await axios.post(url);

    console.log(response.data);

    if (response.data.exists) {
      this.setState({
        favouritesExistsNotificaiton: true
      });
    }

    if (!response.data.exists) {
      this.setState({
        favouritesAddedNotification: true
      });
    }
  };

  handleShowFavouritesAddedModal = () => {
    this.setState({
      favouritesAddedNotification: !this.state.favouritesAddedNotification
    });
  };

  handleShowFavouritesExistsModal = () => {
    this.setState({
      favouritesExistsNotificaiton: !this.state.favouritesExistsNotificaiton
    });
  };

  handleShowRateAddedModal = () => {
    this.setState({
      rateAddedNotification: !this.state.rateAddedNotificaiton
    });
  };

  handleShowRateExistsModal = () => {
    this.setState({
      rateExistsNotification: !this.state.rateExistsNotification
    });
  };

  handleSingleRecipe = async () => {
    document
      .getElementById('top')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });

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

  handleUserRating = async (recipeId, user) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/searchUserRecipeRate/?id=${recipeId}&username=${user}`;
    const response = await axios(url);
    const result = await response.data;

    console.log(result);

    if (result.exists) {
      this.setState({
        average: result.recipeRate
      });
    }
  };

  componentDidMount = async () => {
    await this.handleSingleRecipe();

    // this.setState(
    //   {
    //     currentUser: this.context.user.name
    //   },
    //   () => this.handleUserRating(this.props.id, this.state.currentUser)
    // );
  };

  componentDidUpdate(prevProps) {
    document
      .getElementById('top')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (this.props.id !== prevProps.id) {
      this.handleSingleRecipe();
    }
  }

  render() {
    const { isAuthenticated, user, loading } = this.context;

    return this.state.singleRecipe && this.state.singleRecipe.result ? (
      <>
        <StyledSingleRecipeContainer fluid>
          <Container>
            <Row className="mt-4">
              <Col xs={12} md={12} lg={12}>
                <StyledButton
                  onClick={
                    document.referrer.indexOf('recipe-search.pl') >= 0 ||
                    document.referrer.indexOf('localhost:3000') >= 0
                      ? history.goBack
                      : () => (window.location.href = '/')
                  }
                  className="btn-secondary"
                >
                  {arrow}&nbsp;&nbsp;Powrót
                </StyledButton>
                {isAuthenticated && (
                  <>
                    <StyledButtonGold
                      onClick={() =>
                        this.handleAddToFavourites(
                          this.state.singleRecipe.result.id,
                          user.name
                        )
                      }
                      className="btn-secondary"
                    >
                      <strong>Dodaj do ulubionych</strong>
                    </StyledButtonGold>
                    <Modal
                      show={this.state.favouritesAddedNotification}
                      onClick={() => this.handleShowFavouritesAddedModal()}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Informacja</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ textAlign: 'center' }}>
                        Gotowe. Przepis został dodany do ulubionych!
                        <br />
                        <br />
                        <NavLink to={{ pathname: '/profile' }}>
                          <StyledButton>Przejdź do ulubionych</StyledButton>
                        </NavLink>
                      </Modal.Body>
                    </Modal>
                    <Modal
                      show={this.state.favouritesExistsNotificaiton}
                      onClick={() => this.handleShowFavouritesExistsModal()}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Informacja</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ textAlign: 'center' }}>
                        Ten przepis został już dodany do ulubionych!
                        <br />
                        <br />
                        <NavLink to={{ pathname: '/profile' }}>
                          <StyledButton>Przejdź do ulubionych</StyledButton>
                        </NavLink>
                      </Modal.Body>
                    </Modal>
                    <Modal
                      show={this.state.rateExistsNotification}
                      onClick={() => this.handleShowRateExistsModal()}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Informacja</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Ten przepis został już oceniony!</Modal.Body>
                    </Modal>
                    <Modal
                      show={this.state.rateAddedNotificaiton}
                      onClick={() => this.handleShowRateAddedModal()}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Informacja</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Ocena została dodana!</Modal.Body>
                    </Modal>
                  </>
                )}
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="mb-4">
                <StyledImage
                  className="mb-4"
                  src={this.state.singleRecipe.result.image_Url}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = `${noimage}`;
                  }}
                  rounded
                />

                <ListGroup>
                  <ListGroup.Item>
                    <strong>Składniki</strong>
                  </ListGroup.Item>
                  {this.state.singleRecipe.result.ingredients.map(item => {
                    return <ListGroup.Item>{item}</ListGroup.Item>;
                  })}
                </ListGroup>
              </Col>
              <Col>
                <div className="mb-4">
                  {/* <p>{this.state.currentUser}</p> */}
                  <h2 className="mb-3">
                    {this.state.singleRecipe.result.title}
                  </h2>
                  <p className="mb-1">
                    Przepis pochodzi z serwisu:{' '}
                    <strong>
                      <a
                        style={{
                          color: 'hsl(215, 37%, 19%)',
                          textDecoration: 'none'
                        }}
                        href={this.state.singleRecipe.result.source_Url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {this.state.singleRecipe.result.blog}
                      </a>
                    </strong>
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
                      <strong style={{ color: 'red' }}>
                        Brak podkategorii
                      </strong>
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
                      fullSymbol={
                        <img src={starSolid} className="icon" alt="" />
                      }
                      placeholderSymbol={
                        <img src={starSolid} className="icon" alt="" />
                      }
                    />
                    <br />
                    <strong>Liczba ocen: </strong>
                    {this.state.amount}
                  </p>
                </div>
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
          </Container>
        </StyledSingleRecipeContainer>
      </>
    ) : (
      <LoadingDots />
    );
  }
}

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const StyledSingleRecipeContainer = styled(Container)`
  .icon {
    height: 1.4rem;
    padding-bottom: 5px;
    padding-right: 2px;
  }
`;

const arrow = <FontAwesomeIcon icon={faAngleLeft} size="lg" />;

const StyledButton = styled(Button)`
  background-color: #6c757d;
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
