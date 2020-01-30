import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import LoadingDots from '../atoms/LoadingDots';
import RecipeCard from '../molecules/RecipeCard';

import { categories } from '../../data/categories';
import { Container, Pagination } from 'react-bootstrap';

class CategorySection extends React.Component {
  state = {
    categorySearch: {
      isLoading: true,
      result: undefined,
      pagination: undefined
    }
  };

  createPagination = responseData => {
    const pagination = {
      pagesAmount: responseData.pagesAmount,
      pageNumber: responseData.pageNumber,
      totalCount: responseData.totalCount,
      nextPage: responseData.nextPage,
      prevPage: responseData.prevPage,
      pageNumbers: []
    };

    for (let i = 1; i <= responseData.pagesAmount; i++) {
      pagination.pageNumbers.push(i);
    }

    return pagination;
  };

  handleCategorySearch = async pageNumber => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    this.setState({
      categorySearch: {
        isLoading: true,
        result: undefined
      }
    });

    const id = this.props.id;
    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=&pageNumber=${pageNumber}&pageSize=6&dishMainCategoryIds=${id}`;
    const response = await axios(url);
    const result = await response.data.recipes;

    const pagination = this.createPagination(response.data);

    this.setState({
      categorySearch: {
        isLoading: false,
        result,
        pagination
      }
    });
  };

  componentDidMount() {
    this.handleCategorySearch(1);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.handleCategorySearch(1);
    }
  }

  render() {
    const { id } = this.props;

    return this.state.categorySearch && this.state.categorySearch.result ? (
      <>
        <Container fluid>
          <InnerWrapper>
            <StyledHeading>
              Aktualna kategoria: <strong>{categories[id - 1].name}</strong>
              {', ilość wyników: '}
              <strong>{this.state.categorySearch.pagination.totalCount}</strong>
              {', strona: '}
              {this.state.categorySearch.pagination.pageNumber}
              {' z '}
              {this.state.categorySearch.pagination.pagesAmount}
            </StyledHeading>
            <StyledFlexContainer>
              {this.state.categorySearch.result.map(recipe => {
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
                disabled={this.state.categorySearch.pagination.pageNumber === 1}
                onClick={() => this.handleCategorySearch(1)}
              />
              <Pagination.Prev
                disabled={!this.state.categorySearch.pagination.prevPage}
                onClick={() =>
                  this.handleCategorySearch(
                    this.state.categorySearch.pagination.pageNumber - 1
                  )
                }
              />
              {this.state.categorySearch.pagination.pageNumbers &&
                // eslint-disable-next-line array-callback-return
                this.state.categorySearch.pagination.pageNumbers.map(number => {
                  let active = this.state.categorySearch.pagination.pageNumber;

                  if (
                    // number === 1 ||
                    // number === context.pagination.pagesAmount ||
                    number >=
                      this.state.categorySearch.pagination.pageNumber - 5 &&
                    number <=
                      this.state.categorySearch.pagination.pageNumber + 5
                  ) {
                    return (
                      <Pagination.Item
                        key={number}
                        onClick={() => this.handleCategorySearch(number)}
                        disabled={number === active ? true : false}
                        active={number === active ? true : false}
                      >
                        {number}
                      </Pagination.Item>
                    );
                  }
                })}

              <Pagination.Next
                disabled={!this.state.categorySearch.pagination.nextPage}
                onClick={() =>
                  this.handleCategorySearch(
                    this.state.categorySearch.pagination.pageNumber + 1
                  )
                }
              />
              <Pagination.Last
                disabled={
                  this.state.categorySearch.pagination.pageNumber ===
                  this.state.categorySearch.pagination.pagesAmount
                }
                onClick={() =>
                  this.handleCategorySearch(
                    this.state.categorySearch.pagination.pagesAmount
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

export default CategorySection;
