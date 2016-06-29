"use strict";

/*function startLemonadeStand(){
	console.log(document.weather);
}*/


function LemonadeStand(){
	this.peopleArray = [];
	this.addPeople = function(num){
		var people = num;
		for(var i=0; i<people; i++){
			var newPerson = i+1 + ":" + Math.random();
			this.peopleArray.push(newPerson);
		}
	console.log(this.peopleArray);
	}

	this.onSubmit = function(){
		var daysSimulate = document.getElementById("daysSimulate").value;  
		var avgPeople = document.getElementById("avgPeople").value;  
		var cost = document.getElementById("cost").value;  
		var price = document.getElementById("price").value;  
		alert(daysSimulate + avgPeople + cost + price);
	}

}

var myTest = new LemonadeStand();
myTest.addPeople(5);
