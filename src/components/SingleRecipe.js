import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Container, ListGroup, Nav, Breadcrumb } from 'react-bootstrap';

import LoadingDots from '../components/LoadingDots';

// ROUTER
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

// PATH OF CURRENT RECIPE
const StyledPath = styled.div`
  margin: 0 0 0 20px;
  padding: 5px;
  font-size: 10pt;
  font-style: italic;
  opacity: 0.7;
  float: right;
`;

const StyledContainer = styled(Container)`
  margin: 0 auto;
  padding: 15px;
`;

// LIST OF INGREDIENTS
const StyledIngredients = styled(ListGroup)`
  margin: 0 auto;
  padding: 0;
  width: auto;
  float: left;
`;

// INGREDIENTS LISTGROUP.ITEM
const StyledIngredientsListGroupItem = styled(ListGroup.Item)`
  border: none;
  border-bottom: 1px solid hsla(215, 37%, 19%, 0.2);
  height: auto;
  font-size: 10pt;
  padding: 8px;

  :hover {
    background-color: hsla(215, 37%, 19%, 0.04);
    border-left: 6px solid #31c95f;
    transition: 0.2s;
  }
`;

// RECIPE NAME
const StyledRecipeName = styled.h4`
  padding: 0;
  font-weight: 600;
  clear: both;
`;

// RECIPE IMAGE
const StyledImage = styled.div`
    clear: both;

  img {
    float: right;
    padding: 0;
    margin-left: 1rem;
    width: auto;
    min-width: 25%;
    max-width: 50%;
    border-radius: 5px;
    box-shadow: 0 3px 1rem 0 hsla(0, 0%, 0%, 0.1);
  }

  .border-bottom {
    padding: 10px;
    height: auto;
    background-color: #31c95f;
    color: #fff;
    font-size: 12pt;
  }
`;

// RECIPE DESCRIPTION
const StyledDescription = styled.div`
  padding-top: 4rem;
  text-align: left;
  font-size: 12pt;
  min-width: 5rem;
  width: auto;
  max-width: 100%;
  width: auto;
  clear: left;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
    ol {
      background-color: #fff;
    }
    
    li {
      text-decoration: none;
    }
`;

class SingleRecipe extends React.Component {
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

  render() {
    const { id } = this.props;

    return this.state.singleRecipe_result ? (
      <>
        <Container className="mb-4">
          <StyledContainer fluid>
            <StyledPath>
              <StyledBreadcrumb>
                <Breadcrumb.Item aria-label="Breadcrumb"><NavLink as={NavLink} to={routes.home} style={{color: "hsla(215, 37%, 19%, 0.9)"}}>recipe-search</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item aria-label="Breadcrumb"><NavLink as={NavLink} to={routes.categories} style={{color: "hsla(215, 37%, 19%, 0.9)"}}>przepisy</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item aria-current="page" style={{textDecoration: "none", color: "hsla(215, 37%, 19%, 0.9)", fontWeight: "500"}}>{this.state.singleRecipe_result.title}</Breadcrumb.Item>
              </StyledBreadcrumb>
            </StyledPath>
            <StyledRecipeName>
              <p>{this.state.singleRecipe_result.title}</p>
              <br></br>
            </StyledRecipeName>
            <StyledImage>
              <div>
              <img
                src={this.state.singleRecipe_result.image_Url}
                alt={this.state.singleRecipe_result.title}
              />
              {/* <div className="border-bottom">
                Czas przygotowania: 60 minut<br></br>
                Poziom trudności: średni
              </div> */}
              </div>
            </StyledImage>
            <StyledIngredients>
              <h4>Lista składników</h4>
              {this.state.singleRecipe_result.ingredients.map(item => {
                return (
                  <StyledIngredientsListGroupItem>
                    {item}
                  </StyledIngredientsListGroupItem>
                );
              })}
              <Nav.Link as={NavLink} to={routes.contact}>
                Skorzystaj z przelicznika miar kuchennych!
              </Nav.Link>
            </StyledIngredients>
          <StyledDescription>
            <h4 style={{paddingBottom: "10px"}}>Opis przygotowania</h4>
            <p>{this.state.singleRecipe_result.description}</p>
          </StyledDescription>
          </StyledContainer>
      </Container>
      <div style={{clear: "both", padding: "2rem"}}></div>
      </>
    ) : (
      <LoadingDots />
    );
  }
}

export default SingleRecipe;
