import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const { images, isLoading  } = useFetchGifs(category);

  return (
    <div>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando ...</h2>)
        }

        <div className="card-grid">
            {
                images.map((image) => (
                    <GifGridItem
                    key={image.id}
                    {...image} // esparce todas las propiedades de image
                    />
                ))
            }
        </div>
    </div>
  )
}