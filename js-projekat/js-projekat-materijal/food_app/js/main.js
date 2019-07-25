var apiKey = "00c765b4b5add7f8f6bd5e5cba9b05a7";
var appId = "e277f834";


var recipeElement = document.createElement('div');
var image = document.createElement('img');
var calories = document.createElement('div');
var title = document.createElement('h3');
var labels = document.createElement('div');
var label = document.createElement('div');

document.getElementById("recipes").appendChild(recipeElement);
recipeElement.classList.add("recipe-element");

document.querySelector(".recipe-element").appendChild(image);

document.querySelector(".recipe-element").appendChild(calories);
calories.classList.add("calories");
document.querySelector(".recipe-element").appendChild(title);
document.querySelector(".recipe-element").appendChild(labels);
labels.classList.add("labels");

document.querySelector(".labels").appendChild(label);
label.classList.add("label");




url = "https://api.edamam.com/search?q=chicken&app_id=" + appId + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free";
console.log(url);

var myRequest = new XMLHttpRequest()

myRequest.open('GET', "https://api.edamam.com/search?q=chicken&app_id=" + appId + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free");

myRequest.send();

var keywordInput = document.querySelector(".keyword-input");
var input = document.querySelector("input");
var searchButton = document.querySelector('.search-button');

function enableSearch(e) {
	if (e.target.value) {
		searchButton.removeAttribute("disabled");
	} else {
		searchButton.setAttribute("disabled", "");
	}
}
 
keywordInput.addEventListener("keyup", enableSearch);
