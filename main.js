// -The existing CardMaker object below contains a single method that returns a greeting. 

// -Your job is to add one or more methods to it, then use it as a prototype for at least three other objects using Object.create()

// Minimum requirement

// -Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

// Challenges

//  Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.

// Output the HTML strings with classes to the DOM that you can style with CSS.

// Refactor "makeFrontMessage" to return something more elaborate.

let frontOfCard = document.getElementById("frontOfCard"); 
// let frontOfCard = document.getElementsByClassName('frontOfCard');
// let frontOfCard = document.getElementsByTagName("H2");
let insideOfCard = document.getElementById("insideOfCard");

const CardMaker = {
  makeFrontMessage: function(string) {
    frontOfCard.innerHTML = `<h2>${string}</h2>`
  },
  makeInsideMessage: function(string) {
    insideOfCard.innerHTML = `<p>${string}</p>`
  }
}


// Refactor this to link this object to cardMaker
const BirthdayCard = Object.create(CardMaker);
const ValentinesCard = Object.create(CardMaker);
const ChristmasCard = Object.create(CardMaker);
const AnniversaryCard = Object.create(CardMaker);

BirthdayCard.makeFrontMessage("Happy Birthday To You");
BirthdayCard.makeInsideMessage("You Are Getting Old AF");

// ValentinesCard.makeFrontMessage("Be Mine");
// ValentinesCard.makeInsideMessage("Happy Vday");