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
  document.getElementById("navigationBar").style.overflow = "hidden";
  
  var modalContent = document.getElementById('modal-content');
  modalContent.classList = "";
}
function openModal(){
  document.getElementById("modal").style.display = "block";
  document.getElementById("header").style.overflow = "inherit";
  document.getElementById("navigationBar").style.overflow = "unset";
}
function getPic(imageNumber){
  //opens the modal, puts blackscreen in front of everything
  openModal();
  var pic = document.getElementById('middle-column').getElementsByTagName('img')[imageNumber];
  var modalContent = document.getElementById("modal-content");
  //gets the picture that was clicked, clones it so it remains in the gallery
  //then adds it to the modal.
  var appendPic = pic.cloneNode();
  if(modalContent.childElementCount > 0){
    modalContent.removeChild(modalContent.childNodes[0]);
    modalContent.appendChild(appendPic);
  } else {
    modalContent.appendChild(appendPic);
  }
  
  modalContent.classList.add("modalContentImage");
}

function cssToLandscapeImages(){
  var modalContent = document.getElementById('modal-content');
  modalContent.classList.add('landscape-image-css');
}

//choosing which css file to use whether 
//viewport height > width or height < width
//if height > width = true then it'll change the
//css file to mobilesheet.css, which will be the
//mobile friendly file.
var w = window.innerWidth;
var h = window.innerHeight;

var head = document.getElementsByTagName('head')[0];
var link = head.getElementsByClassName('css')[0];
