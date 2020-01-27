import React from 'react';
import AppContext from '../../context';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import RecipeCard from '../molecules/RecipeCard';
import LoadingDots from '../atoms/LoadingDots';
import { Container, CardColumns, Pagination } from 'react-bootstrap';

class SearchResultSection extends React.Component {
  // componentDidMount() {
  //   document
  //     .getElementById('search-form')
  //     .scrollIntoView({ behavior: 'smooth' });
  // }

  createPagination = pagesAmount => {
    let pages = [];
    for (let i = 1; i < 15; i++) {
      pages.push(<Pagination.Item>{i}</Pagination.Item>);
    }
    return pages;
  };

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
                        {', ilość wyników: '}
                        {context.pagination.totalCount}
                      </StyledHeading>
                    ) : null}
                    <StyledCardColumns>
                      {context.search_result.map(recipe => {
                        return (
                          <RecipeCard key={recipe.title} recipe={recipe} />
                        );
                      })}
                    </StyledCardColumns>

                    <Pagination
                      style={{
                        justifyContent: 'center'
                      }}
                    >
                      <Pagination.First />
                      {context.pagination.prevPage && <Pagination.Prev />}
                      {this.createPagination(context.pagination.pagesAmount)}
                      {/* <Pagination.Item active>
                        {context.pagination.pageNumber}
                      </Pagination.Item> */}
                      {context.pagination.nextPage && <Pagination.Next />}
                      <Pagination.Last />
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
  }
}

const InnerWrapper = styled(Container)`
  margin: 0 auto;
  padding: 30px 10px;

  .page-link {
    color: hsl(215, 37%, 19%) !important;
  }

  .page-item.active .page-link {
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid #dee2e6;
  }
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
