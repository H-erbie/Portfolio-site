var sideBar = document.getElementById('sideBar');
var menuBtns = document.getElementById('menuBtns');
var menuBar = document.getElementById('menuBar');
var container = document.getElementById('con')
var div = document.createElement('div');
var one = document.createElement('div');
var two = document.createElement('div');


//function for sticky navBar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  } 



//make navbar visible when humburger's clicked
sideBar.onclick = function(){
    menuBtns.style.display = 'block';
    menuBar.appendChild(menuBtns);
    menuBtns.style.width = "250px";
    menuBtns.appendChild(div);
    div.setAttribute('class', 'side-menu-btn');
    div.setAttribute('id', 'sideMenuBtn');
    one.setAttribute('class', 'one');
    two.setAttribute('class', 'two');
    div.appendChild(one);
    div.appendChild(two);
    div.style.position = 'absolute';
    div.style.fontSize = '36px';
  }


//close sidebar when close button's clicked
  div.onclick = function() {
    menuBtns.style.width = "0";
  }




