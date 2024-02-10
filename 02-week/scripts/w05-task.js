/* W05: Programming Tasks */
console.log("The file is on line")

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");

        const h3Heading = document.createElement("h3");
        h3Heading.textContent = temple.templeName;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.location;

        article.appendChild(h3Heading);
        article.appendChild(image);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const response = await fetch(url)
    templeList = await response.json();
    displayTemples(templeList);
};

getTemples()
    .then(() => console.log(templeList))
    .catch(error => console.error("Error fetching temples", error));

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}


/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered');
    let filterValue = filter.value;
    switch (filterValue) {
      case "utah":
        displayTemples(
          temples.filter((temp) => temp.location.includes("Utah"))
        );
        break;
      case "notutah":
        displayTemples(
          temples.filter((temp) => !temp.location.includes("Utah"))
        );
        break;
      case "older":
        displayTemples(
          temples.filter(
            (temp) => new Date(temp.dedicated) < new Date(1950, 0, 1)
          )
        );
        break;
      case "all":
        displayTemples(temples);
        break;
      default:
        console.error("Invalid filter value", filter);
        break;
    }
}


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList)});
