import React from 'react';

export default function Filter({handleForm}) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            let { ibu } = event.target;

            ibu = ibu.value;

            handleForm(ibu); 
        }}>
        <input name="ibu" type="text" placeholder="Put minimum IBU" required
        />
        <button type="submit">submit!</button>
        </form>
    )
}