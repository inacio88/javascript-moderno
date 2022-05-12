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

for(let i = 0; i < 4; i++){
    console.log(i);
}

- const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

#### while
- let i = 0;
while(i<5){

    console.log(i);
 
    i++;
}

##### do while

- let i = 5;
do{
    console.log(i);
    i++;

}while(i < 5);

#### if
- let age = 20;

if (age > 3){
    console.log('maior que 3');
}

#### else if

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

#### Logical operators

- or ||
- and &&
- not !
    - console.log(!false); vai ser true

#### Break and continue

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


#### Switch


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

#### Variable and block scope

- se utilizarmos var (em vez de let ou const) não é respeitado o escopo.

let age = 40; escopo global

if(age > 30){

    let age = 22; escopo local
    
    //é possível pq está em escopo diferente

}


### Funções

- function declaration

function greet(){

    console.log('Olá');

}

- function expression

greet();

- armazenar funções em variáveis
- function expression

const speak = function(){

    console.log("oi");

};

speak();

Understanding Hoisting in JavaScript

https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript


- passando valores na função

const speak(name){

    console.log(`good day ${name}`);

}

speak('mario');



- valores padrão

const speak(name = 'luigi', time = 'night'){

    console.log(`good ${time} ${name}`);

}

speak('mario', 'day');



##### Retuning values

const calcArea = function(radius){

    let area = 3.14 * radius**2;

    return area;
}

const area = calcArea(4);


### Arrow function 


const calcArea = (radius) => {

    return 3.14 * radius**2;

};

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

const myFun = (callbackFunc) => {

    let value = 2;

    callbackFunc(value);

}

myFun(function(value){

    console.log(value);

});

- ======================================================

let people = ['mario','luigi','riu','shaun','chun-li'];

people.forEach((person, index) => {

    console.log(person);

});