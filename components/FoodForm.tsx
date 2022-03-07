import type { NextPage } from "next";
import FoodFormProps from "@/types/FoodFormProps";
import FoodCardProps from "@/types/FoodCardProps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().max(10).required("Please input food name."),
  image: yup.string().url().required("Please input an image URL."),
  description: yup.string().max(215).required("Please input food description."),
  rating: yup.mixed().oneOf(["0", "1", "2", "3", "4", "5"]),
});

const FoodForm: NextPage<FoodFormProps> = (props) => {
  const { foodList, setFoodList, showFoodForm, setShowFoodForm } = props;
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodCardProps>({
    resolver: yupResolver(schema),
  });
  const onSubmitSuccess = (data: FoodCardProps) => {
    const newFoodList = [...foodList];
    newFoodList.push({ ...data, rating: Number(data.rating) });
    setFoodList(newFoodList);
    toast.success(`${name} successfully added!`);
    setName("");
    setImage("");
    setDescription("");
  };

  return (
    <Fragment>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className={`${
          showFoodForm ? "translate-x-0 " : "-translate-x-full "
        } ease-in-out duration-300 absolute h-full p-6 rounded-lg shadow-lg bg-white max-w-md z-50`}
      >
        <form onSubmit={handleSubmit(onSubmitSuccess)} data-testid="food-form">
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              {...register("name")}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setName(event.target.value)
              }
              value={name}
              placeholder="Name"
              data-testid="name"
            />
            <span data-testid="name-error" className="text-sm text-red-600">
              {errors.name?.message}
            </span>
          </div>
          <div className="form-group mb-6">
            <input
              type="url"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Image URL"
              data-testid="imageUrl"
              {...register("image")}
              value={image}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setImage(event.target.value)
              }
            />
            <span data-testid="imageUrl-error" className="text-sm text-red-600">
              {errors.image?.message}
            </span>
          </div>
          <div className="form-group mb-6">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows={3}
              placeholder="Description"
              data-testid="description"
              {...register("description")}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
                setDescription(event.target.value)
              }
              value={description}
            ></textarea>
            <span
              data-testid="description-error"
              className="text-sm text-red-600"
            >
              {errors.description?.message}
            </span>
          </div>
          <div className="form-group mb-6">
            {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0"> */}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Rating
            </label>
            <div className="relative ">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                {...register("rating")}
                data-testid="rating"
              >
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
                <option value="0">No rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {/* </div> */}
          </div>
          <button
            type="submit"
            data-testid="submit"
            id="submit"
            className="w-full px-6 py-2.5  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Add
          </button>
        </form>
        <button
          onClick={() => setShowFoodForm(false)}
          className="w-full px-6 py-2.5  font-medium tracking-wide text-slate-700 transition duration-200 rounded    focus:shadow-outline focus:outline-none mt-4"
        >
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default FoodForm;
