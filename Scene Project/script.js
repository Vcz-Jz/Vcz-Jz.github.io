window.onload = function() {
    const canvas = document.getElementById('sceneCanvas');
    const ctx = canvas.getContext('2d');

    const backgroundImage = new Image();
    backgroundImage.src = 'images/background.jpg'

    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        const foregroundImage1 = new Image();
        foregroundImage1.src = 'images/foreground1.jpg';

        const foregroundImage2 = new Image();
        foregroundImage2.src = 'images/foreground2.jpg';

        foregroundImage1.onload = function() {
            ctx.drawImage(foregroundImage1, 50, 280, 350, 350);
        };

        foregroundImage2.onload = function() {
            ctx.drawImage(foregroundImage2, 400, 280, 350, 350);
        };

        ctx.font = '30px Helvetica';
        ctx.fillStyle = 'white';
        ctx.fillText('Jacket Zheng Chen', 250, 50);
        ctx.fillText('Peaceful days with cats', 230, 100);
    };
};