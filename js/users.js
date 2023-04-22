// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, get, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDVfKD7lzrI2FyGjFEn5rtoVBtf1PWEJyk",
    authDomain: "alhabar-a9e27.firebaseapp.com",
    projectId: "alhabar-a9e27",
    storageBucket: "alhabar-a9e27.appspot.com",
    messagingSenderId: "856199108456",
    appId: "1:856199108456:web:4708e91290210f02c328dd",
    databaseURL: "https://alhabar-a9e27-default-rtdb.europe-west1.firebasedatabase.app"
};

let index = 1;
document.querySelector(".container").style.display = "block";
const form = document.querySelector("#form");
const startOfTheGame = document.querySelector("#start-the-game");
const endOfTheGame = document.querySelector("#end-the-game");
const beforeStartTheGame = document.querySelector("#before-start-the-game");
const winner = document.querySelector("#winner");
const btn = document.querySelector("#continue");
const getname = document.querySelector("#name");
let clickOption = localStorage.getItem("clickOption");

!localStorage.getItem("user") ? localStorage.setItem("user", uuid.v4()) : null;

const idOfUser = localStorage.getItem("user");
let alive = localStorage.getItem("alive");
let name = localStorage.getItem("name");
let position = localStorage.getItem("position");

// 
let funGIF = [`<div style="padding-top:93.902%;position:relative;"><iframe src="https://gifer.com/embed/Uc9q" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe></div><p></p>` , 
`<img width="100%" src="https://media.tenor.com/9VDARwraHggAAAAd/game-over-done.gif" alt="" srcset="">`,
`<img width="100%" src="https://i.makeagif.com/media/10-30-2014/MCTo9i.gif" alt="" srcset="">`,
`<div style="padding-top:56.250%;position:relative;"><iframe src="https://gifer.com/embed/7omu" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe></div><p></p>`,
`<div style="padding-top:84.236%;position:relative;"><iframe src="https://gifer.com/embed/7Uet" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe></div><p></p>`
] 

endOfTheGame.innerHTML += funGIF[Math.floor(Math.random() * (funGIF.length - 1 ))]
console.log(uuid.v4());
startOfTheGame.style.display = "none";
endOfTheGame.style.display = "none";
beforeStartTheGame.style.display = "none";
if (alive == "false") {
    form.style.display = "none";
    endOfTheGame.style.display = "";
} else {


    // ========================================================================================================================
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();
    const auth = getAuth();

    if(position==1){
        startGame(db,name)
        form.style.display = "none";
        beforeStartTheGame.style.display = "block";
    }
    btn.addEventListener("click", async () => {
        let value = getname.value;
        !localStorage.getItem("name") ? localStorage.setItem("name", getname.value) : null;
        if (value.length > 3) {
            set(ref(db, 'users/' + idOfUser), {
                name: getname.value,
                alive: true,
                index:0
            }).then(() => {
                !localStorage.getItem("name") ? localStorage.setItem("name", getname.value) : null;
                !localStorage.getItem("alive") ? localStorage.setItem("alive", true) : null;
                 localStorage.setItem("position", 1) 
                 position = 1;
                startGame(db,getname.value);
            }).catch((error) => {
                console.log(error);
            })
            form.style.display = "none";
            beforeStartTheGame.style.display = "block";
        }
    })
    // start of the game
}
function startGame(db,theName) {
    
    const question = document.querySelector(".question");
    const option1 = document.querySelector("#option-1")
    const option2 = document.querySelector("#option-2")
    const option3 = document.querySelector("#option-3")
    const option4 = document.querySelector("#option-4")
    onValue(ref(db, 'questions/'), (snapshot) => {
        options.forEach(o => {o.style.border = ''; o.style.background = "#fafafa";o.style.color = "black" })
        const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        index = snapshot.val()['index']
        console.log(snapshot.val()['startGame']);
        if (!snapshot.val()['startGame'] && !snapshot.val()['showWinners']) {
            startOfTheGame.style.display = "none";
            beforeStartTheGame.style.display = "block";
            
        }
        else {
            beforeStartTheGame.style.display = "none";
            startOfTheGame.style.display = "block";
            if (index == 0 || questions[index]['currectOption'] == clickOption) {
                question.innerHTML = questions[index]['question']
                option1.innerHTML = questions[index]['options'][0]
                option2.innerHTML = questions[index]['options'][1]
                option3.innerHTML = questions[index]['options'][2]
                option4.innerHTML = questions[index]['options'][3]
                console.log(theName);
                set(ref(db, 'users/' + idOfUser), {
                    index:index,
                    name: theName,
                    alive: true
                }).then(() => {

                }).catch((error) => {
                    console.log(error);
                })

                if(snapshot.val()['showWinners']){
                    winner.style.display = "block"
                    startOfTheGame.style.display = "none";
                  }else{
                    winner.style.display = "none"
                    startOfTheGame.style.display = "block";
                  }
            } else {

                startOfTheGame.style.display = "none";
                endOfTheGame.style.display = "block";

                set(ref(db, 'users/' + idOfUser), {
                    name: getname.value,
                    alive: false
                }).then(() => {
                    localStorage.setItem("alive", false);
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
    });
    let options = [option1.parentElement, option2.parentElement, option3.parentElement, option4.parentElement]
    options.forEach((option, i) => option.addEventListener("click", async () => {
        clickOption = i;
        localStorage.setItem("clickOption" , clickOption);
        options.forEach(o => {o.style.border = ''; o.style.background = "#fafafa";o.style.color = "black" })
        option.style.border = '1px solid'
        option.style.background= "#b8874c"
        option.style.color = "#fff"
    }))
    // end if the game 
}