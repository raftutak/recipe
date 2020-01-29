import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCard from '../molecules/RecipeCard';
import LoadingDots from '../atoms/LoadingDots';
import { Container, CardColumns, Pagination, CardGroup } from 'react-bootstrap';

const MainSearchResultSection = () => (
  <AppContext.Consumer>
    {context =>
      context.mainSearch && !context.mainSearch.isLoading ? (
        <>
          <Container fluid>
            <InnerWrapper>
              <StyledHeading>
                Wyniki wyszukiwania dla:{' '}
                <strong>{context.mainSearch.heading}</strong>
                {', ilość wyników: '}
                <strong>{context.mainSearch.pagination.totalCount}</strong>
                {', strona: '}
                {context.mainSearch.pagination.pageNumber}
                {' z '}
                {context.mainSearch.pagination.pagesAmount}
              </StyledHeading>
              <StyledFlexContainer>
                {context.mainSearch.result.map(recipe => {
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
                  disabled={context.mainSearch.pagination.pageNumber === 1}
                  onClick={() => context.handleMainSearch(1)}
                />
                <Pagination.Prev
                  disabled={!context.mainSearch.pagination.prevPage}
                  onClick={() =>
                    context.handleMainSearch(context.pagination.pageNumber - 1)
                  }
                />
                {context.mainSearch.pagination.pageNumbers &&
                  context.mainSearch.pagination.pageNumbers.map(number => {
                    let active = context.mainSearch.pagination.pageNumber;

                    if (
                      // number === 1 ||
                      // number === context.pagination.pagesAmount ||
                      number >= context.mainSearch.pagination.pageNumber - 5 &&
                      number <= context.mainSearch.pagination.pageNumber + 5
                    ) {
                      return (
                        <Pagination.Item
                          onClick={() => context.handleMainSearch(number)}
                          disabled={number === active ? true : false}
                          active={number === active ? true : false}
                        >
                          {number}
                        </Pagination.Item>
                      );
                    }
                  })}

                <Pagination.Next
                  disabled={!context.mainSearch.pagination.nextPage}
                  onClick={() =>
                    context.handleMainSearch(
                      context.mainSearch.pagination.pageNumber + 1
                    )
                  }
                />
                <Pagination.Last
                  disabled={
                    context.mainSearch.pagination.pageNumber ===
                    context.mainSearch.pagination.pagesAmount
                  }
                  onClick={() =>
                    context.handleMainSearch(
                      context.mainSearch.pagination.pagesAmount
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
                Trwa wczytywanie wyników wyszukiwania ...
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

export default MainSearchResultSection;
