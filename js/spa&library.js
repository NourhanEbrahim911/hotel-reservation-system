/*Slider spa && library*/

var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("mySlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";

  if (n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = y.length}
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  y[slideIndex-1].style.display = "block";
}
