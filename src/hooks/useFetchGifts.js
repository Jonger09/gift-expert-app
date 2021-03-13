import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// Custom Hook
export const useFetchGifts = ( category ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    // Se invoca getGifs cuando el componente es renderizado por primera vez
    useEffect( () => {
        // Mandamos como argumento nuestra Category y retorna una promesa
        getGifs( category )
            .then( gifs => 

                setTimeout( () => {
                    setState({
                        data: gifs,
                        loading: false
                    }) 
                }, 1000)

            )
    
    }, [ category ]);


    return state; // { data: [], loading: true }

}
