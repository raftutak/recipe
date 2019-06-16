import React from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                <Nav />
                <Header />
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div id="go-back">
                        <div className="go-back-sec">
                            <h2>{recipe.title}</h2>
                        </div>
                        <div id="full-recipe" className="container">

                            <img src={recipe.image_Url} alt={recipe.title} />
                            <h3 className="ingredients"><span>Skladniki:</span> {recipe.ingredients.map(ingredient => <li>{ingredient}, </li>)}</h3>
                            <h3><span>Opis: </span> {recipe.description}</h3>
                            <h3><span>Blog: </span> {recipe.blog}</h3>
                            <h3><span>Blog URL:</span> {recipe.blog_Url}</h3>
                            <div className="button">
                                <a className="button" href="/">Wróć do strony głównej</a>
                            </div>
                        </div>
                    </div>
                }
                <Footer />
            </div>
        );
    }
}

export default Recipe;