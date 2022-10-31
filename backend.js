const firebaseConfig = {
    apiKey: "AIzaSyD4kS85gMtV0I4L_okXuzhUQpqItjWlMpw",
    authDomain: "study-buddy-61cfe.firebaseapp.com",
    databaseURL: "https://study-buddy-61cfe-default-rtdb.firebaseio.com",
    projectId: "study-buddy-61cfe",
    storageBucket: "study-buddy-61cfe.appspot.com",
    messagingSenderId: "894558769361",
    appId: "1:894558769361:web:08fa103dd1b3007cdff5f0",
    measurementId: "G-7GXJ7N2EB7"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference databse
var studyBuddyDB = firebase.databaseURL().ref("studyBuddy");

document.getElemtnetById("form-box").addEventLIstener("submit", submitForm);



function submitForm(e){
    e.preventDefault();

    var login = getElementValue('login');
    var 
}

const getElementValue = (id) => {
    return document.getElementById(id).value;
}