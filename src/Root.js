// REACT AND PACKAGES
import React from 'react';
import AppContext from './context';
import axios from 'axios';

// REACT-ROUTER
import { Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import history from './utils/history';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// TEMPLATES
import MainTemplate from './templates/MainTemplate';

// VIEWS
import HomeView from './views/HomeView';
import CategoryView from './views/CategoryView';
import SingleRecipeView from './views/SingleRecipeView';
import CalculatorView from './views/CalculatorView';
import ProfileView from './views/ProfileView';
import FeatureView from './views/FeatureView';
import ScrollToTop from './utils/ScrollToTop';

class Root extends React.Component {
  state = {
    search_input: '',
    category_id: 1,
    collapseNavbar: false,

    initialSearch: {
      isLoading: true,
      result: undefined,
      pagination: undefined
    },

    mainSearch: {
      isLoading: true,
      result: undefined,
      pagination: undefined,
      heading: undefined
    }
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleMainCategoryChange = search_mainCategory => {
    this.setState({
      search_mainCategory,
      search_subCategory: undefined,
      search_dishType: undefined
    });
  };

  handleSubCategoryChange = search_subCategory => {
    this.setState({
      search_subCategory,
      search_dishType: undefined
    });
  };

  handleDishTypeChange = search_dishType => {
    this.setState({
      search_dishType
    });
  };

  handleMealTypeChange = search_mealType => {
    this.setState({
      search_mealType
    });
  };

  handleExclusionChange = search_exclusion => {
    this.setState({
      search_exclusion
    });
  };

  handleDifficultyChange = search_difficulty => {
    this.setState({
      search_difficulty
    });
  };

  handleTimeRequiredChange = search_timeRequired => {
    this.setState({
      search_timeRequired
    });
  };

  handleCostChange = search_cost => {
    this.setState({
      search_cost
    });
  };

  handleCheckboxChange = event => {
    const checkboxValue =
      event.target.type === 'checkbox' ? event.target.checked : null;

    this.setState({
      [event.target.name]: checkboxValue
    });
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

  handleInitialSearch = async pageNumber => {
    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=papryka&pageNumber=${pageNumber}&pageSize=6`;
    const response = await axios(url);
    const result = await response.data.recipes;

    const pagination = this.createPagination(response.data);

    this.setState({
      initialSearch: {
        isLoading: false,
        result,
        pagination
      }
    });
  };

  handleCategorySearch = async (pageNumber, id) => {
    this.setState({
      categorySearch: {
        isLoading: true,
        result: undefined
      }
    });

    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=papryka&pageNumber=${pageNumber}&pageSize=6&dishMainCategoryIds=${id}`;
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

  handleMainSearch = async pageNumber => {
    this.setState({
      mainSearch: {
        isLoading: true,
        result: undefined
      }
    });

    const query = this.state.search_input;

    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=${query}&pageNumber=${pageNumber}&pageSize=6`;

    if (this.state.search_mainCategory) {
      url.concat(`&dishMainCategoryIds=${this.state.search_mainCategory.id}`);
    }
    if (this.state.search_subCategory) {
      url.concat(`&dishSubCategoryIds=${this.state.search_subCategory.id}`);
    }
    if (this.state.search_dishType) {
      url.concat(`&dishIds=${this.state.search_dishType.id}`);
    }
    if (this.state.search_mealType) {
      url.concat(`&featureIds=${this.state.search_mealType.id}`);
    }
    if (this.state.search_exclusion) {
      this.state.search_exclusion.map(exclusion =>
        url.concat(`&featureIds=${exclusion.id}`)
      );
    }
    if (this.state.search_difficulty) {
      url.concat(`&featureIds=${this.state.search_difficulty.id}`);
    }
    if (this.state.search_timeRequired) {
      url.concat(`&featureIds=${this.state.search_timeRequired.id}`);
    }
    if (this.state.search_cost) {
      url.concat(`&featureIds=${this.state.search_cost.id}`);
    }

    const response = await axios(url);
    const result = await response.data.recipes;

    const pagination = this.createPagination(response.data);

    this.setState({
      mainSearch: {
        isLoading: false,
        result,
        pagination,
        heading: query
      }
    });
  };

  // document
  //   .getElementById('search-form')
  //   .scrollIntoView({ behavior: 'smooth' });

  handleTagClick = async tag => {
    this.setState({
      search_isLoading: true,
      search_result: undefined
    });

    const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=${tag}&count=8`;
    const response = await axios(url);
    const search_result = await response.data.recipes;

    this.setState({ search_isLoading: false, search_result });
  };

  handleShowCalculatorModal = event => {
    this.setState({ showCalculatorModal: !this.state.showCalculatorModal });
  };

  handleCollapseNavbar = event => {
    this.setState({ collapseNavbar: !this.state.collapseNavbar });
  };

  componentDidMount() {
    this.handleInitialSearch(1);
    // this.handleSearchWithPagination(1);
  }

  render() {
    const contextElements = {
      ...this.state,
      handleInputChange: this.handleInputChange,
      handleMainCategoryChange: this.handleMainCategoryChange,
      handleSubCategoryChange: this.handleSubCategoryChange,
      handleDishTypeChange: this.handleDishTypeChange,
      handleMealTypeChange: this.handleMealTypeChange,
      handleExclusionChange: this.handleExclusionChange,
      handleDifficultyChange: this.handleDifficultyChange,
      handleTimeRequiredChange: this.handleTimeRequiredChange,
      handleCostChange: this.handleCostChange,
      handleInitialSearch: this.handleInitialSearch,
      handleMainSearch: this.handleMainSearch,
      handleSubmitSearch: this.handleSubmitSearch,
      handleSearchWithPagination: this.handleSearchWithPagination,
      handleTagClick: this.handleTagClick,
      handleCollapseNavbar: this.handleCollapseNavbar,
      handleShowCalculatorModal: this.handleShowCalculatorModal
    };

    return (
      <>
        <Router history={history}>
          <ScrollToTop />
          <AppContext.Provider value={contextElements}>
            <Switch>
              <MainTemplate>
                <Route exact path={routes.home} component={HomeView} />
                <Route
                  path={routes.category}
                  render={props => <CategoryView id={props.match.params.id} />}
                />
                <Route
                  path={routes.feature}
                  render={props => <FeatureView id={props.match.params.id} />}
                />
                <Route
                  path={routes.recipe}
                  render={props => (
                    <SingleRecipeView id={props.match.params.id} />
                  )}
                />
                <Route path={routes.calculatorBMI} component={CalculatorView} />
                <Route path={routes.profile} component={ProfileView} />
              </MainTemplate>
            </Switch>
          </AppContext.Provider>
        </Router>
      </>
    );
  }
}

export default Root;
