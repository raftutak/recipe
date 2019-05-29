import React from 'react';

// stateless component, bo nie potrzebuje state, dlatego nie uzywam klasy
const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName" />
        <button>Search</button>
    </form>
);

export default Form;