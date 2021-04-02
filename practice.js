 // Your web app's Firebase configuration
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
   function addUser(){
        user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
     purpose:"adding user"
});

   }
//ADD YOUR FIREBASE LINKS