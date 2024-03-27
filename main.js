window.onload = function() {
    var video = document.getElementById('video');
    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');
    var ctx1 = canvas1.getContext('2d');
    var ctx2 = canvas2.getContext('2d');
  
    video.addEventListener('play', function() {
      drawFrame();
    }, false);
  
    function drawFrame() {
      if (video.paused || video.ended) {
        return;
      }
      ctx1.drawImage(video, 0, 0, canvas1.width, canvas1.height);
      
      // Biên cạnh hình ảnh
      var imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
        data[i]     = 255 - data[i];     // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
        // không cần thay đổi giá trị alpha (data[i + 3])
      }
      ctx2.putImageData(imageData, 0, 0);
  
      setTimeout(drawFrame, 0); // Vẽ frame tiếp theo
    }
  };
  