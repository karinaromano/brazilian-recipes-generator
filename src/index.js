function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  //build the API URL
  // Make a call to the API
  // Get user instructions input
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "oc623atdd290f8f910a91f68b4d7d17d"; // apiURL
  // Create the prompt and context
  let prompt = `User instructions are: Generate a Brazilian recipe with ingredients ${instructionsInput.value}`;
  let context =
    "You are a Brazilian Chef, and love to teach others how to make delicious brazilian dishes using cheap ingredients. Your mission is to generate a brazilian recipe, with 1º: showing the ingredientes; 2º show the instructions teaching how to cook it and 3º calculating how much it would cost to make the recipe in the UK considering the prices of the current date. To format details, generate each step as in HTML and separate each line with a <br/>. Show the name of the recipe as a <h3>,  and the total cost as <h4>. Sign the end of the recipe with 'Enjoy your meal! 👩🏽‍🍳 Brazilian ChefBot' inside a <strong> element, all the text must be displayed to the left of the page";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recipes");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);

  // Display the generated recipe
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
