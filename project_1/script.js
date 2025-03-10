const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const bgImage = new Image();
bgImage.src = 'images/background.jpg';

bgImage.onload = function () {
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  drawForegroundImages(); 
};

function drawForegroundImages() {
    const fgImage1 = new Image();
    fgImage1.src = 'images/foreground1.jpg';
  
    const fgImage2 = new Image();
    fgImage2.src = 'images/foreground2.jpg';
  
    fgImage1.onload = function () {
      ctx.drawImage(fgImage1, 50, 300, 200, 200);
    };
  
    fgImage2.onload = function () {
      ctx.drawImage(fgImage2, 500, 400, 150, 150);
      addText();
    };
  }

  function addText() {
    ctx.font = '40px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Jacket Zheng Chen', 50, 50);
    ctx.fillText('Beautiful Landscape and cats', 50, 100);
  }