"use strict";

/*function startLemonadeStand(){
	console.log(document.weather);
}*/

function People(){
	this.peopleArray = [];
	this.addPeople = function(num){
		var people = num;
		for(var i=0; i<people; i++){
			var newPerson = i+1 + ":" + Math.random();
			this.peopleArray.push(newPerson);
		}
	console.log(this.peopleArray);
	}
}

function Button(){
	People.prototype.getGlassesSold = function(){

	}

	this.onSubmit = function(){
		this.daysSimulate = document.getElementById("daysSimulate").value;  
		this.avgPeople = document.getElementById("avgPeople").value;  
		this.cost = document.getElementById("cost").value;  
		this.price = document.getElementById("price").value; 
		var simulateTable = "<table>" + "<tr>" + "<th>" + "DAY" + "</th>" + "<th>" + "PEOPLE" + "</th>" + "<th>" + "GLASSES SOLD" + "</th>" + "<th>" + "PROFIT" + "</th>" + "</tr>";
		for (var i=0; i <this.daysSimulate; i++) {
			simulateTable += "<tr>" + "<td>" +  "Day " + i + "</td>" + "<td>" + this.avgPeople + "</td>" + "<td>" + "FUNCTION" + "</td>" + "<td>" + "FUNCTION + this.cost" + "</td>" + "</tr>";
		}
		simulateTable += "</table>";
		alert(simulateTable);
	}
}


var myTest = new People();
var myTest2 = new Button();
