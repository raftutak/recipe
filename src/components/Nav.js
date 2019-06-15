import React from 'react';

import { Link } from 'react-router-dom';

const Nav = () => (
    <div>
        <nav>
            <div className="container">
                <i className="fas fa-bars"></i>
                <span id="logo">recipe-search</span>
                <ul>
                    <li><a href="/">Strona główna</a></li>
                    <li><a href="/">Przepisy</a></li>
                    <li><a href="/">Jadłospis</a></li>
                    <li><a href="/">Moje konto</a></li>
                    <li><a href="/">Kontakt</a></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Nav;