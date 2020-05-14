import React from 'react';
import { Item } from './'

export default function Results({ results}) {
    return <ul className="results">
        {results.map(item => <Item key={item.id} item={item} />)}
    </ul>
}