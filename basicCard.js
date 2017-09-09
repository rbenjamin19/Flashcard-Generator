var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("In what year was Biggie Smalls shot?", "1997");
var card2 = new BasicCard("In what year was Tupac shot?", "1996"); 
var card3 = new BasicCard("In what month was Biggie Smalls shot?", "march"); 
var card4 = new BasicCard("In what month was Tupac shot?", "september"); 

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);


function studyCards() {
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						cardCount ++
						studyCards();
					} 
					else {
						//STATE CORRECT ANSWER
						console.log("incorrect");
						console.log("Correct Answer:  " + cards[cardCount].back);
						cardCount ++
						studyCards();
					}

				});//then function

	}// if statement


}//studyCards function

studyCards();