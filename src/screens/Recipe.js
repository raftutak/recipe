import React from 'react';

import Header from '../components/Header';

import { Link } from 'react-router-dom';

const API_KEY = 'a5e3ba3841e7d5a1e832fac92e33bb3f';

// jako klasa, bo potrzebny stan, w ktorym przechwytujemy id przepisu
class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();
        this.setState({ activeRecipe: res.recipes[0] });
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
                        <img src={recipe.image_url} alt={recipe.title} />
                        <h3>{recipe.title}</h3>
                        <h4>Publisher: {recipe.publisher}</h4>
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