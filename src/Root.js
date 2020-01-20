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
import ContactView from './views/ContactView';
import ProfileView from './views/ProfileView';
import FeatureView from './views/FeatureView';
import ScrollToTop from './utils/ScrollToTop';

class Root extends React.Component {
  state = {
    search_input: '',
    category_id: 1,
    collapseNavbar: false
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

  handleCheckboxChange = event => {
    const checkboxValue =
      event.target.type === 'checkbox' ? event.target.checked : null;

    this.setState({
      [event.target.name]: checkboxValue
    });
  };

  handleInitialSearch = async () => {
    this.setState({
      search_isLoading: true,
      search_result: undefined
    });

    const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=makaron&count=12`;
    const response = await axios(url);
    const search_result = await response.data.recipes;

    this.setState({ search_isLoading: false, search_result });
  };

  handleSubmitSearch = async event => {
    event.preventDefault();

    this.setState({
      search_isLoading: true,
      search_result: undefined,
      search_phrase: this.state.search_input
    });

    const query = this.state.search_input;
    let url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=${query}&count=8`;
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

    console.log(url);

    const response = await axios(url);
    const search_result = await response.data.recipes;

    this.setState({ search_isLoading: false, search_result });

    // document
    //   .getElementById('search-form')
    //   .scrollIntoView({ behavior: 'smooth' });
  };

  handleDailyRecipe = async () => {
    this.setState({
      dailyRecipe_isLoading: true,
      dailyRecipe_result: undefined
    });

    const url =
      'https://recipe-search.projektstudencki.pl/recipe/searchDayRecipe';
    const response = await axios(url);
    const dailyRecipe_result = await response.data.recipe;

    this.setState({ dailyRecipe_isLoading: false, dailyRecipe_result });

    console.log(this.state.dailyRecipe_result);
  };

  handleRandomRecipe = async () => {
    this.setState({
      randomRecipe_isLoading: true,
      randomRecipe_result: undefined
    });

    const url =
      'https://recipe-search.projektstudencki.pl/recipe/searchRandomRecipe';
    const response = await axios(url);
    const randomRecipe_result = await response.data.recipe;

    this.setState({ randomRecipe_isLoading: false, randomRecipe_result });

    console.log(this.state.randomRecipe_result);
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

  // handleShowCategory = async event => {
  //   const cat_id = event ? event.target.value : 1;

  //   await this.setState({
  //     categories_isLoading: true,
  //     categories_result: undefined,
  //     category_id: cat_id
  //   });

  //   const id = this.state.category_id;
  //   const url = `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=&count=12&dishMainCategoryIds=${id}`;

  //   const response = await axios(url);
  //   const categories_result = await response.data.recipes;

  //   this.setState({ categories_result, categories_isLoading: false });
  // };

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
    this.handleInitialSearch();
    this.handleDailyRecipe();
    this.handleRandomRecipe();
    // this.handleShowCategory();
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
      handleSubmitSearch: this.handleSubmitSearch,
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
                <Route path={routes.contact} component={ContactView} />
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
