const fetch = require('node-fetch') 

/**
 * Finds and receives all beers from the database
 * 
 * @returns {<array>} all beers from the data base
 *
 * @throws {Error} if there are unkown error from the api or server's error
 */

module.exports = function (abv) {
    return (async() => {
   
        const response = await fetch(`https://api.punkapi.com/v2/beers?abv_gt=${abv}`)
    
        const { status } = response
        
        if (status === 200) {
            const beers = await response.json()
            
            return beers
        }

        if (status >= 400 && status < 500) {

            throw new Error(response.error)
        }

        throw new Error('server error')
    })()
    
}