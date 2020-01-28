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
    pagination: {
      pageNumber: 1
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

  handleSearchWithPagination = async pageNumber => {
    this.setState({
      search_isLoading: true,
      search_result: undefined
    });

    const url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=papryka&pageNumber=${pageNumber}&pageSize=6`;
    const response = await axios(url);
    const search_result = await response.data.recipes;

    const pagination = {
      pagesAmount: response.data.pagesAmount,
      pageNumber: response.data.pageNumber,
      totalCount: response.data.totalCount,
      nextPage: response.data.nextPage,
      prevPage: response.data.prevPage,
      pageNumbers: []
    };

    for (let i = 1; i <= response.data.pagesAmount; i++) {
      pagination.pageNumbers.push(i);
    }

    this.setState({
      search_isLoading: false,
      search_result,
      pagination
    });

    console.log(this.state.pagination);
  };

  // handleInitialSearch = async () => {
  //   this.setState({
  //     search_isLoading: true,
  //     search_result: undefined
  //   });

  //   const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=makaron&count=6`;
  //   const response = await axios(url);
  //   const search_result = await response.data.recipes;

  //   this.setState({ search_isLoading: false, search_result });
  // };

  handleSubmitSearch = async event => {
    event.preventDefault();

    this.setState({
      search_isLoading: true,
      search_result: undefined,
      search_phrase: this.state.search_input,
      pagination: undefined
    });

    const query = this.state.search_input;
    let url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=${query}&pageNumber=1&pageSize=6`;
    if (this.state.search_mainCategory) {
      url = url.concat(
        `&dishMainCategoryIds=${this.state.search_mainCategory.id}`
      );
    }
    if (this.state.search_subCategory) {
      url = url.concat(
        `&dishSubCategoryIds=${this.state.search_subCategory.id}`
      );
    }
    if (this.state.search_dishType) {
      url = url.concat(`&dishIds=${this.state.search_dishType.id}`);
    }
    if (this.state.search_mealType) {
      url = url.concat(`&featureIds=${this.state.search_mealType.id}`);
    }
    if (this.state.search_exclusion) {
      this.state.search_exclusion.map(
        exclusion => (url = url.concat(`&featureIds=${exclusion.id}`))
      );
    }
    if (this.state.search_difficulty) {
      url = url.concat(`&featureIds=${this.state.search_difficulty.id}`);
    }
    if (this.state.search_timeRequired) {
      url = url.concat(`&featureIds=${this.state.search_timeRequired.id}`);
    }
    if (this.state.search_cost) {
      url = url.concat(`&featureIds=${this.state.search_cost.id}`);
    }

    console.log(url);

    const response = await axios(url);
    const search_result = await response.data.recipes;
    // const pagination = {
    //   pagesAmount: response.data.pagesAmount,
    //   pageNumber: response.data.pageNumber,
    //   totalCount: response.data.totalCount,
    //   nextPage: response.data.nextPage,
    //   prevPage: response.data.prevPage
    // };

    this.setState({
      search_isLoading: false,
      search_result,
      pagination: {
        pagesAmount: response.data.pagesAmount,
        pageNumber: response.data.pageNumber,
        totalCount: response.data.totalCount,
        nextPage: response.data.nextPage,
        prevPage: response.data.prevPage
      }
    });

    // document
    //   .getElementById('search-form')
    //   .scrollIntoView({ behavior: 'smooth' });
  };

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

  // handleShowLoginModal = event => {
  //   this.setState({ showLoginModal: !this.state.showLoginModal });
  // };

  // handleShowRegistrationModal = event => {
  //   this.setState({ showRegistrationModal: !this.state.showRegistrationModal });
  // };

  handleCollapseNavbar = event => {
    this.setState({ collapseNavbar: !this.state.collapseNavbar });
  };

  componentDidMount() {
    this.handleSearchWithPagination(1);
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
      handleSubmitSearch: this.handleSubmitSearch,
      handleSearchWithPagination: this.handleSearchWithPagination,
      handleTagClick: this.handleTagClick,
      handleCollapseNavbar: this.handleCollapseNavbar
      // handleShowLoginModal: this.handleShowLoginModal,
      // handleShowRegistrationModal: this.handleShowRegistrationModal
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
