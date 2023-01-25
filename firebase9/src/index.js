// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc, onSnapshot,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc,

} from 'firebase/firestore'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'

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
const auth = getAuth()

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

const unsubCol = onSnapshot(q, (snapshot) =>{
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
const unsubDoc = onSnapshot(docRef, (doc) =>{
    // console.log(doc.data(), doc.id)
})


//signing up
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) =>{
        // console.log('user created', cred.user)
        signupForm.reset()
    })
    .catch((err) =>{
        // console.log(err.message);
    })
    
});


//logging in and out

const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', ()=>{
    signOut(auth)
    .then(()=>{
        // console.log('the user signed out')
    })
    .catch((err) =>{
        // console.log(err.message)
    })
})



const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((cred) =>{
        // console.log('useer logged in', cred.user)
    })
    .catch((err)=>{
        // console.log(err.message)
    })
})

//subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) =>{
    console.log('user status changed:', user)
})

//unsubscribing from changes (auth e db)
const unsubButton = document.querySelector('.unsub')
unsubButton.addEventListener('click', () =>{
    console.log('unsubscribing')
    unsubCol()
    unsubDoc()
    unsubAuth()
})