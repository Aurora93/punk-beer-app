import React from 'react';

export default function Item ({ item: { id, name, image_url, description } }) {
    return <li className="item">
        <h3 className="item__title">{name}</h3>
        <img src={image_url} alt=""/>
        <p>{description}</p>
    </li>
}