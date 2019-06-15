import React from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Form from '../components/Form';
import Recipes from '../components/Recipes';
import Footer from '../components/Footer';

// const API_KEY = 'c78b0144c73988c63d9fdf0226094d10';

class Home extends React.Component {
    state = {
        recipes: []
    }

    componentDidMount = () => {
        const json = localStorage.getItem('recipes');
        const recipes = JSON.parse(json);
        this.setState({ recipes: recipes });
    }

    componentDidUpdate = () => {
        const recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem('recipes', recipes);
    }

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        // const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
        const api_call = await fetch(`https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?search=${recipeName}&count=100`);
        console.log(recipeName);

        const data = await api_call.json();
        this.setState({ recipes: data.recipes });
        console.log(this.state.recipes);
    }

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <Form getRecipe={this.getRecipe} />
                <Recipes recipes={this.state.recipes} />
                <Footer />
            </div>
        )
    }

}

export default Home;