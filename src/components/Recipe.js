import React from 'react';

const API_KEY = 'aaa8afd380804e818055fb5868cbcd58';

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
        return (
            <div>test</div>
        );
    }
}

export default Recipe;