import React from 'react';
import '../css/Home.css';

import Image from './Student_picture.png';

function Home() {
  
    return (
        <div className="Background-home-page">
            <span>
                <h1 className="logo-header">All your needs, organized. One Place.</h1>
            </span>
            <div className="searchbar">
                <form className="search-bar">
                    <input className="bar" type="text" placeholder="Find your dream school" />
                    <button className="search-button" type="submit">Search</button>
                </form>

                <div className="advanced-box">
                    <h2 className="advanced">Advanced</h2>
                </div>
            </div>

            <div className="slogan-image">
                <div className="description-slogan">
                    <span className="slogan">
                        <h1 className="slogan-text">College, Simplified</h1>
                    </span>
                    <span className="description-website">
                        <p className="description">Time to simplify college searching. Welcome to College Organizer, a place where
                        you can find, compare, and determine your dream college.</p>
                    </span>
                </div>
                <div className="vector-image">
                    <img src={Image} height="500" alt="College student"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;