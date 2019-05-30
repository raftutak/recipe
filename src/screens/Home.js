import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import Recipes from '../components/Recipes';

const API_KEY = 'c78b0144c73988c63d9fdf0226094d10';

class Home extends React.Component {
    state = {
        recipes: []
    }

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
        console.log(recipeName);

        const data = await api_call.json();
        this.setState({ recipes: data.recipes });
        console.log(this.state.recipes);
    }

    render() {
        return (
            <div>
                <Header />
                <Form getRecipe={this.getRecipe} />
                <Recipes recipes={this.state.recipes} />
            </div>
        )
    }

}

export default Home;

//     // componentDidMount = () => {
//     //   const json = localStorage.getItem('recipes');
//     //   const recipes = JSON.parse(json);
//     //   this.setState({ recipes: recipes });
//     // }

//     // componentDidUpdate = () => {
//     //   const recipes = JSON.stringify(this.state.recipes);
//     //   localStorage.setItem('recipes', recipes);
//     // }