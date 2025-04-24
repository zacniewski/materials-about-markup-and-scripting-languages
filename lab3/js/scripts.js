function displayDate() {
  document.getElementById("demoClick").innerHTML = Date();
}

function clearDate() {
  document.getElementById("demoClick").innerHTML = '';
}

function myFunctionChange() {
  let x = document.getElementById("mySelect").value;
  document.getElementById("demoSelect").innerHTML = "Wybrałeś: " + x;
}


function myFocusFunction() {
  document.getElementById("fname").style.backgroundColor = "yellow";
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

function singleClick() {
  document.getElementById("clickInfo").innerHTML = "Kliknąłeś raz!";
}

function doubleClick() {
  document.getElementById("clickInfo").innerHTML = "Kliknąłeś dwa razy!";
}


document.getElementById("myBtn").addEventListener("mouseover", displayDate);
document.getElementById("myBtn").addEventListener("mouseout", clearDate);

document.getElementById("fname").addEventListener("focus", myFocusFunction);

document.getElementById("myBtn2").addEventListener("click", singleClick);
document.getElementById("myBtn2").addEventListener("dblclick", doubleClick);
