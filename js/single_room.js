/*global console, alert, prompt*/


/*-------------slider-------------------*/

var single = [
    '../images/rooms-images/singleRoom/room1.jpg',
    '../images/rooms-images/singleRoom/home-rooms1.jpg',
    '../images/rooms-images/singleRoom/room55.jpg'
    ];
setInterval("changeRoomImage()",1500);
var x = 0;
function changeRoomImage(){
  document.getElementById("my-img").src = single[x];
  x++;
  if(single.length == x){
    x = 0;
  }
}
