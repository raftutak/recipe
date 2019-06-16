import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <header>
            <div className="container">
                <div className="wrap">
                    <h1>Łatwe przepisy na każdą okazję</h1>
                    <h3>Witaj na recipe-search! Jest to ogromna baza przepisów zawierająca treści z najlepszych polskich blogów kulinarnych. Od dziś nie musisz przeglądać wielu stron w poszukiwaniu najlepszego lub najprostszego przepisu - wszystko znajdziesz w jednym miejscu, właśnie tutaj. Przekonaj się sam korzystając z wyszukiwarki poniżej!</h3>
                    <a className="button" href="/">Strona główna</a>
                </div>
            </div>
        </header>
    </div>
)

export default Header;