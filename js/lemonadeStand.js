"use strict";

/*function startLemonadeStand(){
	console.log(document.weather);
}*/


function LemonadeStand(){
	this.peopleArray = [];
	this.avgBuy = Math.random();
	this.addPeople = function(num){
		var people = num;
		for(var i=0; i<people; i++){
			var newPerson = i+1 + ":" + this.avgBuy;
			this.peopleArray.push(newPerson);
		}
	console.log(this.peopleArray);
	}
}



var Test = new LemonadeStand();
Test.addPeople(5);
