function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Brigadeiro é uma delícia",
    autoStart: true,
    delay: 1,
    cursor: "👩🏽‍🍳",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
