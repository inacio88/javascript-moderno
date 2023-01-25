// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc, onSnapshot,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc,

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


//queris
const q = query(colRef, orderBy('created_at'))

//get collection data
// getDocs(colRef)
//     .then((snapshot) =>{
//         console.log(snapshot.docs)
//         let books = []
//         snapshot.docs.forEach((doc)=>{
//             books.push({...doc.data(), id: doc.id})
//         })
//         console.log(books)
//     })
//     .catch(err =>{
//         console.log(err.message)
//     })

//adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        created_at: serverTimestamp(),
    })
    .then(() =>{
        addBookForm.reset();
    })
});

//deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)
    deleteDoc(docRef)
    .then(() =>{
        deleteBookForm.reset()
    })
});


//update documents
const updateBookForm = document.querySelector('.update');
updateBookForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const docRef = doc(db, 'books', updateBookForm.id.value)
    updateDoc(docRef, {
        title: 'atualizado'
    })
    
    .then(()=>{
        updateBookForm.reset()
    })
    
});


//realtime collection data

// onSnapshot(colRef, (snapshot) =>{
//     let books = []
//     snapshot.docs.forEach((doc)=>{
//         books.push({...doc.data(), id: doc.id})
//     })
//     console.log(books)
// });

//realtime collection data com querie

onSnapshot(q, (snapshot) =>{
    let books = []
    snapshot.docs.forEach((doc)=>{
        books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
});


//get single document
const docRef = doc(db, 'books',"Gl2kmOarAc6pyzuf7CPU");
getDoc(docRef)
.then((doc)=>{
    // console.log(doc.data(), doc.id)
})

//snapshot de um doc só
onSnapshot(docRef, (doc) =>{
    console.log(doc.data(), doc.id)
})

