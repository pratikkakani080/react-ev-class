import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div class="card">
            <img src="https://via.placeholder.com/300x150" alt="Card Image" />
            <div class="card-content">
                <h2 class="card-title">{props.element}</h2>
                <p class="card-text">This is a simple card example. You can use it to display content in a structured way.</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>
    )
}

export default Card
