import React from 'react';
import AppContext from '../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import SearchForm from '../components/SearchForm';
import Sidebar from '../components/Sidebar';
import RecommendationsStyled from '../components/RecommendationsStyled';
import Footer from '../components/Footer';
import RecipeListStyled from '../components/RecipeListStyled';
import LoadingDots from '../components/LoadingDots';
import { Container, CardDeck } from 'react-bootstrap';

const StyledContainer = styled(Container)`
  padding: 30px 0;
  display: flex;
  flex-direction: rows;
`;

const StyledRecipeList = styled.div`
  margin: 0 auto;
`;

const CategoriesView = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <Container fluid>
          <StyledContainer>
            <Sidebar />
            <StyledRecipeList>
              {context.categories_isLoading && !context.categories_result && (
                <LoadingDots />
              )}
              {context.categories_result &&<RecipeListStyled />}
            </StyledRecipeList>
          </StyledContainer>
        </Container>
      </>
    )}
  </AppContext.Consumer>
);

export default CategoriesView;
