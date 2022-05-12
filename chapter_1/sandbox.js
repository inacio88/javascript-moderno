const ul = document.querySelector('.people');

const people = ['mario','luigi','riu','shaun','chun-li'];

let html = ``;

people.forEach(person =>  {
    //create html template
    html += `<li style="color: purple"> ${person} </li>` ;
})

ul.innerHTML = html;