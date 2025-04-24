function displayDate() {
  document.getElementById("demoClick").innerHTML = Date();
}

function myFunctionChange() {
  let x = document.getElementById("mySelect").value;
  document.getElementById("demoSelect").innerHTML = "Wybrałeś: " + x;
}


function myFocusFunction() {
  document.getElementById("fname").style.backgroundColor = "red";
}

function myOnKeyDownFunction() {
  document.getElementById("demoKeyDown").innerHTML = "Wcisnąłeś klawisz wewnątrz pola input";
}

function myFunctionOnMouseMove(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Współrzędne: (" + x + "," + y + ")";
  document.getElementById("demoOnMouseMove").innerHTML = coor;
}

function clearCoordinates() {
  document.getElementById("demoOnMouseMove").innerHTML = "";
}


document.getElementById("myBtn").addEventListener("click", displayDate);
document.getElementById("fname").onfocus = function() {myFocusFunction()};