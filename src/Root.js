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
import ConverterView from './views/ConverterView';

class Root extends React.Component {
  state = {
    collapseNavbar: false,

    searchInput: '',
    noResults: false,
    mainCategory: undefined,
    subCategory: undefined,
    dishType: undefined,
    mealType: undefined,
    exclusion: undefined,
    difficulty: undefined,
    timeRequired: undefined,
    cost: undefined,

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

  handleMainCategoryChange = mainCategory => {
    this.setState({
      mainCategory,
      subCategory: undefined,
      dishType: undefined
    });
  };

  handleSubCategoryChange = subCategory => {
    this.setState({
      subCategory,
      dishType: undefined
    });
  };

  handleDishTypeChange = dishType => {
    this.setState({
      dishType
    });
  };

  handleMealTypeChange = mealType => {
    this.setState({
      mealType
    });
  };

  handleExclusionChange = exclusion => {
    this.setState({
      exclusion
    });
  };

  handleDifficultyChange = difficulty => {
    this.setState({
      difficulty
    });
  };

  handleTimeRequiredChange = timeRequired => {
    this.setState({
      timeRequired
    });
  };

  handleCostChange = cost => {
    this.setState({
      cost
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
    if (document.getElementById('lastSearchFormInput')) {
      document
        .getElementById('lastSearchFormInput')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.setState({
      initialSearch: {
        isLoading: true,
        result: undefined
      }
    });

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
    document
      .getElementById('lastSearchFormInput')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });

    this.setState({
      initialSearch: undefined,
      noResults: undefined,

      mainSearch: {
        isLoading: true,
        result: undefined
      }
    });

    const query = this.state.searchInput;

    let url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=${query}&pageNumber=${pageNumber}&pageSize=6`;

    if (this.state.mainCategory) {
      url = url.concat(`&dishMainCategoryIds=${this.state.mainCategory.id}`);
    }
    if (this.state.subCategory) {
      url = url.concat(`&dishSubCategoryIds=${this.state.subCategory.id}`);
    }
    if (this.state.dishType) {
      url = url.concat(`&dishIds=${this.state.dishType.id}`);
    }
    if (this.state.mealType) {
      url = url.concat(`&featureIds=${this.state.mealType.id}`);
    }
    if (this.state.exclusion) {
      this.state.exclusion.map(
        exclusion => (url = url.concat(`&featureIds=${exclusion.id}`))
      );
    }
    if (this.state.difficulty) {
      url = url.concat(`&featureIds=${this.state.difficulty.id}`);
    }
    if (this.state.timeRequired) {
      url = url.concat(`&featureIds=${this.state.timeRequired.id}`);
    }
    if (this.state.cost) {
      url = url.concat(`&featureIds=${this.state.cost.id}`);
    }

    await axios(url)
      .then(response => {
        const result = response.data.recipes;

        const pagination = this.createPagination(response.data);

        this.setState({
          mainSearch: {
            isLoading: false,
            result,
            pagination,
            heading: query
          }
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          noResults: true
        });
      });
  };

  // document
  //   .getElementById('mainSearchResult')
  //   .scrollIntoView({ behavior: 'smooth' });

  handleTagClick = async (pageNumber, tag) => {
    await this.setState({
      initialSearch: undefined,
      noResults: undefined,

      mainSearch: {
        isLoading: true,
        result: undefined
      },

      searchInput: tag
    });

    const query = this.state.searchInput;

    let url = `https://recipe-search.projektstudencki.pl/recipe/SearchRecipesPaged/?search=${tag}&pageNumber=${pageNumber}&pageSize=6`;

    await axios(url)
      .then(response => {
        const result = response.data.recipes;

        const pagination = this.createPagination(response.data);

        this.setState({
          mainSearch: {
            isLoading: false,
            result,
            pagination,
            heading: query
          }
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          noResults: true
        });
      });

    document
      .getElementById('lastSearchFormInput')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    );
  }
}

export default Root;
