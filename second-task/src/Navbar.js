import React from 'react';
import './Navbar.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="max-width">
                <span className="logo">LETS GROW MORE</span>
                <button onClick={getData}><b>GET USER</b></button>
            </div>
        </nav>
    )
}