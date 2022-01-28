import React from 'react';
import './Home.css'

export default function Home({ getData }) {
    return (
        <section className="home container">
            <div className="content">
                <p> Click the given button in the <br />navbar to get the users details.</p>
            </div>
        </section>
    )
}