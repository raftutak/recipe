import React from 'react';

import Form from '../components/Form';

const API_KEY = 'a5e3ba3841e7d5a1e832fac92e33bb3f';

class Search extends React.Component {
    state = {
        recipes: []
    }

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);
        console.log(recipeName);

        const data = await api_call.json();
        this.setState({ recipes: data.recipes });
        console.log(this.state.recipes);
    }

    render() {
        return (
            <div className="search-wrapper">
                <section className="search">
                    <Form getRecipe={this.getRecipe} />
                </section>
            </div>
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

export default Search;

// getRecipe = async (e) => {
//     const recipeName = e.target.elements.recipeName.value;
//     e.preventDefault();
//     const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);
//     console.log(recipeName);

//     const data = await api_call.json();
//     this.setState({ recipes: data.recipes });
//     console.log(this.state.recipes);
// }