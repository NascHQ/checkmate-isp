var speed = require('./speedtest');
const wifiName = require('wifi-name');
var user = 'jaydson';

wifiName()
.then(name => {
	return name;	
})
.then((wifi_name) => {
	speed.startLoop( { time: 1000 * 60, network: wifi_name, user: user });

	speed.getResults()
	.then((rows) => {
		var table = document.getElementById('table_tests');
		var sumDown = 0;
		var sumUp = 0;
		var averageDown = 0;
		var averageUp = 0;
		var length = 0;

		document.getElementById('network_name').innerHTML = 'SSID (Network): ' + wifi_name;
		var cells = "<tr><td>Date</td><td>Download</td><td>Upload</td><tr>";
		for (var i in rows) {
			length++;
			sumDown += rows[i].result.speeds.download;
			sumUp += rows[i].result.speeds.upload;
			cells += "<tr><td>"+rows[i].result.date+"</td><td>"+rows[i].result.speeds.download+"</td><td>"+rows[i].result.speeds.upload+"</td><tr>";
			table.innerHTML = cells;
		};
		averageDown = (sumDown / length).toFixed(); 
		averageUp = (sumUp / length).toFixed(); 
		document.getElementById('avgdown').innerHTML = averageDown;
		document.getElementById('avgup').innerHTML = averageUp;
	});
});