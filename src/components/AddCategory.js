import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleIputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        if(inputValue.trim().length > 2 ){
            setCategories( categories => [ inputValue,...categories ] );
            setInputValue('');
        }else{
            alert('La consulta debe tener mas de 3 caracteres');
        }         
    }

    return (
        <form onSubmit={handleSubmit}>  
            <input 
                type="text" 
                value={inputValue}
                onChange={handleIputChange}
                placeholder="Buscar Categoría"
            />
        </form>
    )
}


AddCategory.propTypes  = {
    setCategories : PropTypes.func.isRequired
};
