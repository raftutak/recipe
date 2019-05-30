import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { Link } from 'react-router-dom';

const Recipes = props => (
    <div className="recipe-list-wrapper container">
        <section className="recipe-list row">
            {props.recipes.map((recipe) => {
                return (
                    <div key={recipe.title} className="col-md-4" style={{ marginBottom: "2rem" }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.image_url} alt={recipe.title} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text>test text</Card.Text>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                        Blog: {recipe.publisher}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Druga rzecz
                            </ListGroupItem>
                                    <ListGroupItem>
                                        <Link to={{ pathname: `/recipe/${recipe.recipe_id}`, state: { recipe: recipe.title } }}>Sprawdź przepis</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </section>
    </div>
)

export default Recipes;