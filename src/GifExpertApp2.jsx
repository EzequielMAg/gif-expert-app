import { useState } from "react"
import { AddCategory2, GifGrid } from "./components";   // No hace expecificar el archivo index.js, porque lo encuentra por defecto en tal carpeta

export const GifExpertApp2 = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball Z' ])

    const onAddCategory = (newCategory) => {
        // console.log(onNewCategory);
        if( categories.includes( newCategory )) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory2 
                // setCategories={ setCategories } 
                onNewCategory = { event => onAddCategory(event) }
            />
            {
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }
                        category = { category } />

                ))
            }           
        </>
    )
}
