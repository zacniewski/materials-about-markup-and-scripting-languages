# Materials about markup and scripting languages
# Table of contents
1. [Markup and scripting languages](#introduction)
2. [HTML](#paragraph1)
3. [CSS](#paragraph2)
4. [Javascript](#paragraph3)
5. [Markdown and Github](#paragraph4)
5. [XML and JSON](#paragraph5)
6. [React](#paragraph6)

## I. Markup and scripting languages <a id="introduction"></a>
  - What is a [markup language](https://www.semrush.com/blog/markup-language/)?
  - What is a [scripting language](https://www.techtarget.com/whatis/definition/scripting-language)? 
  - [Client-side vs server-side](https://codeinstitute.net/global/blog/client-side-vs-server-side/) development,  
  - [Client-server](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview) overview on MDN,  
  - Useful [links](https://zacniewski.github.io/old/useful-links/). 

## II. HTML <a id="paragraph1"></a>
  - HTML on the [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML),  
  - HTML on the [W3Schools](https://www.w3schools.com/html/default.asp).

## III. CSS <a id="paragraph2"></a>
  - CSS on the [W3Schools](https://www.w3schools.com/css/default.asp),  
  - CSS on the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS).

## IV. Javascript <a id="paragraph3"></a>
  - Javascript on the [W3Schools](https://www.w3schools.com/js/default.asp),  
  - Javascript and [HTML DOM](https://www.w3schools.com/jsref/default.asp),  
  - Kurs [Javascript](https://kursjs.pl/) po polsku, 

## V. Markdown and Github <a id="paragraph4"></a>
  - Początki z [GitHub'em](https://www.flynerd.pl/2018/02/github-dla-zielonych-pierwsze-repozytorium.html),  
  - Github [Pages](https://pages.github.com/),  
  - Książka [GitHub Pro](https://git-scm.com/book/pl/v2) po polsku,  
  - Podstawy [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) na Githubie.  

## VI. XML and JSON <a id="paragraph5"></a>
  - XML on the [W3Schools](https://www.w3schools.com/xml/default.asp),  
  - XML [tutorial](https://www.guru99.com/xml-tutorials.html).
  - Oficjalna strona [JSON](https://www.json.org/json-pl.html),  
  - Working with [JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON) on the MDN.  

## VII. React <a id="paragraph6"></a>
  - Quick [start](https://react.dev/learn) with React,  
  - Kurs [React](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d) na YouTube.  

<hr>

## Lab. nr 1 - "Podstawy WWW"
  - cel: stworzyć prostą stronę WWW, nie wymagającą użycia serwera webowego,
  - strona powinna zawierać linki do trzech podstron, które należy utworzyć: 
    - strona z listem (odpowiednio sformatowany tekst, przypominający list),
    - strona z podręcznika technicznego, np. do informatyki (rysunki, tabele, wzory itp.),
    - strona z formularzem (inputy, pola tekstowe, checkboxy itp.), bez walidacji wartości pól,  
  - na stronie startowej należy umieścić informację o autorze oraz opcjonalnie np. logo, informacje o użytych technologiach itp.,
  - do ww. zadania należy użyć HTML, CSS i JS, bez użycia dodatkowych bibliotek i frameworków,  
  - można wykorzystać informacje z <a href="https://learn.shayhowe.com/html-css/" target="_blank">kursu o HTML i CSS</a>,
  - co do JS, to można wykorzystać materiały z <a href="https://kursjs.pl/" target="_blank">kursu JS</a>,
  - należy utworzyć plik <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">README.md</a>, który będzie zawierał opis zadania (można będzie go użyć w repozytorium w razie potrzeby),  
  - zrzut każdej z czterech utworzonych stron należy umieścić w pliku `README.md` jako obrazek i krótko opisać; jak to zrobić opisane jest w ww. linku o Markdown w sekcji 'Images',  
> Przewidywany czas: 3 x 2 godz. laboratoryjne.

## Lab. nr 2 - "Praca z modelem DOM z wykorzystaniem Javascript"
  - zadanie polega na wykorzystaniu języka JavaScript do wyświetlania, modyfikowania, tworzenia (itp.) elementów strony związanych z HTML i CSS, 
  - należy użyć wybrany (dowolny) framework front-endowy do tego zadania, jeden z najpopularniejszych to <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">Bootstrap </a>,
  - można wykorzystać darmowy szablon, np. <a href="https://startbootstrap.com/templates/bare/" target="_blank">Bare</a>, bazujący na Bootstrapie,  
  - należy zapoznać się z modelem DOM: <a href="https://kursjs.pl/kurs/dom/dom.php" target="_blank">tutaj</a> lub <a href="https://www.w3schools.com/whatis/whatis_htmldom.asp" target="_blank">tutaj</a>,
  - przydatna może być <a href="https://www.w3schools.com/jsref/default.asp" target="_blank">strona </a>o Javascript + DOM,
  - np. korzystając z ww. szablonu Bootstrap, można dodać przycisk z klasą <code>badge-light</code> do strony (np. pod nagłówkiem 'Hello world'):  
```html
      <button type="button" class="btn btn-primary"&gt;
              Notifications &lt;span class="badge badge-light">&lt;/span&gt;
      &lt;/button&gt;
```
  Poniżej, np. przed końcem sekcji <code>body</code> wrzucamy skrypt, który szuka elementu z klasą <code>badge-light</code> i ustawia jego wartość (innerHTML) na liczbę 6:
```javascript
      &lt;script&gt;
          let x = document.getElementsByClassName("badge-light");
          x[0].innerHTML = 6; // x[0] to pierwszy znaleziony element
      </script>
```      
  - w podobny sposób należy wykorzystać inne dostępne metody i właściwości Java Script do modyfikacji elementów strony,
  -  wskazane użycie 20 różnych metod i właściwości Java Script do ww. modyfikacji, np.:  
```
  document.body.style.backgroundColor = "red"; // właściwość 'backgroundColor'
```
lub  
```
      var node = document.createElement("LI");                 // Create a <li> node
      var textnode = document.createTextNode("Water");         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>;
      document.getElementById("myList").appendChild(node);     // Append <li>; to <ul> with id="myList"
  ```
  - w powyższym przykładzie użyte zostały trzy metody, ale całość traktujemy jako jeden przypadek z 20 wymaganych,
> Przewidywany czas: 2 x 2 godz. laboratoryjne.  

## Lab. nr 3 - coming soon ...
## Lab. nr 4 - coming soon ...
## Lab. nr 5 - coming soon ...
## Lab. nr 6 - coming soon ...

