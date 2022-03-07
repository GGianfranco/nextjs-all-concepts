import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import FoodCardRating from "./FoodCardRating";
import FoodCardProps from "@/types/FoodCardProps";
import { Fragment, useState } from "react";
import FoodWindowOverlay from "./FoodWindowOverlay";

const FoodCard: NextPage<FoodCardProps> = (props) => {
  const { name, image, description, rating } = props;
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {show && <FoodWindowOverlay foodCard={props} setShow={setShow} />}
      <div
        className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm relative cursor-pointer"
        onClick={() => setShow(true)}
        data-testid="food-card"
      >
        <div className="object-cover w-full h-64 relative">
          <Image
            //   src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            src={image}
            alt="Unable to load image."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <Link href="/">
              <a
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="Food"
              >
                Food
              </a>
            </Link>

            {/* <span className="text-gray-600">— 28 Dec 2020</span> */}
          </p>
          <Link href="/">
            <a
              aria-label="name"
              title="name"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {name}
            </a>
          </Link>
          <p className="mb-2 text-gray-700">{description}</p>
          <Link href="/">
            <a
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              <FoodCardRating key={`${name}-${rating}`} rating={rating} />
            </a>
          </Link>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-black"></div>
      </div>
    </Fragment>
  );
};

export default FoodCard;
