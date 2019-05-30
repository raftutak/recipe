import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header-wrapper">
        <header className="header">
            <div className="logo">
                <h1>recipe</h1>
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
                <button className="button-banner">Sprawdź</button>
            </div>
        </header>
    </div>
)

// const Header = () => (
//     <div className="header-wrapper">
//         <header className="header">
//             <div className="logo">
//                 <h1>site-name</h1>
//             </div>
//             <nav className="top-nav">
//                 <ul>
//                     <li><Link to="/">Strona główna</Link></li>
//                     <li><a href="#">Przepisy</a></li>
//                     <li><a href="#">Jadłospis</a></li>
//                     <li><a href="#">Co ugotować?</a></li>
//                     <li><a href="#">Moje konto</a></li>
//                     <li><a href="#">Kontakt</a></li>
//                 </ul>
//             </nav>
//             <div className="top-search">
//                 <input type="search" placeholder="Szukaj przepisu ..." />
//             </div>
//             <div className="banner">
//                 <p>Nie wiesz co zjeść?</p>
//                 <p>Z nami się dowiesz!</p>
//                 <p>Skorzystaj z naszej zaawansowanej
// wyszukiwarki przepisów!</p>
//                 <button className="button-banner">Sprawdź</button>
//             </div>
//         </header>
//     </div>
// )

export default Header;