import { Chatroom } from "./chat.mjs";
import {ChatUI} from "./ui.mjs";

//DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add new chat
newChatForm.addEventListener(('submit'), e =>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() =>{
        newChatForm.reset();
    })
    .catch((err)=>{
        console.log(err);
    })
})

//update username
newNameForm.addEventListener(('submit'), e =>{
    e.preventDefault();
    //update name via chatroom
    const newname = newNameForm.name.value.trim();
    chatroom.updateName(newname);
    //reset the form
    newNameForm.reset();
    //show then hide update message
    updateMssg.innerText = `Seu nome foi atualizado para ${newname}`
    setTimeout(() => {
        updateMssg.innerText = '';
    }, 3000);
})

//update the chat room
rooms.addEventListener(('click'), e =>{
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => {chatUI.render(chat)})
    }
})

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';


//Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

//Get chats and render
chatroom.getChats((data) =>{
    chatUI.render(data);
})
