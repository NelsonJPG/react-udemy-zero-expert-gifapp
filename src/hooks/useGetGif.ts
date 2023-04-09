import { useEffect, useState } from "react";
import { getGifs } from "../services/getGif";

export const useGetGif = (category: string) => {
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let isMounted = false;
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isMounted) {
      getImages();
    }
    return () => {
      isMounted = true;
    };
  }, []);

  return { images, isLoading };
};
