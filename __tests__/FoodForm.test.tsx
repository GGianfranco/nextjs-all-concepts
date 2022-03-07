import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import FoodForm from "@/components/FoodForm";
import FoodCardProps from "@/types/FoodCardProps";
import { act } from "react-dom/test-utils";
import user from "@testing-library/user-event";

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

describe("<FoodForm />", () => {
  it("should render FoodForm component", async () => {
    await act(async () => {
      const mockSetFoodList = jest.fn();
      const mockSetShowFoodForm = jest.fn();
      const { getByTestId } = render(
        <FoodForm
          foodList={sampleData}
          setFoodList={mockSetFoodList}
          showFoodForm={true}
          setShowFoodForm={mockSetShowFoodForm}
        />
      );
      expect(getByTestId("food-form")).toBeInTheDocument();
    });
  });

  //   Valid inputs
  describe("we expect no error messages on the following inputs", () => {
    it("should not render any error message", async () => {
      // await act(async () => {
      const mockSetFoodList = jest.fn();
      const mockSetShowFoodForm = jest.fn();
      render(
        <FoodForm
          foodList={sampleData}
          setFoodList={mockSetFoodList}
          showFoodForm={true}
          setShowFoodForm={mockSetShowFoodForm}
        />
      );
      user.type(screen.getByTestId("name"), "Cabbage");
      user.type(screen.getByTestId("imageUrl"), "https://localhost.com");
      user.type(
        screen.getByTestId("description"),
        "A very very very good vegetable."
      );
      user.click(screen.getByTestId("submit"));

      await waitFor(() => {
        expect(screen.getByTestId("name-error").textContent).toBe(``);
        expect(screen.getByTestId("imageUrl-error").textContent).toBe(``);
        expect(screen.getByTestId("description-error").textContent).toBe(``);
      });
      // });
    });
  });

  // Invalid inputs
  describe("we expect failure on the following invalid inputs", () => {
    //   Simulates user interaction of submitting an empty form.
    it("should show error requiring for inputs of empty fields", async () => {
      const mockSetFoodList = jest.fn();
      const mockSetShowFoodForm = jest.fn();
      render(
        <FoodForm
          foodList={sampleData}
          setFoodList={mockSetFoodList}
          showFoodForm={true}
          setShowFoodForm={mockSetShowFoodForm}
        />
      );
      user.type(screen.getByTestId("name"), "");
      user.type(screen.getByTestId("imageUrl"), "");
      user.type(screen.getByTestId("description"), "");

      user.click(screen.getByTestId("submit"));

      await waitFor(() => {
        expect(screen.getByTestId("name-error").textContent).toBe(
          `Please input food name.`
        );
        expect(screen.getByTestId("imageUrl-error").textContent).toBe(
          `Please input an image URL.`
        );
        expect(screen.getByTestId("description-error").textContent).toBe(
          `Please input food description.`
        );
      });
    });

    //   Simulates user interaction of submitting an invalid imageUrl.
    it("should show error showing notfying an invalid image URL", async () => {
      const mockSetFoodList = jest.fn();
      const mockSetShowFoodForm = jest.fn();
      render(
        <FoodForm
          foodList={sampleData}
          setFoodList={mockSetFoodList}
          showFoodForm={true}
          setShowFoodForm={mockSetShowFoodForm}
        />
      );
      user.type(screen.getByTestId("name"), "Cabbage");
      user.type(screen.getByTestId("imageUrl"), "https://dsd");
      user.type(screen.getByTestId("description"), "A vegetable");
      user.click(screen.getByTestId("submit"));

      await waitFor(() => {
        expect(screen.getByTestId("imageUrl-error").textContent).toBe(
          `image must be a valid URL`
        );
      });
    });

    //   Simulates user interaction of submitting a description beyond maximum.
    it("should show error requiring for inputs of empty fields", async () => {
      const mockSetFoodList = jest.fn();
      const mockSetShowFoodForm = jest.fn();
      render(
        <FoodForm
          foodList={sampleData}
          setFoodList={mockSetFoodList}
          showFoodForm={false}
          setShowFoodForm={mockSetShowFoodForm}
        />
      );
      user.type(
        screen.getByTestId("name"),
        "CabbageCabbageCabbageCabbageCabbageCabbageCabbageCabbageCabbageCabbageCabbage"
      );
      user.type(screen.getByTestId("imageUrl"), "https://dsd.com");
      user.type(
        screen.getByTestId("description"),
        "A vegetable, a veggie, super good."
      );
      user.click(screen.getByTestId("submit"));

      await waitFor(() => {
        expect(screen.getByTestId("name-error").textContent).toBe(
          `name must be at most 10 characters`
        );
      });
    });

    //   Simulates user interaction of submitting a name beyond maximum.
    it("should show error requiring for inputs of empty fields", async () => {
      const mockSetFoodList = jest.fn();
      const mockSetShowFoodForm = jest.fn();
      render(
        <FoodForm
          foodList={sampleData}
          setFoodList={mockSetFoodList}
          showFoodForm={false}
          setShowFoodForm={mockSetShowFoodForm}
        />
      );
      user.type(screen.getByTestId("name"), "Cabbage");
      user.type(screen.getByTestId("imageUrl"), "https://dsd.com");
      user.type(
        screen.getByTestId("description"),
        "A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. A vegetable, a veggie, super good. "
      );
      user.click(screen.getByTestId("submit"));

      await waitFor(() => {
        expect(screen.getByTestId("description-error").textContent).toBe(
          `description must be at most 215 characters`
        );
      });
    });
  });
});
