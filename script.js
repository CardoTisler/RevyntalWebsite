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