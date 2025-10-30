import React from 'react';

import ToolCard from './ToolCard';
import './ToolCards.css';

export default function ToolCards ({tools}) {
    return <section className='tools'>
        {tools.map(tool => <ToolCard {...tool}/>)}
    </section>
}