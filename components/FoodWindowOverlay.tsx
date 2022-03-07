import type { NextPage } from "next";
import Image from "next/image";
import FoodWindowOverlayProps from "@/types/FoodWindowOverlayProps";

const FoodWindowOverlay: NextPage<FoodWindowOverlayProps> = (props) => {
  const { image } = props.foodCard;
  const setShow = props.setShow;

  return (
    <div
      className="flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 w-screen h-screen overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black z-40"
      onClick={() => setShow(false)}
    >
      <div className="object-cover w-3/4 h-3/4 relative">
        <Image
          src={image}
          alt="Unable to load image."
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default FoodWindowOverlay;
