import React, {useState} from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../utils/api";

function Main() {
  const [ingredients, setIngredients] = useState(["chicken breast","pasta","corn","spices"]);
  const [recipe, setRecipe] = useState("")

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

  async function getRecipe(){
    // setRecipeShown(prevVal => !prevVal)
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    // console.log(recipeMarkdown);
    setRecipe(recipeMarkdown)
    
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

      <IngredientList 
      ingredients={ingredients}
      getRecipe={getRecipe}
      />

      <ClaudeRecipe 
      recipe={recipe}
      />
      


    </main>
  );
}

export default Main;
