// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_WDlRAwAH5TqLHTF6lk8HL91rai7b0Nw",
    authDomain: "pr94-91f30.firebaseapp.com",
    projectId: "pr94-91f30",
    storageBucket: "pr94-91f30.appspot.com",
    messagingSenderId: "558889869635",
    appId: "1:558889869635:web:103dc924a6b5d67d950ff6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";

}

function send()
{
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      likes:0
    });
    
    document.getElementById("msg").value ="";
}