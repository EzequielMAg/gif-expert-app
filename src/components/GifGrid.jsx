import { GifItem } from "./GifItem";
import { useFetchtGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchtGif(category);
    console.log(isLoading);

    return (
        <>
            <h3>{ category }</h3>
            {
                //isLoading ? <h2>Cargando...</h2> : null
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid"> 
                {
                    images.map( ( image ) => (
                        //  <li key= {image.id }> { image.title } </li>
                        <GifItem
                            key={ image.id }
                            // image={ image }
                            {...image}  // Idem linea anterior. Esparce todos los atributos del objeto
                        /> 
                    ))
                }
            </div>
        </>
    )
}
