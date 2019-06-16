import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { Link } from 'react-router-dom';

const Recipes = props => (
    <div className="list-bg">
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
                            <div className="recipe-title">
                                <h2>{recipe.title}</h2>
                            </div>
                            <div className="recipe-details">
                                <div className="recipe-details-text">
                                    <h3><span>ID przepisu:</span> {recipe.id}</h3>
                                    <h3><span>Blog:</span> {recipe.blog}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="goto-spacer"></div>
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