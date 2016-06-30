"use strict";

function startLemonadeStand(){
	console.log(document.weather);
}

function Person(){
	this.probabilityToBuy = Math.random();
}

function People(){
	this.peopleArray = [];
	this.addPeople = function(num){
		var people = num;
		for(var i=0; i<people; i++){
			var newPerson = new Person();
			this.peopleArray.push(newPerson);
		}
	console.log(this.peopleArray);
	}
}

function Weather(){
	this.weatherArray = [];
	this.getWeather = function(days){
		for (var i=0; i <days; i++){
			var todaysHigh = document.weather.forecast[i].high;
			this.weatherArray.push(todaysHigh);
		}
	console.log(this.weatherArray);
	}
}

function Button(){
		
	this.buyLemonade = function(days){
		this.cost = document.getElementById("cost").value;  
		var temp = new Weather.getWeather(days);
		var num = this.peopleArray.probabilityToBuy[i] / this.cost;
			for(var i=0; temp > 75; i++){
			temp%75 * num;
			} else{num * 1;}

	}

	this.createLemonadeTable = function(elementID){
		var element = document.getElementById(elementID);
		this.avgPeople = document.getElementById("avgPeople").value;  
		this.price = document.getElementById("price").value; 
		this.daysSimulate = document.getElementById("daysSimulate").value;
		
		var simulateTable = "<table><tr><th>" + "DAY" + "</th><th>" + "PEOPLE" + "</th><th>" + "GLASSES SOLD" + "</th><th>" + "PROFIT" + "</th></tr>";
		for (var i=0; i <this.daysSimulate; i++) {
			simulateTable += "<tr><td>" +  "Day " + (i+1) + "</td><td>" + this.avgPeople + "</td><td>" + "FUNCTION" + "</td><td>" + "FUNCTION + this.cost" + "</td></tr>";
		}
		simulateTable += /*"<tr><td>" + "Total Days: " this.daysSimulate + "</td><td>" */"</table>";
		element.innerHTML = simulateTable;
	}

}

var myTest = new People();
myTest.addPeople(5);
myTest.addPeople(10);
var myTest2 = new Button();
var weatherTest = new Weather();
