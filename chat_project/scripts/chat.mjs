  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, onSnapshot,
  query, where, orderBy, serverTimestamp, Timestamp,
  getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAbZ_8PAMBBqz8LL5ZxFCwy1UGEx-cWkP4",
    authDomain: "projeto-chat-2d27f.firebaseapp.com",
    projectId: "projeto-chat-2d27f",
    storageBucket: "projeto-chat-2d27f.appspot.com",
    messagingSenderId: "386457028486",
    appId: "1:386457028486:web:f774352b920a0456114e07",
    measurementId: "G-8ZKXZPCZK0"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const db = getFirestore()
  const analytics = getAnalytics(app);


export class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = collection(db, 'chats');
        this.unsub;
    }
    async addChat(message){
      //format a chat object
      const now = new Date();
      const chat = {
        message: message,
        username: this.username,
        room: this.room,
        created_at: Timestamp.fromDate(now)
      };
      //save the chat document
      const response = await addDoc(this.chats, chat);
      return response;
    }
    getChats(callback){
      const q = query(this.chats, where('room', '==', this.room), orderBy('created_at'))
      this.unsub = onSnapshot(q, (snapshot) =>{
        snapshot.docChanges().forEach(change => {
          console.log(change.type)
          if (change.type === 'added') {
            callback(change.doc.data())
          }
        });
      })
    }

    updateName(username){
      this.username = username;
      localStorage.setItem('username', username);
    }

    updateRoom(room){
      this.room = room;
      console.log('room updated')
      if (this.unsub) {
        this.unsub();
      }
    }
}

