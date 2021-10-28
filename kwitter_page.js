var firebaseConfig = {
      apiKey: "AIzaSyCsXcEWfm7JYz3gHKp1JH_QToGSm1owt8I",
      authDomain: "kwit-61912.firebaseapp.com",
      databaseURL: "https://kwit-61912-default-rtdb.firebaseio.com",
      projectId: "kwit-61912",
      storageBucket: "kwit-61912.appspot.com",
      messagingSenderId: "224350511743",
      appId: "1:224350511743:web:1822ea6c39664aacc2d54a"
    };    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
//YOUR FIREBASE LINKS

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}