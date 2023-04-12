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
const db = getDatabase();
const auth = getAuth();
let index = 1;
const form = document.querySelector("#form");
const startOfTheGame = document.querySelector("#start-the-game");
const endOfTheGame = document.querySelector("#end-the-game");
const btn =  document.querySelector("#continue");
const name = document.querySelector("#name");


// ========================================================================================================================
!localStorage.getItem("user") ? localStorage.setItem("user",uuid.v4()) :localStorage.getItem("user");
const idOfUser = localStorage.getItem("user");
// connect 

console.log(uuid.v4());
//   connecting users
// console.log(dataSnapshot);
// form start

startOfTheGame.style.display = "none";
endOfTheGame.style.display = "none";


btn.addEventListener("click", async() => {
    let value = name.value;
    if(value.length > 3){
         set(ref(db, 'users/' +idOfUser), {
        name:name.value ,
        alive:true
    }).then(()=>{
        console.log("addedt ");
    }).catch((error)=>{
        console.log(error);
    })
        // const user  = await db.ref('users');
        // user.set({
        //     name:value,
        //     alive:true
        // })
        form.style.display = "none";
        startOfTheGame.style.display = "block";
    }
})



// start of the game
const question = document.querySelector(".question");
const option1 = document.querySelector("#option-1")
const option2 = document.querySelector("#option-2")
const option3 = document.querySelector("#option-3")
const option4 = document.querySelector("#option-4")


onValue(ref(db, 'questions/'), (snapshot) => {
  const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  index = snapshot.val()['index']
  // console.log(snapshot.val());
  // console.log(snapshot.val()['index']);
  // console.log( Object.values(snapshot.val())[index]);
  // console.log( questions.length);
    // console.log(snapshot.getChildrenCount());
  question.innerHTML = questions[index]['question']
  option1.innerHTML = questions[index]['options'][0]
  option2.innerHTML = questions[index]['options'][1]
  option3.innerHTML = questions[index]['options'][2]
  option4.innerHTML = questions[index]['options'][3]
});

// end if the game 