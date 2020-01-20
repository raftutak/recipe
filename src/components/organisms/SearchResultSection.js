import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCard from '../RecipeCard';
import LoadingDots from '../LoadingDots';
import { Container, CardColumns } from 'react-bootstrap';

class SearchResultSection extends React.Component {
  // componentDidMount() {
  //   document
  //     .getElementById('search-form')
  //     .scrollIntoView({ behavior: 'smooth' });
  // }

  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.search_result ? (
            !context.search_isLoading ? (
              <>
                <Container fluid>
                  <InnerWrapper>
                    {context.search_phrase ? (
                      <StyledHeading>
                        <strong>Wyniki wyszukiwania dla:</strong>{' '}
                        {context.search_phrase}
                      </StyledHeading>
                    ) : null}
                    <StyledCardColumns>
                      {context.search_result.map(recipe => {
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

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 10px;
`;

const StyledHeading = styled.h3`
  padding-bottom: 20px;
`;

const StyledCardColumns = styled(CardColumns)`
  @media (min-width: 576px) {
    column-count: 1;
  }

  @media (min-width: 768px) {
    column-count: 2;
  }

  @media (min-width: 992px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 3;
  }
`;

export default SearchResultSection;
