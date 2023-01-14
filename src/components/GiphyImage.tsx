import { Dispatch, SetStateAction } from "react";

interface GiphyImageProps {
  imageUrl: string;
}

function GiphyImage({ imageUrl }: GiphyImageProps) {
  return <img src={imageUrl} />;
}

export default GiphyImage;
