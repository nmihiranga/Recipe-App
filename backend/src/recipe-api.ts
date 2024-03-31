const apiKey = "e37838d7044e417fb003d707e5bf2da6";

export const searchRecipes = async (searchTerm: string, page: number)=> {
  if(!apiKey) {
    throw new Error("API Key not found");
  }

  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

  const queryParams = {
    apiKey,
    query: searchTerm,
    number: "10",
    offset: (page * 10).toString()
  }

  url.search = new URLSearchParams(queryParams).toString();

  try {
    const searchResponse = await fetch(url);
    const resultJson = await searchResponse.json();
    return resultJson;
  } catch (error) {
    console.log(error);
  }
}

export const getRecipeSummary = async(recipeId:string)=> {
  const url = new URL(`https://api.spoonacular.com/recipes/${recipeId}/summary`);

  const params = {
    apiKey: apiKey
  }

  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url);
  const json = await response.json();

  return json;
}