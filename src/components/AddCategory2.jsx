// Con este AddCategory2 la idea es mejorar el componente para que realice una sola cosa, ya que ahora mismo
// esta capturando el input y a la vez modificando la lista insertando el input, cuando deberia emitirlo.
import { useState } from 'react'

export const AddCategory2 = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target: { value } }) => {
        setInputValue(value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); 
        
        const newValue = inputValue.trim();

        if(newValue.length === 0) return;  

        //setCategories(categories => [inputValue, ...categories]); 
        onNewCategory(newValue);    // Emite el input al componente padre
        setInputValue(''); 
    }

    return (
    <form onSubmit={onSubmit}> 
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
        
    </form>
    )
}
