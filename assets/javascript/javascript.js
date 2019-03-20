//
// Initialize Firebase
var config = {
	apiKey: "AIzaSyDBCSXi7M056_xMbV3QqgSHoLvUdkMMFY4",
	authDomain: "train-homework-7fabe.firebaseapp.com",
	databaseURL: "https://train-homework-7fabe.firebaseio.com",
	projectId: "train-homework-7fabe",
	storageBucket: "train-homework-7fabe.appspot.com",
	messagingSenderId: "297711430258"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#myButton").on("click", function(event) {
	event.preventDefault();
	var madeUpStuff = {
		Name: "Scoopy",
		Age: 36,
		Color: "yellow"
	};
	console.log("I'm working!");
	database.ref().push(madeUpStuff);
});
