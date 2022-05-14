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
<h1> Título </h1>
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

~~~