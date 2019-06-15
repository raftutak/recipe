import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { Link } from 'react-router-dom';

const Recipes = props => (
    <div>
        <section className="recipe-list container">
            {props.recipes.map((recipe) => {
                return (
                    <div className="card" key={recipe.title}>
                        <Link to={{ pathname: `/recipe/${recipe.id}`, state: { recipe: recipe.id } }}>
                            <div className="card-image">
                                <img src={recipe.image_Url} alt={recipe.title} />
                            </div>
                        </Link>
                        <div className="card-text">
                            <h2>{recipe.title}</h2>
                            <div className="recipe-details">
                                <h3><span>ID przepisu:</span> {recipe.id}</h3>
                                <h3><span>Źródło:</span> {recipe.blog}</h3>
                                <h3><span>URL:</span> {recipe.url}</h3>
                            </div>
                        </div>
                        <Link to={{ pathname: `/recipe/${recipe.id}`, state: { recipe: recipe.id } }}>

                            <div className="goto-recipe">
                                <h3>Przejdź do przepisu</h3>
                            </div>
                        </Link>

                    </div>

                );
            })}
        </section>
    </div>
)

export default Recipes;