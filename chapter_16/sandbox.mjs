import {db, app} from "./firebase.mjs"
import { collection, addDoc, setDoc, getDoc, getDocs, Timestamp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

console.log(db)
console.log(app)
const list = document.querySelector('ul');
const receitas = collection(db, "recipes");
const form = document.querySelector('form');
const addRecipe = (recipe) => {
    let html = `
    <li>
        <div> ${recipe.title} </div>
        <div> ${recipe.created_at.toDate()} </div>

    </li>
    `
    list.innerHTML += html;
    console.log(html);
}

const querySnapshot = await getDocs(receitas);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
    addRecipe(doc.data())

});

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