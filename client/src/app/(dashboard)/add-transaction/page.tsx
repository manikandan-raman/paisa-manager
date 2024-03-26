"use client";
import { useForm } from "react-hook-form";
import { BackArrowSVG } from "../../../../public/back-arrow";
import { ThreeDotsSVG } from "../../../../public/three-dots";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ICategory, ITransactionForm } from "@/interfaces/transaction-list";
import { addTransaction } from "@/lib/add-transaction";
import { useEffect, useState } from "react";
import { getCategories } from "@/lib/get-categories";

export default function AddTransaction() {
  const [categories, setCategories] = useState<ICategory[]>();
  const schema = yup.object({
    category_id: yup.string().required("please select category"),
    amount: yup.number().required("please enter amount"),
    date: yup.date().required("please select date"),
    type: yup
      .string()
      .oneOf(["income", "expense"])
      .required("please select type"),
    note: yup.string().when("category_id", {
      is: "27fa6f41-4a54-40b0-8c17-99599d72524e",
      then: (schema) => schema.required("please enter note"),
    }),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    const getCategories1 = async () => {
      const data: ICategory[] = await getCategories();
      setCategories(data);
    };
    getCategories1();
  }, []);

  return (
    <>
      <div className="relative h-[90%]">
        <div className="h-[40%] w-full bg-primary rounded-bl-[25%] rounded-br-[25%] relative text-white">
          <div className="px-5 pt-12">
            <div className="flex justify-between items-center">
              <BackArrowSVG />
              <p className="text-lg font-medium">Add Expense</p>
              <ThreeDotsSVG width={24} />
            </div>
          </div>
          <div className="absolute rounded-2xl bg-white left-5 top-28 shadow-xl">
            <form
              onSubmit={handleSubmit(async (data: ITransactionForm) => {
                console.log(data);
                const errors = await addTransaction(data);
                if (errors) {
                  setError("type", { message: errors.message });
                }
              })}
              className="w-full py-12 px-12 sm:px-36 md:px-[25%]"
            >
              <select
                className="mt-4 block bg-white text-black w-full border rounded-lg p-2 focus:outline-none"
                id="category"
                {...register("category_id")}
              >
                <option className="text-gray-300" value="">
                  Select Category
                </option>
                {categories &&
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
              {errors.category_id && (
                <p className="mt-1 text-red-500">
                  {errors.category_id.message}
                </p>
              )}
              <input
                className="mt-4 block w-full border text-black rounded-lg p-2 focus:outline-none"
                autoComplete="off"
                type="text"
                id="amount"
                placeholder="Enter amount"
                {...register("amount")}
              />
              {errors.amount && (
                <p className="mt-1 text-red-500">{errors.amount.message}</p>
              )}
              <input
                className="appearance-none mt-4 block text-black w-full border rounded-lg p-2 focus:outline-none"
                autoComplete="off"
                type="date"
                id="date"
                placeholder="Select date"
                {...register("date")}
              />
              {errors.date && (
                <p className="mt-1 text-red-500">{errors.date.message}</p>
              )}
              <select
                className="mt-4 block bg-white text-black w-full border rounded-lg p-2 focus:outline-none"
                id="category"
                {...register("type")}
              >
                <option className="text-gray-300" value="">
                  Select type
                </option>
                <option key={1} value={"income"}>
                  income
                </option>
                <option key={1} value={"expense"}>
                  expense
                </option>
              </select>
              {errors.type && (
                <p className="mt-1 text-red-500">{errors.type.message}</p>
              )}
              {watch("category_id") ===
                "27fa6f41-4a54-40b0-8c17-99599d72524e" && (
                <>
                  <input
                    className="mt-4 block text-black w-full border rounded-lg p-2 focus:outline-none"
                    autoComplete="off"
                    type="text"
                    id="note"
                    placeholder="Enter note"
                    {...register("note")}
                  />
                  {errors.note && (
                    <p className="mt-1 text-red-500">{errors.note.message}</p>
                  )}
                  )
                </>
              )}
              <button
                className="mt-4 p-2 text-white rounded-lg bg-primary w-full"
                type="submit"
              >
                Add Transaction
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
