import React from 'react';

import Recipes from '../components/Recipes';

class RecipeList extends React.Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <Recipes recipes={this.state.recipes} />
        )
    };
}

// const Search = () => (
//     <div className="search-wrapper">
//         <section className="search">
//             <Form getRecipe={this.getRecipe} />
//         </section>
//     </div>
// )

export default RecipeList;