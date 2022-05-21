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
