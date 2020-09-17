function loginForm(){
  var login = document.getElementById('first');
  var txt = document.getElementById('login-form');
  var txt2 = document.getElementById('sign-form');
  txt2.style.display = 'none';
  txt.style.display = 'block';
}
function signForm(){
  var login = document.getElementById('second');
  var txt = document.getElementById('login-form');
  var txt2 = document.getElementById('sign-form');
  txt.style.display = 'none';
  txt2.style.display = 'block';
}
function bookRoom(){
  var booking = document.getElementById("room-B");
  document.getElementById("Brest").style.display = "none";
  document.getElementById("Bhall").style.display = "none";
  document.getElementById("Broom").style.display = "block";
}
function bookRest(){
  document.getElementById("Broom").style.display = "none";
  document.getElementById("Bhall").style.display = "none";
  document.getElementById("Brest").style.display = "block";
}
function bookHall(){
  document.getElementById("Broom").style.display = "none";
  document.getElementById("Brest").style.display = "none";
  document.getElementById("Bhall").style.display = "block";
}
