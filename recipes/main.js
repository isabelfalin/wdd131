import recipes from './recipes.mjs';

function getRandomNumber(upperlimit){
    return Math.floor(Math.random()*upperlimit) 
}

function getRandomRecipe(){
    const randomNumber = getRandomNumber(recipes.length);
    return recipes[randomNumber];
}

function getRecipeTemplate(recipe){
    let template = ` <img src="${recipe.image}" alt="recipe image">
            <div>
                ${tagsTemplate(recipe.tags)}
                <h1>${recipe.name}</h1>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </div>`
    return template;
}

function tagsTemplate(tags) {
    let html = `<ul class="recipe__tags">`;
    tags.forEach(tag => {
        html += `<li>${tag}</li>`
    });

    html += `</ul>`;
    return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span class="rating" role="img" saria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let index = 0; index < 5; index++) 
        if (index < rating){
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
    else{
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    }

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const mainContent = document.getElementById("main-content");

    let recipeHTML = "";
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings

        recipeList.forEach( recipe => {
            recipeHTML +=getRecipeTemplate(recipe);
        })
	// Set the HTML strings as the innerHTML of our output element.
        mainContent.innerHTML = recipeHTML;
}

function filterRecipes(query){
    let newRecipeList = recipes.filter( recipe => {

        if(recipe.name.toLowerCase().includes(query))
            return true;

        if(recipe.description.toLowerCase().includes(query))
            return true;

        if(recipe.tags.find(tag => tag.toLowerCase().includes(query) ))
            return true;

        if(recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query) ))
            return true;

        return false;
    });


    function compareFn(a,b) {
        if (a.name > b.name) {
        return -1;
        } else if (a.name < b.name) {
        return 1;
        }
        // a must be equal to b
        return 0;
        }

    return newRecipeList.sort(compareFn)
}

function searchHandler(){
    const searchBar = document.getElementById("searchbar");
    const query = searchBar.value.toLowerCase();

    const newRecipeList = filterRecipes(query);
    renderRecipes(newRecipeList);
}

const searchButton = document.getElementById("searchbutton");
searchButton.addEventListener("click", searchHandler);

function init() {
  // get a random recipe
  const recipe = getRandomRecipe();
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();


