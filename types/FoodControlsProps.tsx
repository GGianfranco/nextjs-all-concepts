type FoodControlsProps = {
  filterList: (keyword: string) => void;
  sortRatingDescending: () => void;
  sortRatingAscending: () => void;
  sortedAscending: boolean;
  setShowFoodForm: (show: boolean) => void;
};

export default FoodControlsProps;
