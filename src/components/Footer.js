import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => (
    <div>
        <div className="container side-by-side">
            <section id="slider">
                <div className="wrap">
                    <h2>Przepis tygodnia</h2>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, alias. Perspiciatis possimus
                        officiis a nulla dolore doloremque suscipit fugiat molestias necessitatibus. Nostrum, optio fugit!
                    Architecto quod voluptates dolor ea magnam.</h3>
                </div>
            </section>

            <section id="test">
                <div className="wrap">
                    <h2>Polecany blog</h2>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, alias. Perspiciatis possimus
                        officiis a nulla dolore doloremque suscipit fugiat molestias necessitatibus. Nostrum, optio fugit!
                    Architecto quod voluptates dolor ea magnam.</h3>
                </div>
            </section>
        </div>

        <section id="search">
            <div className="container">
                <h2>Lorem ipsum</h2>
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, alias. Perspiciatis possimus
                    officiis a nulla dolore doloremque suscipit fugiat molestias necessitatibus. Nostrum, optio fugit!
                Architecto quod voluptates dolor ea magnam.</h3>
            </div>
        </section>

        <footer>
            <div className="wrap">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter-square"></i>
                <h3>Copyright &copy; recipe-search</h3>
            </div>
        </footer>
    </div>
)

export default Footer;