var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze

}
ClozeCard.prototype.full = function() {
	
	clozeDeleted = this.cloze
	clozeText = this.text
	clozeText = clozeText.replace("...", clozeDeleted);
	console.log(clozeText);

}

var card1 = new ClozeCard("Biggie Smalls shot in the year of ....", "1997");
var card2 = new ClozeCard("Tupac shot in the year of ....", "1996"); 
var card3 = new ClozeCard("Biggie Smalls was shot in the month of ....", "march"); 
var card4 = new ClozeCard("Tupac was shot in the month of ....", "september"); 

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);

function studyCards() {
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						cardCount ++
						studyCards();
					} 
					else {
						
						console.log("incorrect");
						cards[cardCount].full();
						cardCount ++
						studyCards();
					}

				});//then function

	}// if statement


}//studyCards function

studyCards();




