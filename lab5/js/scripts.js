/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

console.log("Hello");
// let a = 10;
// const b = 20;
// console.log(b);

let buttons = document.getElementsByClassName('btn-primary');
let button1 = buttons[0];
// button1.innerHTML = "Właśnie Cię zmieniłem!"

// zmiana koloru
let some_name = document.getElementById('id1');
console.log('some_name = ',some_name);
some_name.style.color = 'red';

// button 1
console.log(buttons);
console.log('button1 = ', button1);

//zamiana atrybutu href
let my_link = document.getElementById('my_link');
// pierwszy sposób
// my_link.href = "https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE";

// drugi sposób
my_link.setAttribute("href", "https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE");

// zmiana koloru guzika
let danger = document.getElementsByClassName('btn-danger')[0];
console.log(danger);
danger.style.backgroundColor = 'yellow';

// zmiana liczby w badge'u
let badge = document.getElementsByClassName('badge')[0];
badge.innerHTML = 123;

// funkcje
function dodaj(a, b) {
    return a + b;
}

let s = dodaj(5, 7);
console.log('Suma = ', s);