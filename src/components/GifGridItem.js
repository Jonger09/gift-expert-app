import React from 'react'

// Retorna cada url y titulo en un div, es decir, retornara 10 divs porque recibe 10
// url y 10 titulos

export const GifGridItem = ( { title, url } ) => {

    return (

        <div className='card hvr-grow' >

            <img src={ url } alt={ title} />
            <p> { title } </p>

        </div>

    )

}

