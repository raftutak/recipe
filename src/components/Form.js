import React from 'react';

const Form = props => (
    <div>
        <section id="search">
            <h2>Wyszukiwarka</h2>
            <form className="search-form" onSubmit={props.getRecipe}>
                <input id="main-search" type="search" name="recipeName" placeholder="Wpisz szukaną frazę ..." />
                <button type="submit">Szukaj</button>
            </form>
        </section>
    </div>
);

export default Form;