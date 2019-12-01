import React from 'react';
import AppContext from '../context';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const StyledCard = styled(Card)`
  border-radius: 15px;

  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const RecipeCard = ({ recipe }) => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledCard>
          <Card.Img src={recipe.image_Url} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>id:</strong> {recipe.id}
            </ListGroupItem>
            <ListGroupItem>
              <strong>blog:</strong> {recipe.blog}
            </ListGroupItem>
            <ListGroupItem>
              <strong>dishId</strong>: {recipe.dishId}
            </ListGroupItem>
            <ListGroupItem>
              <strong>dishMainCategoryId</strong>: {recipe.dishMainCategoryId}
            </ListGroupItem>
            <ListGroupItem>
              <strong>dishSubCategoryId</strong>: {recipe.dishSubCategoryId}
            </ListGroupItem>
            <ListGroupItem>
              <strong>ingredientIds:</strong>{' '}
              {recipe.ingredientIds.map(ingredientID => (
                <span key={ingredientID}>{ingredientID}, </span>
              ))}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Text>
              <Link
                to={{
                  pathname: `/recipe/${recipe.id}`
                }}
              >
                <strong>Przejdź do przepisu</strong>
              </Link>
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </>
    )}
  </AppContext.Consumer>
);

export default RecipeCard;
