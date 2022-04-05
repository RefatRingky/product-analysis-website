import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
           
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="review">Review</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;