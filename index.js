console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const number = document.querySelector(".value");
console.log(number);

const button = document.querySelector("button");
console.log(button);

const classArea = document.querySelector(".area-display");
console.log(classArea); 

const div = document.querySelector(".stats div");
    console.log(div);

    const elementHello = document.querySelector(".hello");
console.log(elementHello);

const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}
/* for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
} */

const divRatings = document.querySelectorAll(".rating-display .value");
  //console.log(divRatings);
    for(let currentRating of divRatings.values()) {
        const ratingValue = parseFloat(currentRating.innerText);
console.log(currentRating);
        }

const divAreas = document.querySelectorAll(".area-display");
    for (let i = 0; i < divAreas.length; i++) {
        const areaOnPage = divAreas[i];
        console.log(areaOnPage);
    }
// innerText to innerHTML Property
const descriptions = document.querySelectorAll(".description-display");
    for (let desc of descriptions.values()){
        let content = desc.innerText;

        if (content.length > 250){
            content = content.slice(0,250);
            content = content + '<a href="#">...</a>';
        }
        desc.innerHTML = content;
        console.log(desc.innerHTML);
    }

/* ClassList Property*/    
const ratings = document.querySelectorAll(".rating-display .value");
    for (let rating of ratings) {
        let ratingValue = parseFloat(rating.innerText);
      
        if (ratingValue > 4.7) {
          rating.classList.add("high-rating");
          rating.classList.remove("value");
        }
      }
/* createElement()*/
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
    newElement.innerText = `${numberParks} exciting parks to visit`;
    newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

/* testing eventListener() */
/*const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});  */
const allBtn = document.querySelectorAll(".rate-button");
allBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

/* lesson 5.1.5 example that changes into line 117, cleaner
const nameSorter = document.querySelector("#name-sorter");
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  const parksList = main.querySelectorAll(".park-display");
  main.innerHTML = "";
  const parksArray = Array.from(parksList);
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});
*/
// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
}; 
// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");
  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main
  main.innerHTML = "";
  // 4. Create an array
  const parksArray = Array.from(parksList);
  // 5. Sort the array
  parksArray.sort(sortByName);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};
// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");
// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler); 


//RATING SORT
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(parkA.querySelector(".rating-display > .value").innerText);
  const parkBRating = parseFloat(parkB.querySelector(".rating-display > .value").innerText);
    return parkBRating - parkARating;
}; 
// Function for handling the `nameSorter` click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");
  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main
  main.innerHTML = "";
  // 4. Create an array
  const parksArray = Array.from(parksList);
  // 5. Sort the array
  parksArray.sort(sortByRating);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};
// Select the `nameSorter` link
const ratingSorter = document.querySelector("#rating-sorter");
// Add an event listener
ratingSorter.addEventListener("click", ratingSorterClickHandler);
console.log(ratingSorter);


//DOMContentLoaded
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
