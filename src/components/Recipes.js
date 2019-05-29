import React from 'react';

import { Link } from 'react-router-dom';

const Recipes = props => (
    <div className="recipes">
        {props.recipes.map((recipe) => {
            return (
                <div key={recipe.title}>
                    <img src={recipe.image_url} alt={recipe.title} />
                    <h4>{recipe.title}</h4>
                    <p>Publisher: {recipe.publisher}</p>
                    <button>
                        <Link to={{ pathname: `/recipe/${recipe.recipe_id}`, state: { recipe: recipe.title } }}>View recipe</Link>
                    </button>
                </div>
            );
        })}
    </div>
)

export default Recipes;