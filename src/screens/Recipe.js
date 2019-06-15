import React from 'react';

import Header from '../components/Header';

import { Link } from 'react-router-dom';

// const API_KEY = 'c78b0144c73988c63d9fdf0226094d10';

// jako klasa, bo potrzebny stan, w ktorym przechwytujemy id przepisu
class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const id = this.props.location.state.recipe;
        const req = await fetch(`https://recipe-search.projektstudencki.pl/recipe/searchRecipes/?id=${id}`);

        const res = await req.json();
        this.setState({ activeRecipe: res.recipes });
        console.log(this.state.activeRecipe);
    }

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div>
                <Header />
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div>
                        <img src={recipe.image_Url} alt={recipe.title} />
                        <h3>{recipe.title}</h3>
                        <h4>Blog: {recipe.blog}</h4>
                        <h4>Blog url: {recipe.blog_Url}</h4>
                        <p>Opis: {recipe.description}</p>
                        <p>Skladniki: {recipe.ingredients}</p>
                        <button>
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;