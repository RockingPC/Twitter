//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyByiT8bunqMLcijzYmjqSkP6wOtJ3LQa3g",
      authDomain: "kwitter-f779c.firebaseapp.com",
      databaseURL: "https://kwitter-f779c-default-rtdb.firebaseio.com",
      projectId: "kwitter-f779c",
      storageBucket: "kwitter-f779c.appspot.com",
      messagingSenderId: "684575456429",
      appId: "1:684575456429:web:68c4c25c7e075e1f515a24"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
    }
