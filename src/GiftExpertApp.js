import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'wanda vision' ]);

    /*
    const handleAdd = () => {
        setCategories( [ ...categories, 'WandaVision' ] )
        // setCategories( category => [ ...category, 'WandaVision' ] );
    }
    */

    return (

        <>

            <h2>GiftExpertApp</h2>

            {/* Comunicación entre componentes */}
            <AddCategory setCategories={ setCategories } categories={ categories } />

            <hr />

            {
                categories.map( category => (
                    <GifGrid 
                        category={ category } 
                        key={ category } 
                    /> 
                ))
            }


        </>

    )

}

export default GiftExpertApp;
