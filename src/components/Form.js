import React from 'react';

const Form = props => (
    <div className="search-wrapper">
        <section className="search">
            <form onSubmit={props.getRecipe}>
                <input className="main-search" type="search" name="recipeName" placeholder="Szukaj przepisu ..." />
            </form>
        </section>
    </div>
);

export default Form;