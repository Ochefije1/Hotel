//GREETING
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning!';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon!';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening!';

document.getElementById('checkTime').innerHTML = '<b>' + greet + '</b>';

// TO LOGIN AND INITIAL
function login() {
  var name = document.getElementById("name");
  var init = document.getElementById("init");
  var login = document.getElementById("login1");
  init.innerText = ((name.value).match(/\b(\w)/g)).join(" ").toUpperCase();
  login1.classList.toggle("hidden");
}

// TO ADD ROOM
var list = [""];
document.getElementById("add").innerHTML = list;

function pushFunction() {
  list.push("_Assests/Hotel-E.jpeg", "_Assests/Hotel-E1.jpeg", "_Assests/Hotel-E2.jpeg",
  "_Assests/Hotel-E3.jpeg", "__Assests/Hotel-E4.jpeg");
  document.getElementById("add").innerHTML = list;
}

// TO REMOVE ROOM
function myFunction() {
  const element = document.getElementById("remove");
  element.remove();
}


