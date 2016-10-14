var speedTest = require('speedtest-net');
var firebase = require("firebase");

firebase.initializeApp({
	databaseURL: "https://netchecker-e53aa.firebaseio.com"
});

const LOOP_TIME = 10000;
var testIsRunning = false;
var firebase_url;
var testLoop;

function test() {

	var sp = null;
	var log = {};

	testIsRunning = true;
	sp = speedTest({ maxTime: 5000 });
	sp.on('data', (data) => {
		data.date = new Date().toString();
		firebase.database().ref(firebase_url).push({
		    result: data
		});
	});

	return sp;
}

function startLoop(config) {
	firebase_url = "/" + config.user + "/" + config.network + "/tests";
	testLoop = setInterval(() => {
		console.log('Testing...');
		test();
	}, config.time || LOOP_TIME);
}

function stopLoop() {
	clearInterval(testLoop);
}

function getResults() {
	return new Promise((resolve, reject) => {
		var db = firebase.database();
		var ref = db.ref(firebase_url);

		ref.on("value", (snapshot) => {
			resolve(snapshot.val());
		}, (errorObject) => {
			reject("The read failed: " + errorObject.code);
		});
	});
}

module.exports.test = test;
module.exports.getResults = getResults;
module.exports.startLoop = startLoop;