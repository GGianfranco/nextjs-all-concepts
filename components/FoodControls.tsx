import type { NextPage } from "next";
import FoodControlsProps from "@/types/FoodControlsProps";

const FoodControls: NextPage<FoodControlsProps> = (props) => {
  const {
    filterList,
    sortRatingDescending,
    sortRatingAscending,
    sortedAscending,
    setShowFoodForm,
  } = props;

  return (
    <div className="flex flex-col my-4 md:flex-row">
      <input
        placeholder="Search"
        type="text"
        className="lg:max-w-sm flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        onChange={(event) => filterList(event.target.value)}
      />
      {sortedAscending ? (
        <button
          className="mb-3 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none md:mr-2"
          onClick={sortRatingDescending}
          data-testid="sortRatingDescending"
        >
          Descending
        </button>
      ) : (
        <button
          className="mb-3 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none md:mr-2"
          onClick={sortRatingAscending}
          data-testid="sortRatingAscending"
        >
          Ascending
        </button>
      )}

      <button
        onClick={() => setShowFoodForm(true)}
        className="mb-3 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none md:mr-2"
      >
        Add
      </button>
    </div>
  );
};

export default FoodControls;
