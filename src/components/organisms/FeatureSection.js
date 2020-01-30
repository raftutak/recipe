import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Container, Pagination } from 'react-bootstrap';

import LoadingDots from '../atoms/LoadingDots';
import RecipeCard from '../molecules/RecipeCard';

import { features } from '../../data/features';

class FeatureSection extends React.Component {
  state = {
    featureSearch: {
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

  handleFeatureSearch = async pageNumber => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    this.setState({
      featureSearch: {
        isLoading: true,
        result: undefined
      }
    });

    const id = this.props.id;
    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=&pageNumber=${pageNumber}&pageSize=6&featureIds=${id}`;
    const response = await axios(url);
    const result = await response.data.recipes;

    const pagination = this.createPagination(response.data);

    this.setState({
      featureSearch: {
        isLoading: false,
        result,
        pagination
      }
    });
  };

  componentDidMount() {
    this.handleFeatureSearch(1);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.handleFeatureSearch(1);
    }
  }

  render() {
    const { id } = this.props;

    return this.state.featureSearch && this.state.featureSearch.result ? (
      <>
        <Container fluid>
          <InnerWrapper>
            <StyledHeading>
              Aktualna kategoria: <strong>{features[id - 1].name}</strong>
              {', ilość wyników: '}
              <strong>{this.state.featureSearch.pagination.totalCount}</strong>
              {', strona: '}
              {this.state.featureSearch.pagination.pageNumber}
              {' z '}
              {this.state.featureSearch.pagination.pagesAmount}
            </StyledHeading>
            <StyledFlexContainer>
              {this.state.featureSearch.result.map(recipe => {
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
                disabled={this.state.featureSearch.pagination.pageNumber === 1}
                onClick={() => this.handleFeatureSearch(1)}
              />
              <Pagination.Prev
                disabled={!this.state.featureSearch.pagination.prevPage}
                onClick={() =>
                  this.handleFeatureSearch(
                    this.state.featureSearch.pagination.pageNumber - 1
                  )
                }
              />
              {this.state.featureSearch.pagination.pageNumbers &&
                // eslint-disable-next-line array-callback-return
                this.state.featureSearch.pagination.pageNumbers.map(number => {
                  let active = this.state.featureSearch.pagination.pageNumber;

                  if (
                    // number === 1 ||
                    // number === context.pagination.pagesAmount ||
                    number >=
                      this.state.featureSearch.pagination.pageNumber - 5 &&
                    number <= this.state.featureSearch.pagination.pageNumber + 5
                  ) {
                    return (
                      <Pagination.Item
                        onClick={() => this.handleFeatureSearch(number)}
                        disabled={number === active ? true : false}
                        active={number === active ? true : false}
                      >
                        {number}
                      </Pagination.Item>
                    );
                  }
                })}

              <Pagination.Next
                disabled={!this.state.featureSearch.pagination.nextPage}
                onClick={() =>
                  this.handleFeatureSearch(
                    this.state.featureSearch.pagination.pageNumber + 1
                  )
                }
              />
              <Pagination.Last
                disabled={
                  this.state.featureSearch.pagination.pageNumber ===
                  this.state.featureSearch.pagination.pagesAmount
                }
                onClick={() =>
                  this.handleFeatureSearch(
                    this.state.featureSearch.pagination.pagesAmount
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

export default FeatureSection;
