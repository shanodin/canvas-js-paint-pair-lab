var app = function () {
  var canvas = document.querySelector('#main-canvas');
  var context = canvas.getContext('2d');
  var started = false;


  var changeColour = function () {
    context.strokeStyle = this.value;
  }

  var colourPicker = document.querySelector('#input-colour');
  colourPicker.addEventListener('change', changeColour);

  canvas.addEventListener('mousedown', function (event) {
    var x = event.x;
    var y = event.y;
    if(!started) {
      context.beginPath();
      context.moveTo(x, y);
      started = true;
    }
  })
  canvas.addEventListener('mousemove', function(event){
      var x = event.x;
      var y = event.y;
      if(started) {
      context.lineTo(x, y);
      context.stroke();
    }
  })

  canvas.addEventListener('mouseup', function(event){
    context.closePath();
    started = false;
  })




}


window.addEventListener('load', app)
