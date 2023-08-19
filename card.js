var cardsArray = [
  {
    name: "CSS",
    img: "https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true",
  },
  {
    name: "HTML",
    img: "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true",
  },
  {
    name: "jQuery",
    img: "https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true",
  },
  {
    name: "JS",
    img: "https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true",
  },
  {
    name: "Node",
    img: "https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true",
  },
  {
    name: "Photo Shop",
    img: "https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true",
  },
  {
    name: "PHP",
    img: "https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true",
  },
  {
    name: "Python",
    img: "https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true",
  },
  {
    name: "Ruby",
    img: "https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true",
  },
  {
    name: "Sass",
    img: "https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true",
  },
  {
    name: "Sublime",
    img: "https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true",
  },
  {
    name: "Wordpress",
    img: "https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true",
  },
];

//set a card Array
// to access card arrays using bracket and dot notation
//cardsArray [0].name; gives CSS
//cardsArray[1].name; gives img link

//Duplicate cardsArray to create a match for each card
var gameGrid = cardsArray.concat(cardsArray);
//To duplicate start changing the loops name from cardsArray to gameGrid

//Randomize game Grid on each load using Math.random
gameGrid.sort(function () {
  return 0.5 - Math.random();
});

//STEPS
//Set a div with an idea of game-board and assign to it a variable game
var game = document.getElementById("game-board");

//create a section element and assign it to a variable grid
var grid = document.createElement("section");

//give the section element a class of grid
grid.setAttribute("class", "grid");

//Append the grid section to the game-board
game.appendChild(grid);

//to get through the item, loop through each item in our cards array
for (i = 0; i < gameGrid.length; i++) {
  // 1 change cardsArray to gameGrid
  //create a div element and assign to variable card element
  var card = document.createElement("div");
  //Apply a card to that div
  card.classList.add("card");
  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = gameGrid[i].name;
  // 2 change cardsArray to gameGrid

  // Apply the background image of the div to the cardsArray image
  //using template literal to pass the card as an array
  //card.style.backgroundImage = `url($ {cardsArray[i].img})`;

  card.style.backgroundImage = "url(" + gameGrid[i].img + ")";

  //3 change cardsArray to gameGrid

  //Append the div to the grid section of the card element
  grid.appendChild(card);
}

// add addEventListener to the class selected so that when you select the card it shows
// the border
grid.addEventListener("click", function (event) {
  //Declare variable to target our clicked item
  var clicked = event.target;
  //Add selected class
  clicked.classList.add("selected");
});
