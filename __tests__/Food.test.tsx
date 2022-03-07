import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Food from "@/pages/food/index";
import { act } from "react-dom/test-utils";
import FoodCardProps from "@/types/FoodCardProps";

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

describe("<Food />", () => {
  it("should render Food component", async () => {
    await act(async () => {
      const { getByTestId } = render(<Food />);
      expect(getByTestId("food")).toBeInTheDocument();
    });
  });

  it("should render 6 food cards at first load", async () => {
    render(<Food />);

    await waitFor(() => {
      expect(screen.getAllByTestId("food-card")).toHaveLength(6);
    });
  });

  //   Sorting Algorithms
  it("should return properly sorted ratings", async () => {
    const descending = sortRatingDescending(sampleData).map((e) => e["rating"]);
    const ascending = sortRatingAscending(sampleData).map(
      (e: FoodCardProps) => e["rating"]
    );

    expect(descending).toEqual([5, 5, 5, 4, 4, 1]);
    expect(ascending).toEqual([1, 4, 4, 5, 5, 5]);
  });
});

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

const sortRatingDescending = (foodList: FoodCardProps[]): FoodCardProps[] => {
  return [...foodList.sort(compareRatingDescending)];
};
const sortRatingAscending = (foodList: FoodCardProps[]): FoodCardProps[] => {
  return [...foodList.sort(compareRatingAscending)];
};
