import React from 'react';

export default function Filter({handleForm}) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            let { abv } = event.target;

            abv = abv.value;

            handleForm(abv); 
        }}>
        <input name="abv" type="text" placeholder="Put minimum ABV" required
        />
        <button type="submit">submit!</button>
        </form>
    )
}