import FoodCard from "@/components/FoodCard";
import FoodControls from "@/components/FoodControls";
import type { NextPage } from "next";
import FoodCardProps from "@/types/FoodCardProps";
import { Fragment, useEffect, useState } from "react";
import FoodForm from "@/components/FoodForm";

const sampleData: FoodCardProps[] = [
  {
    name: "Coleslaw",
    image:
      "https://images.pexels.com/photos/5739585/pexels-photo-5739585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "The fact that it's a vegetable is already enough for me to like to eat it but the combination of well cut strips of cabbage and carrots with a little bit of lemon and oozing mayonnaise makes me like to eat it more!",
    rating: 5,
  },
  {
    name: "Burnt Sunny Side Up!",
    image:
      "https://images.pexels.com/photos/7937471/pexels-photo-7937471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "I like sunny side up especially when it is slightly burnt. The crunchiness of the burnt area might sound but it significantly adds a pleasant texture to the mouth",
    rating: 5,
  },
  {
    name: "Buttery Scrambled Egg",
    image:
      "https://images.pexels.com/photos/10756661/pexels-photo-10756661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Buttery Scrambled Egg gives the opposite feeling of what the Burnt Sunny Side Up! offers. The creamy texture from the scrambled egg is perfect to partner with a toasted garlic bread.",
    rating: 4,
  },
  {
    name: "Shanghai",
    image:
      "https://images.pexels.com/photos/6645917/pexels-photo-6645917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "One of the three legends in children parties (with Hotdog and Spaghetti). Shanghai I would say is the best.",
    rating: 5,
  },
  {
    name: "Vinegar",
    image:
      "https://images.pexels.com/photos/4048713/pexels-photo-4048713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      'The "good taste" it is known for I don\'t think overweighs the "not so good smell" it comes with. So I\'ll just give it a one for existing.',
    rating: 1,
  },
  {
    name: "Burger",
    image:
      "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "My study buddy in my college days. I miss you.",
    rating: 4,
  },
];

const compareRatingAscending = (a: FoodCardProps, b: FoodCardProps) => {
  if (a.rating < b.rating) {
    return -1;
  }
  if (a.rating > b.rating) {
    return 1;
  }
  return 0;
};

const compareRatingDescending = (b: FoodCardProps, a: FoodCardProps) => {
  if (a.rating < b.rating) {
    return -1;
  }
  if (a.rating > b.rating) {
    return 1;
  }
  return 0;
};

const Food: NextPage = () => {
  const [foodList, setFoodList] = useState<FoodCardProps[]>(sampleData);
  const [showFoodForm, setShowFoodForm] = useState(false);
  const [displayList, setDisplayList] = useState<FoodCardProps[]>(foodList);
  const [sortedAscending, setSortedAscending] = useState(false);

  useEffect(() => {
    setDisplayList(() => foodList);
  }, [foodList]);

  const sortRatingDescending = (): void => {
    setDisplayList((displayList) => [
      ...displayList.sort(compareRatingDescending),
    ]);
    // setSortedAscending(() => true);
    setSortedAscending((prev) => !prev);
  };
  const sortRatingAscending = (): void => {
    setDisplayList((displayList) => [
      ...displayList.sort(compareRatingAscending),
    ]);
    // setSortedAscending(() => false);
    setSortedAscending((prev) => !prev);
  };

  const filterList = (keyword: string): void => {
    if (keyword === "") {
      setDisplayList(() => [...foodList]);
      sortedAscending ? sortRatingDescending() : sortRatingAscending();
      return;
    }

    setDisplayList((displayList) => [
      ...displayList.filter((food) =>
        food.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    ]);
  };

  return (
    <Fragment>
      {/* {showFoodForm && ( */}
      <FoodForm
        foodList={foodList}
        setFoodList={setFoodList}
        showFoodForm={showFoodForm}
        setShowFoodForm={setShowFoodForm}
      />
      {/* )} */}
      <div
        data-testid="food"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <FoodControls
          filterList={filterList}
          sortRatingDescending={sortRatingDescending}
          sortRatingAscending={sortRatingAscending}
          sortedAscending={sortedAscending}
          setShowFoodForm={setShowFoodForm}
        />
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {displayList.map((food, index) => (
            <FoodCard
              key={index}
              name={food["name"]}
              image={food["image"]}
              description={food["description"]}
              rating={food["rating"]}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Food;
