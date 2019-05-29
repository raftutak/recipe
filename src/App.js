import React from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = '76f5b0fe8573ffd0a055c19d34665700';

class App extends React.Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&count=5`);
    console.log(recipeName);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map((recipe) => { return <p>{recipe.title}</p> })}
      </div>
    );
  }
}

export default App;
