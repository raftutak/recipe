import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Container, CardColumns } from 'react-bootstrap';

import LoadingDots from '../atoms/LoadingDots';
import RecipeCard from '../molecules/RecipeCard';

import { categories } from '../../data/categories';

class CategorySection extends React.Component {
  state = {
    category_result: undefined
  };

  handleShowCategory = async () => {
    this.setState({
      category_isLoading: true,
      category_result: undefined
    });

    const id = this.props.id;
    const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=&count=12&dishMainCategoryIds=${id}`;

    const response = await axios(url);
    const category_result = await response.data.recipes;

    this.setState({ category_isLoading: false, category_result });
  };

  componentDidMount() {
    this.handleShowCategory();
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (this.props.id !== prevProps.id) {
      this.handleShowCategory();
    }
  }

  render() {
    const { id } = this.props;

    return this.state.category_result ? (
      <>
        <Container fluid>
          <InnerWrapper>
            <StyledHeading>
              <strong>Aktualna kategoria:</strong> {categories[id - 1].name}
            </StyledHeading>
            <StyledCardColumns>
              {this.state.category_result.map(recipe => {
                return <RecipeCard key={recipe.title} recipe={recipe} />;
              })}
            </StyledCardColumns>
          </InnerWrapper>
        </Container>
      </>
    ) : (
      <LoadingDots />
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

export default CategorySection;
