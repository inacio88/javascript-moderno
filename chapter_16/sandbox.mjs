import {db, app} from "./firebase.mjs"
import { collection, addDoc,doc, setDoc, where,getDoc,query, deleteDoc, getDocs, Timestamp, onSnapshot } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

// console.log(db)
// console.log(app)
const list = document.querySelector('ul');
const receitas = collection(db, "recipes");
const form = document.querySelector('form');
const button = document.querySelector('button');
const addRecipe = (recipe, id) => {
    let html = `
    <li data-id='${id}'>
        <div> ${recipe.title} </div>
        <div> ${recipe.created_at.toDate()} </div>
        <button class='btn btn-danger btn-sm my-2'>delete</button>
    </li>
    `
    list.innerHTML += html;
    // console.log(html);
}

const deleteRecipe = (id) =>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    })
}

const querySnapshot = await getDocs(receitas);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
// //   console.log(doc.id, " => ", doc.data());
//     addRecipe(doc.data(), doc.id)

// });

const q = query(collection(db, "recipes"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change)=>{
        console.log(change)
        const doc = change.doc
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id)
        }
        else if(change.type === 'removed'){
            deleteRecipe(doc.id)
        }

    })

    querySnapshot.forEach((doc) => {
        console.log(doc.data().title)
    });
});

button.addEventListener('click', () => {
    unsubscribe();
})
// db.collection('recipes').get().then(snapshot => {
//     // console.log(snapshot);
//     snapshot.docs.forEach(doc => {
//       // console.log(doc.data());
//       addRecipe(doc.data());
//     });
//   }).catch(err => {
//     console.log(err);
//   });

form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: Timestamp.fromDate(now),
        author: 'Sem por enquanto'
    };

    const docRef =  addDoc(collection(db, "recipes"), recipe);
    
})

//delete

list.addEventListener('click', e =>{
    console.log(e)
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        // console.log(id);
        deleteDoc(doc(db, "recipes", id));
    }
});