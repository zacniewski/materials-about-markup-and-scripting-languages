console.log("Nasz pierwszy skrypt!");
//let a = prompt("treść komunikatu", "domyślna wartość");

let a = 10;
console.log(a === 10) //true
console.log(a === "10") //false

// różne metody dostępu do elementów
const login = document.getElementById('login');
console.log("login = ", login);

// należy pamiętać o różnicy w użyciu 'let' i 'const' !
/*  Metoda querySelector także przyjmuje jeden parametr, ale jest to nie ciąg znakowy
przedstawiający identyfikator elementu (jak w metodzie getElementById), lecz poprawny
selektor CSS. */
const login2 = document.querySelector('#login');
console.log("login2 = ", login2);

const login3 = document.querySelector('.user-login-css-class');
console.log("login3 = ", login3);

const login4 = document.querySelector('[data-user-login]');
console.log("login4 = ", login4);

const login5 = document.querySelector('[data-user-info="login"]');
console.log("login5 = ", login5);

// Pseudo-klasy w CSS
//const drugi_link = document.querySelector("p:nth-child(2)");
//drugi_link.innerHTML = "<b>To ja, drugi link :)</b>";

// Pseudo-elementy w CSS
// przykłady z ::selection i ::after

/* Atrybut data-
Ciekawym atrybutem jest data-name. W tym przypadku name może być dowolną nazwą,
można więc stosować różne warianty tego atrybutu, np.:
data-address="street"
data-address="city"
data-buy-button
Znacznik ten nie musi posiadać wartości (jak w data-buy-button). Jest on przydatny, gdy
np. chcemy wyróżnić wiele elementów przy użyciu tego samego identyfikatora, tylko zamiast
atrybutu id stosujemy właśnie data-. Z poziomu JavaScriptu również mamy bardzo prosty
dostęp do takich elementów.
*/

// querySelectorAll
//const items = document.querySelectorAll('#all-items li');
//console.log("items = ", items)

//const items2 = document.querySelectorAll('#all-items [data-item]');
//console.log("items2 = ", items2)

//const items3 = document.querySelectorAll('li');
//console.log("items3 = ", items3)

//const items4 = document.querySelectorAll('[data-item]')
//console.log("items4 = ", items4)

/*
Gdy metoda querySelectorAll znajdzie co najmniej jeden element, zwróci obiekt będący
kolekcją referencji. Jest to tzw. kolekcja NodeList. Istotne jest, aby zapamiętać, że kolekcja ta nie
jest tablicą JavaScript, czyli nie jest obiektem z prototypem Array.prototype.
Tym samym nie mamy dostępu do wielu metod charakterystycznych dla tablic, jak Array.prototype.
filter czy Array.prototype.map
 */

// Wszystkie metody getElements... mogą zostać zastąpione metodą querySelectorAll
//const selectedAgreements = document.querySelectorAll('#user-agreements [checked]');
//console.log("Długość selectedAgreements =", selectedAgreements.length);

//const agreementsList = document.querySelector('#user-agreements');
//const allAgreements = agreementsList.querySelectorAll('[data-agreement]');
//const selectedAgreements2 = agreementsList.querySelectorAll('[checked]');
//console.log(`Wszystkie zgody: ${allAgreements.length}`); // "Wszystkie zgody: 4"
//console.log(`Zaznaczone: ${selectedAgreements2.length}`);

// Tworzenie elementów
//const container = document.getElementById('container');
//const text = document.createElement('h4');
//text.textContent = 'jakiś napis w divie';
//container.appendChild(text);