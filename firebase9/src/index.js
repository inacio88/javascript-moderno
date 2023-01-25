// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBITI9g4Be4ERc2yxSbtVS_oYbEW7i-Inc",
    authDomain: "curso-firebase9.firebaseapp.com",
    projectId: "curso-firebase9",
    storageBucket: "curso-firebase9.appspot.com",
    messagingSenderId: "639866499256",
    appId: "1:639866499256:web:f85d02f6ddc4488735c44d",
    measurementId: "G-2JMY0CPRPF"
};

//inicar o app
initializeApp(firebaseConfig)

//iniciar o serviço
const db = getFirestore()

//collection ref
const colRef = collection(db, 'books')

//get collection data
getDocs(colRef)
    .then((snapshot) =>{
        console.log(snapshot.docs)
        let books = []
        snapshot.docs.forEach((doc)=>{
            books.push({...doc.data(), id: doc.id})
        })
        console.log(books)
    })
    .catch(err =>{
        console.log(err.message)
    })