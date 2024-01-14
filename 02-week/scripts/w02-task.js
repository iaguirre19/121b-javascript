/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = "Iran Ricardo Aguirre Castañeda";
const currentYear = new Date().getFullYear();  // Use getFullYear() directly to get the year
const profilePicture = "images/fotodeperfil-removebg-preview.png";

/* Step 3 - Element Variables */
const nameElement = document.querySelector("#name");
const foodElement = document.querySelector("#food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let chosenDishDisplay = "";

const displayFavoriteDishes = () => {
  favoriteDishes.forEach((dish) => {
    chosenDishDisplay += `${dish.name}  ${dish.icon} <br>`;
  });
};

const favoriteDishes = [
  { name: "Tacos", icon: "🌮" },
  { name: "Enchiladas", icon: "🍲" },
  { name: "Guacamole", icon: "🥑" },
];

displayFavoriteDishes();
foodElement.innerHTML = `<h3>Initial Display</h3> ${chosenDishDisplay}<br>`;

const newFavoriteDish = { name: "Sopes", icon: "🍛" };
favoriteDishes.push(newFavoriteDish);

chosenDishDisplay = "";
displayFavoriteDishes();
foodElement.innerHTML += `<h3>After Adding Sopes</h3> ${chosenDishDisplay} <br>`;

favoriteDishes.shift();

chosenDishDisplay = "";
displayFavoriteDishes();
foodElement.innerHTML += `<h3>After Removing First Dish</h3> ${chosenDishDisplay} <br>`;

favoriteDishes.pop();

chosenDishDisplay = "";
displayFavoriteDishes();
foodElement.innerHTML += `<h3>After Removing Last Dish</h3> ${chosenDishDisplay} <br>`;
