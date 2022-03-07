import ImageLoaderParams from "@/types/ImageLoaderParams";

const imageLoader = (imageLoaderParams: ImageLoaderParams): string => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  return imageLoaderParams.src;
};

export default imageLoader;
