import { GifGridItem } from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifts';

// Se encargara de mostrar todas las categorias que tengo en un titulo h3 y posteriormente
// iterar el objeto de la peticion a la API

export const GifGrid = ({ category }) => {

    // Custom Hook
    const { data: images, loading } = useFetchGifts( category );

    return (

        <>
            <div className='categories--center'>
                <h3 className='categories--capitalize hvr-underline-from-center' > { category } </h3>
            </div>

            { 

                loading &&
                    <center>
                        <p>Cargando...</p>
                    </center>
                
            }

            <div className='card-grid' >
                

                {
                    images.map( img => (
                        <GifGridItem 
                            { ...img }
                            key={ img.id }  
                        />
                    ))
                }

            </div>
        </>

    )

}