# Javascript Moderno

- É recomendado colocar o js logo antes do fechamento do body para não causar problemas de carregamento.

#### Variáveis

- let idade = 25;


- var idade = 35;
- 'var' é o modo mais antigo para criar variáveis.

- Variáveis não podem começar com número nem ter espaço; recomenado é camelCase

#### Constantes

- const cpf = 123124211;
- não permite override


Alguns navegadores antigos podem não reconhecer 'const' e 'let'

#### JavaScript DATA TYPES

- Number        1, 2,3 ,4.4
- Strings       'Hello'
- Booblean      true false
- Null          Explicitly set a variable with no value
- Undefined     For variables that have not yet been defined
- Object        Complex data structure
- Symbol        Used with objects

#### Strings

- String concatenation
    - let nome = 'carlos';
    - let sobrenome = 'sila';
    - fullName = nome + ' ' + sobrenome;

- Getting characters
    - nome[2];

- String length
    - nome.length

-  string methods
    - nome.toUpperCase()
    - nome.indexOf('r') vai mandar o index da letra 'r'
    - nome.lastIndexOf('r') encontra o último index de uma letra na string
    - nome.slice(0, 3) vai pegar da posição 0 até 3 da string
    - nome.substr(0, 3) vai pegar 3 caracteres començando do 0
    - nome.replace('c', 'm') vai substituir

#### Números

- NaN not a number
    - 5 / 'oi'
- Concatenar número com string
    - 'oi' + variavel + 'oi'

#### Template string
- const titulo = 'dom casmurro'
- const autor = 'machado'
- const likes = 32

##### concatenation way
- let result = 'o título é ' + titulo

##### template string way
- let result = `O título é ${titulo}`

##### creating html templates
 - let html = `
    <h2>${titulo}</h2>
    <p>${autor}</p>
 `


 #### Array
 - let ninjas = ['shaun', 'ryu', 'chun-li'];

 ##### metodos
 - ninjas.join(',') junta todos os elementos separando por vírgula
 - ninjas.indexOf('ryu') retorna o index desse elemento
 - ninjas.concat(['ken', 'crystal']) concatenar com outro array
 - ninjas.push('frank')
 - ninjas.pop() tira o valor do final



#### Null e Undefined
 - let age;
 - undefined é o valor automático para variáveis sem valor
 - null 


 #### Boobean


 #### Loose vs strict comparison
- == loose comparison
    -   25 == '25' true
- === Strict comparison
    - 25 === '25' false pq compara o tipo também
    - 25 !== '25' true

#### Type conversion

- let score = '100';
- score = Number(score);
- let resut = String(50);
- conosle.log(typeof resut)

##### boolean
- let result = Boolean(0) vai ser false
- let result = Boolean(1) vai ser true
- Números diferente de zero são true
- Strings de tamanho maior que 0 são true e string vazia é false

#### For
~~~javascript

for(let i = 0; i < 4; i++){
    console.log(i);
}

const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
~~~
#### while


~~~javascript

let i = 0;
while(i<5){

    console.log(i);
 
    i++;
}

~~~

##### do while
~~~javascript

 let i = 5;
do{
    console.log(i);
    i++;

}while(i < 5);
~~~
#### if

~~~javascript

let age = 20;

if (age > 3){
    console.log('maior que 3');
}
~~~
#### else if

~~~javascript

const password = 'p@ss';

if(password.length >= 8){
    console.log('longa');
}
else if (password.length >= 6){
    console.log('media');
}
else{
    console.log('curta');
}
~~~
#### Logical operators

- or ||
- and &&
- not !
    - console.log(!false); vai ser true

#### Break and continue
~~~javascript

- const scores = [51, 23, 2, 23, 100, 10];

for (let i = 0; i < scores.length; i++){

    if(scores[i] === 100){
        continue; vai direto para próxima iteração, pula o código abaixo
    }

    console.log('pontos');

    if(scores[i] === 100){
        break; para sair do loop
    }

}
~~~

#### Switch
~~~javascript


- O switch utiliza comparação estrita ===

- const grade = 'D';

switch(grade){

    case 'A':

        console.log('a');

    case 'B':

        console.log('b');

    case 'C':

        console.log('c');

    case 'D':

        console.log('d');

    case 'E':

        console.log('e');

    default:

        console.log('padrão');
    
}
~~~
#### Variable and block scope

- se utilizarmos var (em vez de let ou const) não é respeitado o escopo.
~~~javascript

let age = 40; escopo global

if(age > 30){

    let age = 22; escopo local
    
    //é possível pq está em escopo diferente

}
~~~


### Funções

- function declaration
~~~javascript

function greet(){

    console.log('Olá');

}
~~~

- function expression
~~~javascript

greet();
~~~

- armazenar funções em variáveis
- function expression
~~~javascript

const speak = function(){

    console.log("oi");

};

speak();
~~~


Understanding Hoisting in JavaScript

https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript


- passando valores na função
~~~javascript

const speak(name){

    console.log(`good day ${name}`);

}

speak('mario');

~~~


- valores padrão
~~~javascript


const speak(name = 'luigi', time = 'night'){

    console.log(`good ${time} ${name}`);

}

speak('mario', 'day');
~~~


##### Retuning values
~~~javascript

const calcArea = function(radius){

    let area = 3.14 * radius**2;

    return area;
}

const area = calcArea(4);
~~~

### Arrow function 
~~~javascript


const calcArea = (radius) => {

    return 3.14 * radius**2;

};
~~~
- =====================================


const calcArea = radius => 3.14 * radius**2;


- =====================================

##### Functions vs Methods

- functions
    - function()
- Methods
    - dot notation
    - name.toUpperCase()
    - Funções associadas a um objecto / data type



#### callbacks and foreach

- Passar uma função como argumento -> callback function
~~~javascript
const myFun = (callbackFunc) => {

    let value = 2;

    callbackFunc(value);

}

myFun(function(value){

    console.log(value);

});
~~~

- ======================================================
~~~javascript

let people = ['mario','luigi','riu','shaun','chun-li'];

people.forEach((person, index) => {

    console.log(person);

});

~~~

#### Objetos 

- Object literal notation
~~~javascript
let user = {

    name: 'crystal',

    age: 23,

    email: 'email@mail.com',

    location: 'berlin',

    blogs: [
        {titulo: 'titulo1', likes: 23},
        {titulo: 'titulo2', likes: 33}
    ],

    login: function(){

        console.log('o usuario entrou');

    },

    logout: function(){

        console.log('o usuario saiu');

    },

    logBlogs: function(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.titulo, blog.likes);
        });
    }

};
~~~
- se a função logBlogs fosse uma arrow function, o js não associaria o this como o objeto;
- o 'this' terá o valor de onde ele será chamado (global window object)
~~~javascript

user.login();

console.log(user);

console.log(user.name);

user.age = 34;

console.log(user.age);

console.log(user['name']);

user['name'] = 'john';


const key = 'name';

console.log(user[key]);

~~~


#### Math object

- Math
- Math.PI
- Math.E
- Math.round(numero) arredonda para o inteiro mais próximo
- Math.floor(numero) arredonda para baixo
- Math.ceil(numero) arredonda para cima
- Math.random(); Número aleatório entre 0 e 1


#### Primitive vs reference types

- Primitive são numbers, strings, boobleans, null, undefinded, symbols
- Reference types são todos os tipos de objetos
    - object literals
    - arrays
    - functions
    - dates

- A diferença entre eles é em como são armazenados na memória

- Stack vs heap
    - Primitives são armazenados na stak que é menor e mais rápida
    - Reference são armezandos na heap

- Cópias de um primitivo copiam o valor
- Cópias de um reference copiam o ponteiro



## The document object model

- DOM
    - Created by the browser

##### Query selector


- Vai pegar a primeira tag < p >
~~~javascript

const para = document.querySelector('p');

~~~

- Pegar por classe < p class="error"  > texto < /p >
~~~javascript

const para = document.querySelector('.error');

~~~

- Se tivermos duas tags com mesma classe e quisermos pegar só a div
    - < p class="error"  > texto < /p >
    - < div class="error"  > texto < /div >
~~~javascript

const para = document.querySelector('div.error');

~~~

- Pegar todas as tags < p >
    - Retorna uma Nodelist (difente de um array) 
~~~javascript

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para);
});

console.log(paras[1]);

~~~

- Pegar um elemento pela id
    - < h1 id="page-title" > titulo </ h1 >

~~~javascript

const title = document.getElementById('page-title');
console.log(title);
~~~

- Pegar um elemento pelo nome da classe
    - < p class="error" > titulo </ p >
    - se tiver multiplos elementos da classe, vai pegar todos.
    - Retorna um html colection

~~~javascript

const errors = document.getElementsByClassName('error');
console.log(erros);
console.log(erros[0]);
~~~


- Pegar um elemento pela tag name
    - < p > titulo </ p >
    - Retorna html colections

~~~javascript

const paras = document.getElementByTagName('p');
console.log(paras);
~~~


#### Adding and changing page content

- O HTML
~~~html

<div>
    <p>oi1</p>
    <p>oi2</p>
    <p class="error">oi3</p>
</div>

<div class="content">
    <p>oi4</p>
</div>

~~~

- Pegar o primeiro < p >
- Pegar o texto dentro da tag

~~~javascript
const para = document.querySelector('p');
console.log(para.innerText);

para.innerText = 'oiModificado';
~~~

- Pegar todas as tag < p >

~~~javascript
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += "Texto adicional";
});
~~~

- Mudar o html dentro de um elemento

~~~javascript
const content = document.querySelector('.content');

content.innerHTML += '<h2> Este é um novo elemento </h2>';

const pessoas = ['mario', 'luigi', 'yoshi'];
pessoas.forEach(pessoa =>{
    content.innerHTML += `<p> ${pessoa} </p>`;
});

~~~

### Getting and setting attributes

- HTML
~~~html
<h1> The DOM </h1>

<a href="https://www.google.com"> Link </a>
<p class="error"> oioi </p>

~~~
- Mudando o link do href
~~~javascript
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.bing.com');
link.innerText = 'Link modificado';
~~~

- Mudando a classe do < p >

~~~javascript
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.innerText = 'oioi modificado';

// Se não tiver o atributo, ele será criado.
mssg.setAttribute('style','color: greenbn');
~~~



#### Adding and removing styles

- HTML
~~~html
<h1 style="color: orange;"> Título </h1>
~~~

- Alterar o style e não sobrescrever:

~~~javascript
const title = document.querySelector('h1');
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'blue';
title.style.fontSize = '60px';

//Remover um atributo
title.style.margin = '';
~~~

#### Adding and removing classes

- HTML
~~~html
<h1 class="titulo"> Título </h1>
<p class="error">
    Texto Texto Texto Texto Texto Texto Texto Texto Texto
</p>
~~~

- CSS
~~~css
.error{
    padding: 10px;
    color: crimson;
    border: 1px dotted crimson;
}
.success{
    padding: 10px;
    color: limegreen;
    border: 1px dotted limegreen;
}
~~~

- Javascript

~~~javascript
const content = document.querySelector('p');
//mostra as classe que um elemento
console.log(content.classList);

content.classList.add('error');

content.classList.remove('error');

content.classList.add('success');

const title = document.querySelector(".title");

//Add essa classe se não tiver
title.classList.toggle('teste');
//Remove essa classe se já tiver
title.classList.toggle('teste');

~~~



#### Parents, chidren and siblings

- Tags filhas (no mesmo nível) de um mesmo node são siblings
- parent é uma tag logo acima no DOM. 
<br>
<br>

- HTML
~~~html
    
    <article>
        <h1 class="title">Teste</h1>
        <p>Texto texto error texto</p>
        <p>Texto texto texto</p>
        <p>Texto texto success texto</p>
        <p>Texto texto texto</p>
        <div>Texto texto error texto</div>
    </article>

~~~

- Pegar filhas de um elemento na árvore DOM
~~~javascript
const article = document.querySelector('article');
//isso é uma html colection e não dá para usar forEach
console.log(article.children);

//converter para um array e já percorrer

Array.from(article.children).forEach(child =>{
    child.classList.add('article-element');
});

//Descobrir quem é parent da tag h2
const title = document.querySelector('h2');
console.log(title.parentElement);
//Parent do parent
console.log(title.parentElement.parentElement);

//Sibling element
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
~~~

#### Events and event listeners

- HTML

~~~html
<h1> Todos </h1>

    <ul>
        <li> buy milk</li>
        <li> read a book</li>
        <li> play the guitar</li>
        <li> play the bills</li>
    </ul>

<button> Click </button>
~~~

- CSS
~~~css
li{
    list-style-type: none;
    max-width: 200px;
    padding: 8px;
    margin: 8px auto;
    background: #eee;
    border: 1px dotted #ddd;
}
~~~

~~~javascript
const button = document.querySelector('button');

button.addEventListener('click', () =>{
    console.log('botão foi clicado');
});

const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click', e =>{
        //console.log("item foi clicado");
        console.log(e);
        console.log(e.target);
        console.log(item);

        e.target.style.textDecoration = 'line-through';

    });
});

~~~

- Deletando elementos depois de clicar
~~~javascript
const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click', e =>{
    
        e.target.remove();

    });
});

~~~

- Adicionando elementos depois de clicar
~~~javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
    //ul.innerHTML += '<li> Novo item </li>';
    const li = document.createElement('li');
    li.textContent = 'algo novo para fazer';
    ul.append(li); //Coloca no fim
    ul.prepend(li);//Colcoca no topo
});

const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click', e =>{
    
        e.target.remove();

    });
});

~~~


#### Event bubbling and delegation

1. Event bubbling
    - Se um elemento tem um evento e esse evento é disparado, o elemento pai na árvore DOM também será disparado.
    - Para isso não acontecer precisa usar: e.stopPropagation()

- HTML

~~~html
<h1> Todos </h1>

    <ul>
        <li> buy milk</li>
        <li> read a book</li>
        <li> play the guitar</li>
        <li> play the bills</li>
    </ul>

<button> Click </button>
~~~

- CSS
~~~css
li{
    list-style-type: none;
    max-width: 200px;
    padding: 8px;
    margin: 8px auto;
    background: #eee;
    border: 1px dotted #ddd;
}
~~~
~~~javascript
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'algo novo para fazer';
    ul.prepend(li);//Colcoca no topo
});

const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click', e =>{
        console.log('event in LI');
        e.stopPropagation(); // Parar o bubbling
        e.target.remove();

    });
});

ul.addEventListener('click', e => {
    console.log('Event in UL evento pai do li');
});

~~~

2. Event delegation
    - attach eventListeners to various elements


~~~javascript
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'algo novo para fazer';
    ul.prepend(li);//Colcoca no topo
});


ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI'){
        e.target.remove();
    }
});

~~~

#### Mais eventos

- HTML
~~~HTML
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>JavaScript</title>
  <style>
    .box{
      width: 200px;
      height: 200px;
      margin: 10px 0;
      background: #eee;
      text-align: center;
      padding: 20px;
    }
  </style>
</head>
<body>

  <p class="copy-me">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  <div class="box">move the mouse around this box</div>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

  <script src="sandbox.js"></script>
</body>
</html>
~~~

- JavaScript

~~~javascript
const copy = document.querySelector(.'copy-me');
copy.addEventListener('copy', () => {
    console.log('não pode copiar esse conteúdo');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});


document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});

~~~


### Making a popup
- HTML
~~~html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="styles.css">
  <title>JavaScript</title>
  <style>
    
  </style>
</head>
<body>

  <button>Click me</button>

  <div class="popup-wrapper">

    <div class="popup">
      <div class="popup-close">x</div>
      <div class="popup-content">
        <h2>NINJA SALE!!</h2>
        <p>50% off all ninja clothing. don't miss out!</p>
        <a href="#">view clothing</a>
      </div>
    </div>
    
  </div>
  
  <script src="sandbox.js"></script>
</body>
</html>
~~~

- CSS

~~~css
button{
    display: block;
    margin: 20px auto;
    background: crimson;
    color: white;
    border: 0;
    padding: 6px 10px;
}

.popup-wrapper{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
}

.popup{
    font-family: arial;
    text-align: center;
    width: 100%;
    max-width: 300px;
    margin: 10% auto;
    padding: 20px;
    background: white;
    position: relative;
}

.popup a{
    background: crimson;
    color: white;
    text-decoration: none;
    padding: 6px 10px;
}

.popup-close{
    position: absolute;
    top: 5px;
    right: 8px;
    cursor: pointer;
}

~~~
- JavaScript
~~~javascript
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () =>{
    popup.style.display = 'block';
});


close.addEventListener('click', () =>{
    popup.style.display = 'none';
});

popup.addEventListener('click', () =>{
    popup.style.display = 'none';
});

~~~


### Forms and Forms Events

- HTML

~~~html
<body>
    <form class="signup-form">
        <input type="text" id="username" placeholder="username">
    
        <input type="submit" value="submit">
        

    </form>

</body>
~~~

- CSS
~~~css
body{
    backround: #eee;
}

form{
    max-width: 200px;
    margin: 40px auto;
    background: white;
    padding: 10px;
}
input{
    display: block;
    margin: 10px auto;
    padding: 4px;
}
~~~
- JS
~~~javascript
const form = document.querySelector('.signup-form');
//const username = documet.querySelector('#username');//id

form.addEventListener('submit', e => {
    e.preventDefault();//Não deixa o comportamento normal de recarregar a pagina quando clica no botão
    //console.log(username.value);
    console.log(form.username.value);

    const name = 'shaun';
    const pattern = /^[a-z]{6,}$/;

    let result = pattern.test(username);
    console.log(result);

    if (result){
        console.log('o teste regex passou');
    }

    //modo alternativo e retorna integer
    // 0 se f
    let result = username.search(pattern);
    console.log(result);
});
~~~

- Regex
https://regex101.com/

#### Basic form validation
- HTML
~~~html
<body>
    <form class="signup-form">
        <input type="text" id="username" placeholder="username">
    
        <input type="submit" value="submit">

        <div class="feedback"></div>
        

    </form>

</body>
~~~

- JS
~~~javascript
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', e =>{
    e.preventDefault();
    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'Esse nome é válido';
    }
    else{
        //feedback help info
        feedback.textContent = 'Esse nome precisa de apenas letras e ser entre 6 e 12 caracteres';
    }
});

~~~

#### keyboard events
- CSS
~~~css
body{
    backround: #eee;
}

form{
    max-width: 200px;
    margin: 40px auto;
    background: white;
    padding: 10px;
}
input{
    display: block;
    margin: 10px auto;
    padding: 4px;
}
.success{
    border: 2px solid limegreen;
}
.error{
    border: 2px solid crimson;
}
~~~
- HTML
~~~html
<body>
    <form class="signup-form">
        <input type="text" id="username" placeholder="username">
    
        <input type="submit" value="submit">

        <div class="feedback"></div>
        

    </form>

</body>
~~~

- JS
~~~javascript
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', e =>{
    e.preventDefault();
    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'Esse nome é válido';
    }
    else{
        //feedback help info
        feedback.textContent = 'Esse nome precisa de apenas letras e ser entre 6 e 12 caracteres';
    }
});

//live feedback
form.username.addEventListener('keyup', e =>{
    console.log(e.target.value, form.username.value);
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    
    if (usernamePattern.test(e.target.value)){
        console.log('passou');
        form.username.setAttribute('class', 'success');
    }
    else{
        console.log('não passou no teste');
        form.username.setAttribute('class', 'error');
    }

});

~~~


### The window object


- É o objeto global
- o document está dentro do window

~~~javascript
//Vai disparar uma vez
window.setTimeout(() =>{
 aler('tempo esgotado');
}, 3000); //tempo em milissegundos

//Vai disparar várias vezes
setInterval(() =>{
    console.log('oi');
}, 1000);

//scroll to the top
scrollTo(0,0);
~~~



### Array methods

- Se retornar true, mantém
- Se false, remove
- Esse método é nondestructive - não muda o original
~~~javascript
const scores = [12, 43, 64, 32, 55, 33, 1];

const filteredScores = scores.filter((score) =>{
    return score > 20;
    //vai ficar só os valores maiores que 20
});

~~~
- Deixar só os usuários premium
~~~javascript
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chin-li', premium: true}
];

const premiumUsers = users.filter(user => user.premium);

~~~

#### Map method
- nondestructive method
- itera num array, e retorna um valor atualizado para valor do array, e insere esse valor atualizado no novo array



~~~javascript
const prices = [12, 41, 54, 12, 10, 20, 90];

const salePrices = prices.map((price) => {
    return price/2;
})

console.log(salePrices)
~~~
O mesmo código em uma linha: 

~~~javascript
const prices = [12, 41, 54, 12, 10, 20, 90];

const salePrices = prices.map(price => price/2);

console.log(salePrices)
~~~
Mais exemplo
- Se for acima de 30, muda apenas o preço pela metade

~~~javascript
const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];

const slaProducts = products.map((product) => {
    if (product.price > 30){
        return {name: product.name, price: product.price/2};
    }
    else {
        return product;
    }
})

~~~

#### Reduce method
- Retorna qualquer valor desejado baseado no valor do array

~~~javascript
const scores = [10, 20, 30, 40 , 50 , 60 ,70, 80];
const result = socres.reduce((acumulador, atual)=>{
        if (atual > 50){
            acumulador++;
        }
        return acumulador;
}, 0); //zero é o valor inicial do acumulador

console.log(acumulador);//Quantidade de números maiores que 50
~~~

Mais exemplo
- Total de pontos do mario
~~~javascript
const scores = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
];


const marioTotal = scores.reduce((acumulador, atual)=>{
    if (atual.player === 'mario'){
        acumulador += atual.score
    }
    return acumulador;
}, 0);

console.log(marioTotal);

~~~

#### Find method

- Retorna o primeiro valor do vetor que passa num teste dentro da callback function
- Ele não necessariamente percorre o vetor inteiro, no primeiro true, o método para
~~~javascript
const scores = [10, 20, 30, 40 , 50 , 60 ,70, 80];

const firstHighScore = scores.find((score)=>{
    return score > 70;
})
~~~

Em uma linha:

~~~javascript
const scores = [10, 20, 30, 40 , 50 , 60 ,70, 80];

const firstHighScore = scores.find(score => score > 70);
~~~


#### Sort Method
- Altera o array original
- destructive

~~~javascript

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// Organiza alfabeticamente
names.sort();

//Reverter a ordem que está no vetor
names.reverse();

const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((a,b) => b - a);


const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];


//Organizar os objevtos baseado nos pontos
// Checa os dois valores consecutivos no array
// Se o a deve vir primeiro, retorna um valor negativo
// Se o b deve vir primeiro, retorna um valor positivo
// zero se não tiver nenhuma ação
players.sort((a, b) =>{ 
    if (a.score > b.score){
        return -1;
    }
    else if (b.socre > a.score){
        return 1;
    }
    else {
        return 0;
    }
})


//Outra forma de fazer
//O resultado da subtração vai determinar
players.sort((a, b) => b.score - a.score)

~~~


#### Chaining array methods


~~~javascript

const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

//Duas coisas vão ser feitas:
//1° Filtrar produtos que não são maiores que 20
//2° Pegar esse array filtrado e mapear em um novo array

const promos = products
    .filter(product => product > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos)


~~~

### Date and Times


~~~javascript
const now = new Date();

console.log(now);

console.log('getFullyear', now.getFullYear());
console.log('getMonth', now.getMonth());//comeca do 0
console.log('getDate', now.getDate());
console.log('getDay', now.getDay()); //domingo é zero
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());


//Timestamp

console.log('timestamp', now.getTime())


//Date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaletring());

~~~

#### Timestamps

- Criar uma data que não seja agora (now)

~~~javascript
const before = new Date('February 1 2019 7:30:59')
const now = new Date()
const diff = now.getTime() - before.getTime();
console.log(diff)


const mins = Math.round(diff / 1000 / 60); // Minutos
console.log(mins);
const hours = Math.round(mins / 60)); // Horas
const days = Math.round(hours / 24); // Dias

//Outra forma

const timestamp = 16759338474990;
console.log(new Date(timestamp));

~~~

- Fazendo um relógio
- HTML

~~~html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dates</title>
  <style>
    body{
      background: #333;
    }
    .clock{
      font-size: 4em;
      text-align: center;
      margin: 200px auto;
      color: yellow;
      font-family: arial;
    }
    .clock span{
      padding: 20px;
      background: #444;
    }
  </style>
</head>
<body>

  <div class="clock"></div>

  <script src="sandbox.js"></script>
</body>
</html>
~~~
- O js
~~~javascript
const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span> ${h} </span>
        <span> ${m} </span>
        <span> ${s} </span>
    `
    clock.innerHTML = html;
}

setInterval(tick, 1000);//Chamar a função a cada segundo

~~~


#### date-fns
- https://date-fns.org/
- ifAfter
- isBefore
- isDate
- isEqual
- Várias funções para lidar com datas

~~~html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dates</title>
</head>
<body>

  <div class="clock"></div>

  <script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>
  <script src="sandbox.js"></script>
</body>
</html>
~~~



~~~javascript
const now = new Date();
console.log(dateFns.isToday(now)); //Retorna boolean
// Formatando opções de data
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MM'));
// Ano
// y	44, 1, 1900, 2017	
// yo	44th, 1st, 0th, 17th	
// yy	44, 01, 00, 17	5
// yyy	044, 001, 1900, 2017	
// yyyy	0044, 0001, 1900, 2017
// Mês
// M	1, 2, ..., 12	
// Mo	1st, 2nd, ..., 12th	
// MM	01, 02, ..., 12	
// MMM	Jan, Feb, ..., Dec	
// MMMM	January, February, ..., December
// Dia
// d	1, 2, ..., 31	
// do	1st, 2nd, ..., 31st
// dd	01, 02, ..., 31
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));

// Comparando datas
const before = new Date('February 1 2019 12:00:00')
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

~~~


### Funções async
- Governs how we perform tasks which take some time to complete (e.g. getting data from a database)
- JS can run ONE statement at a time, é síncrono


![alt text](https://github.com/inacio88/javascript-moderno/blob/main/img/a12.png?raw=true)


#### HTTP request
- Make http requests to get data from another server
- we make these requests to api endpoints
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
- The Document.readyState property describes the loading state of the document. 

~~~javascript
const request = new XMLHttpRequest();//request object

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
    if (request.readyState === 4){
        console.log(request.responseText);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
~~~
- Status code
- O estado 4 pode ser atingidor mesmo se houver algum erro
~~~javascript
const request = new XMLHttpRequest();//request object

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    }
    else if (request.readyState === 4){
        console.log('could not fetch the data')
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
~~~

#### Async code and callbacks
~~~javascript
const getTodos = (callback) => {
    const request = new XMLHttpRequest();//request object
    request.addEventListener('readystatechange', () => {
        console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
            console.log(request.responseText);
        }
        else if (request.readyState === 4){
            callback('could not fetch data', undefined);
            console.log('could not fetch the data')
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();    
}

console.log(1);
console.log(2);

getTotos((err, date) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log(3);
console.log(4);

~~~

#### JSON DATA
- data format para api fazer request
~~~javascript
const getTodos = (callback) => {
    const request = new XMLHttpRequest();//request object
    request.addEventListener('readystatechange', () => {
        console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
            console.log(request.responseText);
        }
        else if (request.readyState === 4){
            callback('could not fetch data', undefined);
            console.log('could not fetch the data')
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();    
}

console.log(1);
console.log(2);

getTotos((err, date) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log(3);
console.log(4);
~~~

- JSON
~~~json
[
    {"text": "play mariokart", "author": "shaun"},
    {"text": "by some bread", "author": "Mario"},
    {"text": "do the plumming", "author": "Luigi"}
]
~~~
- Se estiver no mesmo diretório
~~~javascript
request.open('GET', 'arquivo.json');
request.send();
~~~

#### Callback hell

~~~javascript
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

getTodos('todos/luigi.json', (err, data)=>{
    console.log(data);
    getTodos(('todos/mario.json', (err, data) =>{
        console.log(data);
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data);
        });
    });
});
~~~


#### Promise

~~~javascript
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

// Promise example
// pode ter dois resultados:
//1- resolved and we get the data we wanted
//2- rejected we get an error

const getSomething = () => {
    return new Promise((resolve, reject) => {

        //fetch data
        resolve('some data');
        reject('some error');
    });
}

getSomething().then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
});

//ou 
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


~~~

~~~javascript
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('could not fetch data');
            }
        });

        request.open('GET', resource);
        request.send();
    });
    
};
getTodos('todos/shaun.json').then((data) => {
    console.log('promise resolved', data);
}).catch((err) =>{
    console.log('promise reject', err);
});
~~~

#### Chaining promises


~~~javascript
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('could not fetch data');
            }
        });

        request.open('GET', resource);
        request.send();
    });
    
};
getTodos('todos/shaun.json').then((data) => {
    console.log('promise 1 resolved', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved')
}).catch((err) =>{
    console.log('promise reject', err);
});
~~~

#### fetch api
- implementa promise api por baixo dos panos
- a promise só é rejeitada se tiver um erro de conexão
    - mas o estado será de 404

~~~javascript
fetch('todos/luigi.json').then((response) +> {
    console.log('resolved', response);
    return response.json();
}).then((data) =>{
    console.log(data);
}).catch(() =>{
    console.log('resolved', err);
});
~~~
### async and await
- sempre retorna uma promise
~~~javascript
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    //await keyword stops js until the promise has resolved
    // non-blocking
    const data = await response.json();
    return data;

};
const test = getTodos();
console.log(test); //promise

getTodos()
.then(data => console.log('resolved', data))
.catch();
~~~
#### throwing custom errors
~~~javascript
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;

};
getTodos()
.then(data => console.log('resolved', data))
.catch(err => console.log('rejected', err.message));
~~~

### Local Storage
- está no window.localStorage

~~~javascript
//armazernar
localStorage.setItem('name','mario');
localStorage.setItem('age', 50);
//tudo aqui vai ser string

//get data from local storage
let name = localStorage.getItem('name');
console.log(name);

//updating data
localStorage.setItem('name', 'luigi');

//delete data
localStorage.removeItem('name');
localStorage.clear();//limpa tudo
~~~
#### stringifying & parsing data

~~~javascript
const todos = [
  {text: 'play mariokart', author: 'shaun'},
  {text: 'buy some milk', author: 'mario'},
  {text: 'buy some bread', author: 'luigi'}
];
//console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

//retrive
const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));
~~~
### Object oriented javascript
~~~javascript
//array constructor
const ages = new Array(20, 32, 14);
~~~
- quando usamos um método num tipo primitivo, numero ou string, javascript pega esse valor primitivo and wraps it temporariamente em um wrapper object. E esse objeto vai ter os metodos chamados.

~~~javascript
//recap object literal
const userOne = {
    username: 'carlos',
    email: 'ca@gmail.com',
    login(){
        console.log('logado com sucesso');
    },
    logout(){
        console.log('encerrado');
    }
};
~~~
#### Classes
##### constructor functions
~~~javascript
class User{
    constructor(username, email){
        //set up propeties
        this.username = username;
        this.email = email;
    },
    login(){
        console.log(`${this.username} just logged in`);
    }
    logout(){
        console.log(`${this.username} just logout in`);
    }
}

const userOne = new User('mario','mario@mail.com');
userOne.login();
userOne.logout();
//the new keyword
//1- it creates a new empty object {}
//2- it binds the value of 'this' to new new empty object
//3- it calls the constructor function to build the object
~~~
#### method chaining
- quando um método não retorna explicitamente um valor, é retornado undefined.
- para poder fazer encadeamento, é preciso retorna a instância do objeto.
~~~javascript
class User{
    constructor(username, email){
        //set up propeties
        this.username = username;
        this.email = email;
        this.score = 0;
    },
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logout in`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('mario','mario@mail.com');
userOne.login().incScore().incScore().logout();
~~~
### Class Inheritance

~~~javascript
class User{
    constructor(username, email){
        //set up propeties
        this.username = username;
        this.email = email;
        this.score = 0;
    },
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logout in`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}
class Admin extends User{
    deleteUser(){
        users = users.filter((u) =>{
            return u.username !== user.username
        })
    }
}
const userOne = new User('mario','mario@mail.com');
const UserTwo = new User('luigi','luigi@mail.com');
const userThree = new User('wario','wario@mail.com');

let users = [userOne, UserTwo, userThree];
userThree.deleteuser(useerTwo)
~~~
#### super()

~~~javascript
class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(){
        users = users.filter((u) =>{
            return u.username !== user.username
        })
    }
}

const userThree = new User('wario','wario@mail.com','faixa preta');

~~~
#### constructos under the hood
- a sintaxe class NomeClasse(){} é sintaxe sugar, o js não tem classes de verdade. O que ele tem é um modelo de protótipo
~~~javascript
// constructor functions
function User(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in`)
    }
}

const userThree = new User('wario','wario@mail.com')

~~~
### prototype model
- Every object in javascript has a prototype
- Prototypes contain all the methods for that object type
~~~javascript
function User(username, email){
    this.username = username;
    this.email = email;
}
User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
}

const userThree = new User('wario','wario@mail.com')
~~~
###  prototypal inheritance

~~~javascript
function User(username, email){
    this.username = username;
    this.email = email;
}
User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
}

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    //delete user

}

const userThree = new Admin('wario','wario@mail.com', 'faixa preta')
~~~

####  built-in objects
~~~javascript

~~~
### NoSqls Databases
- Firebase
- SQL databases
    - Tables
    - Rows
    - Columns
- NoSQL databases
    - Collection
    - Documents
    - Properties


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~


~~~javascript

~~~