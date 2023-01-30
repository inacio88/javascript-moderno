console.log('dom file');
const body = document.querySelector('body');

const sytleBody = () =>{
    body.style.backgroundColor = 'peachpuff';
}

const addTitle = (text) =>{
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
}

const contact = "mario@gmaill.com"


export {sytleBody, addTitle, contact}