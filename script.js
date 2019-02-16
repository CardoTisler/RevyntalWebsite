// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigationBar");
var midcol = document.getElementById("middle-column");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    midcol.classList.add("midColChange")
  } else {
    navbar.classList.remove("sticky");
    midcol.classList.remove("midColChange")
  }
}
function closeModal(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("header").style.overflow = "hidden";
}
function openModal(){
  document.getElementById("modal").style.display = "block";
  document.getElementById("header").style.overflow = "inherit";
}
function getPic(a){
  openModal();
  var pic = document.getElementById('rotated-pildid').getElementsByTagName('img')[a];
  pic.style.overflow = "hidden";
  var modal = document.getElementById("modal-content");
  modal.innerHTML = pic;

}
