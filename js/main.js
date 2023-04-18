



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
  databaseURL: "https://alhabar-a9e27-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, get, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// ============================================================================================================================================
const db = getDatabase();
const auth = getAuth();
let name = document.querySelector("#name");
let roll = document.querySelector("#roll");
let select = document.querySelector("#select");
let table = document.querySelector("table");
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const startOfTheGame = document.querySelector("#start-the-game");
const endOfTheGame = document.querySelector("#end-the-game");
const mainBox = document.querySelector(".main-box");
// question
const question = document.querySelector(".question");
const option1 = document.querySelector("#option-1")
const option2 = document.querySelector("#option-2")
const option3 = document.querySelector("#option-3")
const option4 = document.querySelector("#option-4")
const userId = auth.currentUser;
const dbRef = ref(getDatabase());
let index = null;
let updates = {};
let startGame = undefined;


next.addEventListener("click", () => {
  index++
  updates['questions/' + 'index'] = index;
  if (index >= questions.length - 1) {
    console.log(true);
    next.style.display = "none";;
  } else {
    next.style.display = "inline";
  }
  endOfTheGame.style.display = "inline";
  return update(ref(db), updates);
})

back.addEventListener("click", () => {
  index--
  if (index <= 0) {
    back.style.display = "none";;;
  } else {
    back.style.display = "inline";
  }
  next.style.display = "inline";
  updates['questions/' + 'index'] = index;
  return update(ref(db), updates);
})




onValue(ref(db, 'questions/'), (snapshot) => {
  document.querySelector(".content").style.display = "block"
  document.querySelector(".wait").style.display = "none"
  const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  index = snapshot.val()['index']
  startGame =  snapshot.val()['startGame'];
  if (!startGame) {
    startOfTheGame.style.display = "block"
    mainBox.style.display = "none"
    endOfTheGame.style.display = "none"
    back.style.display = "none";
    next.style.display = "none"
  }else{
    mainBox.style.display = "block"
    startOfTheGame.style.display = "none"
  }
  question.innerHTML = questions[index]['question']
  option1.innerHTML = questions[index]['options'][0]
  option2.innerHTML = questions[index]['options'][1]
  option3.innerHTML = questions[index]['options'][2]
  option4.innerHTML = questions[index]['options'][3]
});

const players = document.querySelector("#players");
onValue(ref(db, 'users/'), (snapshot) => {
  players.innerHTML ="";
  Object.values(snapshot.val()).filter(user=>user.alive).forEach(user =>{
    console.log(` <p class="d-inline-block custom-p m-1"> ${user.name}</p>`);
    players.innerHTML +=` <p class="d-inline-block custom-p m-1"> ${user.name}</p>`
  })

})


startOfTheGame.addEventListener("click", () => {
  updates['questions/' + 'startGame'] = true;
  updates['questions/' + 'index'] = 0;
  return update(ref(db), updates).then(()=>{
    next.style.display = "block";
  });
})












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