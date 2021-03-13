import { useState } from 'react';
import PropTypes from 'prop-types';

// Se encargará de añadir una nueva categoria mediante un input

export const AddCategory = ({ setCategories, categories }) => {

    // Estado de mi input
    const [ inputValue, setInputValue ] = useState('');

    const handleOnChange = ( e ) => {
        // Cada que ingreso un nuevo valor al input, se actualiza el estado
        setInputValue( e.target.value );
    }

    const handleOnSubmit = ( e ) => {
        // Previene el comportamiento por defecto al hacer submit
        e.preventDefault();
        
        const verifyDuplicated = categories.find( category => category.toLowerCase() === inputValue.toLowerCase() );

        // Validación de mi inputValue y evitar categorias duplicadas
        if( inputValue.trim().length >= 3 && typeof verifyDuplicated === 'undefined' ) {

            setCategories( [ inputValue.toLowerCase(), ...categories ] );

            setInputValue('');

        } else {

            setInputValue('');

        }

    }

    return (

        <form onSubmit={ handleOnSubmit }>

            <input className='hvr-shadow' 
                type='text'
                value={ inputValue }
                onChange={ handleOnChange }
            />

        </form>

    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}
