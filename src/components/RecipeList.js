import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';
import { Container, CardColumns } from 'react-bootstrap';

// COMPONENTS
import RecipeCard from './RecipeCard';
import LoadingDots from './LoadingDots';

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 0;
`;

const StyledCardColumns = styled(CardColumns)``;

class RecipeList extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.categories_result ? (
            !context.categories_isLoading ? (
              <>
                <Container fluid>
                  <InnerWrapper>
                    <StyledCardColumns id="recipeList">
                      {context.categories_result.map(recipe => {
                        return (
                          <RecipeCard key={recipe.title} recipe={recipe} />
                        );
                      })}
                    </StyledCardColumns>
                  </InnerWrapper>
                </Container>
              </>
            ) : (
              <LoadingDots />
            )
          ) : null
        }
      </AppContext.Consumer>
    );
  }
}

export default RecipeList;
