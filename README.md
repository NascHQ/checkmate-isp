# Checkmate ISP
Checkmate ISP is a tool which aims to measure the internet quality of our beloved [ISPs](https://en.wikipedia.org/wiki/Internet_service_provider).  
It was designed specifically to prove that we have a crap internet service in Brazil.  
You can use it as well if you live in another country.

# How it works
Checkmate ISP is just a Node.js program encapsulated inside [Electron](http://electron.atom.io/).  
We've just started, but in the future Checkmate ISP should be used as a CLI program, programatically (to work inside other projects) and as an desktop and mobile app for the public in general.  

Checkmate ISP steps:  
- Get the current connected wifi name (SSID)  
	*TODO: We need to improve that in order to get the wired connection as well  
- Start the loop
	Will test the connection speed every minute  
- Store data on Firebase  
- Prints out an table with previous computed results and average download and upload speed


# How to use it
```
npm install
npm starttool
```

# Technologies
- Electron  
- Speedtest.net  
- Firebase  

# Roadmap
TODO

# Contribute
TODO