import React from 'react';

import './ToolCard.css';

const URL_PREFIX = 'https://sessatakuma.github.io/'

export default function ToolCard({link, name, description}) {
    return (
        <a className="tool-card" href={`${URL_PREFIX}${link}`}>
            <h2>{name}</h2>
            <p>{description}</p>
        </a>
    );
}