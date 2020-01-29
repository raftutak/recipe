import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCard from '../molecules/RecipeCard';
import LoadingDots from '../atoms/LoadingDots';
import { Container, CardColumns, Pagination, CardGroup } from 'react-bootstrap';

const InitialSearchResultSection = () => (
  <AppContext.Consumer>
    {context =>
      context.initialSearch && !context.initialSearch.isLoading ? (
        <>
          <Container fluid>
            <InnerWrapper>
              <StyledFlexContainer>
                {context.initialSearch.result.map(recipe => {
                  return <RecipeCard key={recipe.title} recipe={recipe} />;
                })}
              </StyledFlexContainer>

              {/* PAGINATION */}

              <Pagination
                style={{
                  justifyContent: 'center'
                }}
              >
                <Pagination.First
                  disabled={context.initialSearch.pagination.pageNumber === 1}
                  onClick={() => context.handleInitialSearch(1)}
                />
                <Pagination.Prev
                  disabled={!context.initialSearch.pagination.prevPage}
                  onClick={() =>
                    context.handleInitialSearch(
                      context.pagination.pageNumber - 1
                    )
                  }
                />
                {context.initialSearch.pagination.pageNumbers &&
                  context.initialSearch.pagination.pageNumbers.map(number => {
                    let active = context.initialSearch.pagination.pageNumber;

                    if (
                      // number === 1 ||
                      // number === context.pagination.pagesAmount ||
                      number >=
                        context.initialSearch.pagination.pageNumber - 5 &&
                      number <= context.initialSearch.pagination.pageNumber + 5
                    ) {
                      return (
                        <Pagination.Item
                          onClick={() => context.handleInitialSearch(number)}
                          disabled={number === active ? true : false}
                          active={number === active ? true : false}
                        >
                          {number}
                        </Pagination.Item>
                      );
                    }
                  })}

                <Pagination.Next
                  disabled={!context.initialSearch.pagination.nextPage}
                  onClick={() =>
                    context.handleInitialSearch(
                      context.initialSearch.pagination.pageNumber + 1
                    )
                  }
                />
                <Pagination.Last
                  disabled={
                    context.initialSearch.pagination.pageNumber ===
                    context.initialSearch.pagination.pagesAmount
                  }
                  onClick={() =>
                    context.handleInitialSearch(
                      context.initialSearch.pagination.pagesAmount
                    )
                  }
                />
              </Pagination>
            </InnerWrapper>
          </Container>
        </>
      ) : (
        <>
          <Container fluid>
            <InnerWrapper>
              <h5 style={{ textAlign: 'center' }}>
                Trwa wczytywanie listy przepisów ...
              </h5>
              <LoadingDots />
            </InnerWrapper>
          </Container>
        </>
      )
    }
  </AppContext.Consumer>
);

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 10px;

  .page-link {
    color: hsl(215, 37%, 19%) !important;
  }

  .page-item.active .page-link {
    background-color: rgba(0, 0, 0, 0.09);
    border: 1px solid #dee2e6;
  }
`;

const StyledHeading = styled.h3`
  padding-bottom: 20px;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

export default InitialSearchResultSection;
