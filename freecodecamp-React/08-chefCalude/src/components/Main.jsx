import React, { use, useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState(["oregano","chicken breast","pasta","tomato paste", "all the main spices"]);
  const [recipeShown, setRecipeShown] = useState(false)

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('form submitted');

  //   const fromData = new FormData(event.currentTarget)
  //   const newIngredient = fromData.get("ingredient")

  //   ingredients.push(newIngredient)

  //   console.log(ingredients);

  //   setIngredients(prevIngredient => [...prevIngredient, newIngredient])

  // }

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");

    if (newIngredient) {
      setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    }
  }

  function flipRecipeShown(){
    setRecipeShown(prevVal => !prevVal)
  }
  return (
    <main className="my-12 md:my-20 font-['Inter'] mx-5 md:mx-0 ">
      <form
        className="flex flex-col md:mx-[10px]  md:flex-row md:justify-center md:items-center gap-5"
        action={handleSubmit}
      >
        <input
          type="text"
          placeholder="e.g. oregano"
          className="border-gray-400 border-2 h-10 w-full sm:w-[400px] px-4 rounded-md shadow-md"
          aria-label="Add ingredient"
          name="ingredient"
          autoComplete="off"
        />
        <button className="bg-black text-white py-2 cursor-pointer rounded-md px-5 text-nowrap font-['Inter']">
          + Add ingredient
        </button>
      </form>

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
              <button className="bg-orange-700 cursor-pointer py-2 px-3 rounded-md text-white  hover:bg-orange-800 transition-all duration-300 ease-in-out" onClick={flipRecipeShown} >
                Get a recipe
              </button>
            </div>
          ) : null}
        </section>
      ) : null}

      {
        recipeShown ? 
        <section className="max-w-[582px] mx-auto mt-5 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Suggested recipe:</h2>
          <p className="text-gray-600">
            Based on the ingredients you have available, I would recommend
            making a simple a delicious Beef Bolognese Pasta. Here is the
            recipe:
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Ingredients: </h2>
          <ul className="px-7 list-disc flex flex-col gap-2 text-gray-600">
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>
              8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Instructions: </h2>
          <ol className="list-decimal text-gray-600 flex flex-col gap-2 px-5">
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>
              In a large skillet or Dutch oven, cook the ground beef over
              medium-high heat, breaking it up with a wooden spoon, until
              browned and cooked through, about 5-7 minutes.
            </li>
            <li>
              Add the diced onion and minced garlic to the skillet and cook for
              2-3 minutes, until the onion is translucent.
            </li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>
              Add the crushed tomatoes, beef broth, oregano, and basil. Season
              with salt and pepper to taste.
            </li>
            <li>
              Reduce the heat to low and let the sauce simmer for 15-20 minutes,
              stirring occasionally, to allow the flavors to meld.
            </li>
            <li>
              While the sauce is simmering, cook the pasta according to the
              package instructions. Drain the pasta and return it to the pot.
            </li>
            <li>
              Add the Bolognese sauce to the cooked pasta and toss to combine.
            </li>
            <li>
              Serve hot, garnished with additional fresh basil or grated
              Parmesan cheese if desired.
            </li>
          </ol>
        </div>
      </section>
      : null
      }


    </main>
  );
}

export default Main;
