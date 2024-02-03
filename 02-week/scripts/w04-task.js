/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Iran Ricardo Aguirre Castañeda",
  photo: "./images/fotodeperfil-removebg-preview.png",
  favoriteFoods: [
    { name: "Tacos", icon: "🌮" },
    { name: "Enchiladas", icon: "🍲" },
    { name: "Guacamole", icon: "🥑" },
  ],
  hobbies: ["Soccer", "Photography", "Video Games"],
  placesLived: [],
}; 


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "Mexico City, Mexico",
    length: "15 year",
  },
  {
    place: "Cuernavaca, Mor, Mexico",
    length: "5 year",
  },
  {
    place: "Guadalajara, Jalisco, Mexico",
    length: "2 year",
  },
  {
    place: "Rancho Cucamonga, CA",
    length: "1 year",
  },
  {
    place: "Lawrenceville, GA",
    length: "2 year",
  },
  {
    place: "Las Vegas, NV",
    length: "2 year",
  },
  {
    place: "Brasilia, Brazil",
    length: "1 year",
  }
);



/* DOM Manipulation - Output */

/* Name */
function renderName() {
  const fullName = document.querySelector("#name");
  fullName.textContent = myProfile.name;
}
/* Photo with attributes */
function renderPhoto() {
  const photoElement = document.querySelector("#photo");
  photoElement.src = myProfile.photo;
  photoElement.alt = `Photo of ${myProfile.name}`;
}

/* Favorite Foods List*/
function renderFavoriteFoods() {
  const favoriteFoodsContainer = document.querySelector("#favorite-foods");

  myProfile.favoriteFoods.forEach((food) => {
    const foodElement = document.createElement("li");
    foodElement.classList.add("food-element");
    foodElement.textContent = `${food.name} ${food.icon}`;
    favoriteFoodsContainer.appendChild(foodElement);
  });
}

/* Hobbies List */
function renderHobbies() {
  const hobbiesContainer = document.querySelector("#hobbies");

  myProfile.hobbies.forEach((hobby) => {
    const hobbyElement = document.createElement("li");
    hobbyElement.textContent = hobby;
    hobbiesContainer.appendChild(hobbyElement);
  });
}

/* Places Lived DataList */
function renderPlacesLived() {
  const placesLivedContainer = document.querySelector("#places-lived");

  myProfile.placesLived.forEach((place) => {
    const dtElement = document.createElement("dt");
    dtElement.textContent = place.place;
    placesLivedContainer.appendChild(dtElement);

    const ddElement = document.createElement("dd");
    ddElement.textContent = place.length;
    placesLivedContainer.appendChild(ddElement);
  });
}

renderName();
renderPhoto();
renderFavoriteFoods();
renderHobbies();
renderPlacesLived();




