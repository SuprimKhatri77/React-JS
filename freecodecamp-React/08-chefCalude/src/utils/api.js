import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page and donot start with Sure, I'd be happy to help! instead  start with based on the recipe you provided ....
`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    console.log("ingredientsArr received:", ingredientsArr);

    if (!Array.isArray(ingredientsArr)) {
        console.error("Expected an array but got:", ingredientsArr);
        return;
    }

    const ingredientsString = ingredientsArr.join(", ");
    console.log("Formatted ingredients:", ingredientsString);

    try {
        // console.log("Sending request to API...");
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });

        // console.log("Full API Response:", response);

        if (!response || !response.choices || response.choices.length === 0) {
            console.error("Invalid API response:", response);
            return "No recipe found. Try again!";
        }

        // return response.choices[0].message.content;
        const recipe = response.choices[0]?.message?.content;
// console.log("Extracted Recipe:", recipe);
return recipe || "No recipe generated.";

    } catch (err) {
        console.error("API Error:", err.message);
        return "Failed to fetch a recipe.";
    }
}
