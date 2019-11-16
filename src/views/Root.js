import React from 'react';
import AppContext from '../context';
import axios from 'axios';

// REACT-ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes';

// VIEWS
import Contact from './Contact';
import Home from './Home';
import Recipes from './Recipes';

// TEMPLATES
import MainTemplate from '../templates/MainTemplate';

class Root extends React.Component {
  state = {
    stateValue: 'test',
    showSubcategory: false,
    recipes: []
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitSearch = async e => {
    const recipeName = this.state.search_input;
    e.preventDefault();
    // const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const api_call = await fetch(
      `https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=${recipeName}&count=100`
    );
    console.log(recipeName);

    const data = await api_call.json();

    this.setState({ recipes: data.recipes, json: data });
    console.log(this.state.recipes);

    // event.preventDefault();
    // this.setState({
    //   search_isLoading: true,
    //   search_inputDisabled: true
    // });

    // axios
    //   .get('https://recipe-search.projektstudencki.pl/recipe/searchRecipes/', {
    //     params: {
    //       search: this.state.search_input,
    //       dishMainCategoryIds: this.state.search_mainCategory
    //     }
    //   })
    //   .then(async result => {
    //     console.log(result);

    //     const data = result.json;

    //     this.setState({
    //       ...this.state,
    //       recipes: data
    //     });
    //   })
    //   .catch(error => console.log(error));
  };

  handleShowCategory = event => {
    event.preventDefault();
  };

  render() {
    const contextElements = {
      ...this.state,
      handleInputChange: this.handleInputChange,
      handleSubmitSearch: this.handleSubmitSearch
    };

    return (
      <>
        <BrowserRouter>
          <AppContext.Provider value={contextElements}>
            <Switch>
              <MainTemplate>
                <Route exact={true} path={routes.home} component={Home} />
                <Route path={routes.recipes} component={Recipes} />
                <Route path={routes.contact} component={Contact} />
              </MainTemplate>
            </Switch>
          </AppContext.Provider>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
