        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyDVfKD7lzrI2FyGjFEn5rtoVBtf1PWEJyk",
          authDomain: "alhabar-a9e27.firebaseapp.com",
          projectId: "alhabar-a9e27",
          storageBucket: "alhabar-a9e27.appspot.com",
          messagingSenderId: "856199108456",
          appId: "1:856199108456:web:4708e91290210f02c328dd",
          databaseURL:"https://alhabar-a9e27-default-rtdb.europe-west1.firebasedatabase.app"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
import {getDatabase,ref,get,set,child,update,remove,onValue} from  "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth } from   "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"; 
const db = getDatabase();
let name = document.querySelector("#name"); 
let roll = document.querySelector("#roll"); 
let select = document.querySelector("#select"); 
const auth = getAuth();
let table = document.querySelector("table"); 

const userId = auth.currentUser;
console.log(userId);
// document.querySelector("button").addEventListener("click",()=>{
//     console.log(name.value , roll.value,select.value);
//     console.log(db);
//     set(ref(db, 'users/' + roll.value), {
//         name:name.value , 
//         gander:select.value 
//     }).then(()=>{
//         console.log("addedt ");
//     }).catch((error)=>{
//         console.log(error);
//     })
//     console.log("after");
// })

 let index = 1;
const dbRef = ref(getDatabase());
// get(child(dbRef, `users/`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
// let index = 0;
let updates = {};
document.querySelector("#next").addEventListener("click",()=>{
updates['questions/' + 'index'] = index+1 ;
console.log("?");
return update(ref(db), updates);
})
document.querySelector("#back").addEventListener("click",()=>{
    updates['questions/' + 'index'] = index-1 ;
    console.log("?");
    return update(ref(db), updates);
    })

const question = document.querySelector(".question");
const option1 = document.querySelector("#option-1")
const option2 = document.querySelector("#option-2")
const option3 = document.querySelector("#option-3")
const option4 = document.querySelector("#option-4")
onValue(ref(db, 'questions/'), (snapshot) => {
    const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    console.log(snapshot.val());
     index = snapshot.val()['index']
    console.log(snapshot.val()['index']);
    console.log( Object.values(snapshot.val())[index]);
    question.innerHTML = Object.values(snapshot.val())[index]['question']
    option1.innerHTML = Object.values(snapshot.val())[index]['option1']
    option2.innerHTML = Object.values(snapshot.val())[index]['option2']
    option3.innerHTML = Object.values(snapshot.val())[index]['option3']
    option4.innerHTML = Object.values(snapshot.val())[index]['option4']
  }); 


