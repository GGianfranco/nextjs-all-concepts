import FoodCardProps from "@/types/FoodCardProps";

type FoodFormProps = {
  foodList: FoodCardProps[];
  setFoodList: (food: FoodCardProps[]) => void;
  showFoodForm: boolean;
  setShowFoodForm: (showFoodForm: boolean) => void;
};

export default FoodFormProps;
