
//ADICIONE SEUS LINKS FIREBASE - COLAR APÓS CRIAR O BANCO DE DADOS

const firebaseConfig = {
  apiKey: "AIzaSyC0I1hZHYKHckrNLbbT24vnbp28tLlanC4",
  authDomain: "kwitter-ee2f0.firebaseapp.com",
  databaseURL: "https://kwitter-ee2f0-default-rtdb.firebaseio.com",
  projectId: "kwitter-ee2f0",
  storageBucket: "kwitter-ee2f0.appspot.com",
  messagingSenderId: "593206675655",
  appId: "1:593206675655:web:da5c264d1757a8d57496e2"
};

firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
