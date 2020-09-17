var rest = [
        '../images/restaurants-images/rest3.jpg',
        '../images/restaurants-images/rest2.jpg',
        '../images/restaurants-images/rest4.jpg',
        '../images/restaurants-images/rest5.jpg'
      ];
var x = 0;
setInterval("changeRestImage()",1500);
function changeRestImage() {
  document.getElementById("imging").src = rest[x];
  x++;
  if(rest.length == x){
      x=0;
  }
}
