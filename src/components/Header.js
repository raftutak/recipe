import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header-wrapper">
        <header className="header">
            <div className="logo">
                <h1>site-name</h1>
            </div>
            <nav className="top-nav">
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><a href="#">Przepisy</a></li>
                    <li><a href="#">Jadłospis</a></li>
                    <li><a href="#">Co ugotować?</a></li>
                    <li><a href="#">Moje konto</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
            <div className="top-search">
                <input type="search" placeholder="Szukaj przepisu ..." />
            </div>
            <div className="banner">
                <p>Nie wiesz co zjeść?</p>
                <p>Z nami się dowiesz!</p>
                <p>Skorzystaj z naszej zaawansowanej
wyszukiwarki przepisów!</p>
                <button className="button-banner">Sprawdź</button>
            </div>
        </header>
    </div>

    // <header className="App-header">
    //     <h1 className="App-title">HEADER3000</h1>
    // </header>
)

export default Header;