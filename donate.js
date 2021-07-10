// connect to the data base
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD95le4HPuIN0_6ldGNSguRDHZ7B9RVYzo",
    authDomain: "v7boysdb.firebaseapp.com",
    databaseURL: "https://v7boysdb-default-rtdb.firebaseio.com",
    projectId: "v7boysdb",
    storageBucket: "v7boysdb.appspot.com",
    messagingSenderId: "791991900664",
    appId: "1:791991900664:web:168bdcabf9d119ea249e0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let Name = document.getElementById('name').value;
let Email = document.getElementById('email').value;
let Phone = document.getElementById('phno').value;
let Amount = document.getElementById('amount').value;
let transactionId = document.getElementById('transactionId').value;
let Image = document.getElementById('imageFile').value;

let submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click',()=>{
    console.log(Image);
})



