function setKeyboardControls(camera){

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 38) {
       camera.position.y= camera.position.y + 1;
   }
   else if (key == 39) {
       camera.position.y= camera.position.x + 1;
       console.log('key');
   }
   else if (key == 37) {
       camera.position.y= camera.position.x -1 ;
       console.log('key');
   }
   else if (key == 40) {
       camera.position.y=camera.position.y - 1;
   }

}


}
