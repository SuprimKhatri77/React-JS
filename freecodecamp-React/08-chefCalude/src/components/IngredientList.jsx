import React from 'react'

export default function IngredientList({ingredients,getRecipe}) {
  return (
    <>
    {ingredients.length > 0 ? (
        <section className="max-w-[582px] mx-auto mt-5">
          <h1 className="text-3xl font-bold">Ingredietns on hand: </h1>
          <ul className="flex flex-col gap-2 list-disc mt-2 px-5 capitalize">
            {ingredients.map((ingredient) => (
              <li key={ingredient}> {ingredient} </li>
            ))}
          </ul>
          {ingredients.length >= 4 ? (
            <div className="flex flex-col md:flex-row md:justify-between gap-2 bg-gray-200 py-5 px-7 mt-5 md:mt-8 rounded-md items-center">
              <div className="flex flex-col gap-3 justify-center">
                <h2 className="text-xl font-bold">Ready for a recipe?</h2>
                <p className="text-gray-600 text-[12px] md:text-[16px]">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button className="bg-orange-700 cursor-pointer py-2 px-3 rounded-md text-white  hover:bg-orange-800 transition-all duration-300 ease-in-out" onClick={getRecipe} >
                Get a recipe
              </button>
            </div>
          ) : null}
        </section>
      ) : null}
            </>
  )
}
