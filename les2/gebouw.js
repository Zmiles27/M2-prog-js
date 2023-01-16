class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvas")
        let g = canvas.getContext("2d");

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(50,50);
        g.lineTo(100,100);
        g.lineTo(150,50);
        g.lineTo(100,0);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(50,50);
        g.lineTo(50,250);
        g.lineTo(100,300);
        g.lineTo(100,100);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#333333";
        g.moveTo(150, 50);
        g.lineTo(150, 250);
        g.lineTo(100,300);
        g.lineTo(100,100);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(100,300);
        g.lineTo(350,350);
        g.lineTo(400,300);
        g.lineTo(150,250);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runApplication();