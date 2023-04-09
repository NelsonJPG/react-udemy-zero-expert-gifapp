import { useGetGif } from "../hooks/useGetGif";
import { GifItem } from "./GifItem";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useGetGif(category);
  
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {/** gif item */}
        {images.map((image: { id: string; title: string; url: string }) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
