"use strict";

function Person(day,temp,price){
	this.day = day;
	this.temp = temp;
	this.price = price;
	this.purchase = Math.random();
	this.buyLemonade = function(){
		var num = this.purchase / this.price;
		var buy = this.temp > 75 ? this.temp%75 * num : num;
		this.purchase = buy >= .5;
	}
}

function People(){
	this.peopleArray = [];
	this.addPeople = function(day,avgPeople,temp,price){
		var people = avgPeople;
		for(var i=0; i<people; i++){
			var newPerson = new Person(day,temp,price);
			newPerson.buyLemonade();
			this.peopleArray.push(newPerson);
		}
	}
}

function AllPeople(){
	this.allPeopleArray = [];
	this.truePeople = [];

	this.addPeoplePerDay = function(days,avgPeople,temp,price){
		for (var i=0; i<days; i++){
			var pplOneDay = new People();
			pplOneDay.addPeople(i,avgPeople,temp[i],price);
			this.allPeopleArray.push(pplOneDay.peopleArray);
			if ()
		}
	}
}

function Weather(){
	this.weatherArray = [];
	this.getWeather = function(days){
		for (var i=0; i <days; i++){
			var todaysHigh = parseInt(document.weather.forecast[i].high);
			this.weatherArray.push(todaysHigh);
		}
	}
}

function LemonadeStand(){	
	this.avgPeople = 0;  
	this.price = 0; 
	this.daysSimulate = 0;
	this.cost = 0;

	this.temp = new Weather();
	this.people = new AllPeople();


	this.generateLemonadeStand = function(elementID){	
			var element = document.getElementById(elementID);
			this.avgPeople = parseInt(document.getElementById("avgPeople").value);  
			this.price = parseInt(document.getElementById("price").value); 
			this.daysSimulate = parseInt(document.getElementById("daysSimulate").value);
			this.cost = parseInt(document.getElementById("cost").value);

			this.temp.getWeather(this.daysSimulate);

			this.people.addPeoplePerDay(this.daysSimulate,this.avgPeople,this.temp.weatherArray,this.price);
			console.log(this.people.allPeopleArray);


			var simulateTable = "<table><tr><th>" + "DAY" + "</th><th>" + "PEOPLE" + "</th><th>" + "GLASSES SOLD" + "</th><th>" + "PROFIT" + "</th></tr>";
			for (var i=0; i <this.daysSimulate; i++) {
				simulateTable += "<tr><td>" +  "Day " + (i+1) + "</td><td>" + this.avgPeople + "</td><td>" + "this.customersWhoBuyArray.length" + "</td><td>" + "this.customersWhoBuyArray.length * this.cost" + "</td></tr>";
			}
			simulateTable += "<tr><td>" + "<b>TOTAL: </b> Days " + this.daysSimulate + "</td><td>" + "People " + this.avgPeople*this.daysSimulate + "</td><td>" + "totalthis" + "</td><td>" + "totalthat" + "</td></tr></table>";
			element.innerHTML = simulateTable;
	}
	
}

var myStand = new LemonadeStand();

