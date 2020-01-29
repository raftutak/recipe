import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCard from '../molecules/RecipeCard';
import LoadingDots from '../atoms/LoadingDots';
import { Container, CardColumns, Pagination, CardGroup } from 'react-bootstrap';

const SearchResultSection = () => (
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
                    {', ilość wyników: '}
                    {context.pagination.totalCount}
                  </StyledHeading>
                ) : null}
                <StyledFlexContainer>
                  {context.search_result.map(recipe => {
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
                    disabled={context.pagination.pageNumber === 1}
                    onClick={() => context.handleSearchWithPagination(1)}
                  />
                  <Pagination.Prev
                    disabled={!context.pagination.prevPage}
                    onClick={() =>
                      context.handleSearchWithPagination(
                        context.pagination.pageNumber - 1
                      )
                    }
                  />
                  {context.pagination.pageNumbers.map(number => {
                    let active = context.pagination.pageNumber;

                    if (
                      // number === 1 ||
                      // number === context.pagination.pagesAmount ||
                      number >= context.pagination.pageNumber - 5 &&
                      number <= context.pagination.pageNumber + 5
                    ) {
                      return (
                        <Pagination.Item
                          onClick={() =>
                            context.handleSearchWithPagination(number)
                          }
                          disabled={number === active ? true : false}
                          active={number === active ? true : false}
                        >
                          {number}
                        </Pagination.Item>
                      );
                    }
                  })}

                  <Pagination.Next
                    disabled={!context.pagination.nextPage}
                    onClick={() =>
                      context.handleSearchWithPagination(
                        context.pagination.pageNumber + 1
                      )
                    }
                  />
                  <Pagination.Last
                    disabled={
                      context.pagination.pageNumber ===
                      context.pagination.pagesAmount
                    }
                    onClick={() =>
                      context.handleSearchWithPagination(
                        context.pagination.pagesAmount
                      )
                    }
                  />
                </Pagination>
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

export default SearchResultSection;
