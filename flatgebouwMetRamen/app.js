class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);

        //bovenkant
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(50,50);
        g.lineTo(100,100);
        g.lineTo(150,50);
        g.lineTo(100,0);
        g.closePath();
        g.stroke();
        g.fill();

        //linker muur
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(50,50);
        g.lineTo(50,250);
        g.lineTo(100,300);
        g.lineTo(100,100);
        g.closePath();
        g.stroke();
        g.fill();

        //rechtermuur
        g.beginPath();
        g.fillStyle = "#333333";
        g.moveTo(150, 50);
        g.lineTo(150, 250);
        g.lineTo(100,300);
        g.lineTo(100,100);
        g.closePath();
        g.stroke();
        g.fill()

        //ramen links

        //1
        g.beginPath();
        let randomizer1 = Math.random();
        if (randomizer1 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(60,75);
        g.lineTo(90,105);
        g.lineTo(90,115);
        g.lineTo(60,85);
        g.closePath();
        g.stroke();
        g.fill();
        //2
        g.beginPath();
        let randomizer2 = Math.random();
        if (randomizer2 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(60,105);
        g.lineTo(90,135);
        g.lineTo(90,145);
        g.lineTo(60,115);
        g.closePath();
        g.stroke();
        g.fill();
        //3
        g.beginPath();
        let randomizer3 = Math.random();
        if (randomizer3 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(60,135);
        g.lineTo(90,165);
        g.lineTo(90,175);
        g.lineTo(60,145);
        g.closePath();
        g.stroke();
        g.fill();
        //4
        g.beginPath();
        let randomizer4 = Math.random();
        if (randomizer4 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(60,165);
        g.lineTo(90,195);
        g.lineTo(90,205);
        g.lineTo(60,175);
        g.closePath();
        g.stroke();
        g.fill();
        //5
        g.beginPath();
        let randomizer5 = Math.random();
        if (randomizer5 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(60,195);
        g.lineTo(90,225);
        g.lineTo(90,235);
        g.lineTo(60,205);
        g.closePath();
        g.stroke();
        g.fill();
        //6
        g.beginPath();
        let randomizer6 = Math.random();
        if (randomizer6 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(60,225);
        g.lineTo(90,255);
        g.lineTo(90,265);
        g.lineTo(60,235);
        g.closePath();
        g.stroke();
        g.fill();



        //ramen rechts

        //1
        g.beginPath();
        let randomizer7 = Math.random();
        if (randomizer7 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(145,75);
        g.lineTo(115,105);
        g.lineTo(115,115);
        g.lineTo(145,85);
        g.closePath();
        g.stroke();
        g.fill();
        //2
        g.beginPath();
        let randomizer8 = Math.random();
        if (randomizer8 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(145,105);
        g.lineTo(115,135);
        g.lineTo(115,145);
        g.lineTo(145,115);
        g.closePath();
        g.stroke();
        g.fill();
        //3
        g.beginPath();
        let randomizer9 = Math.random();
        if (randomizer9 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(145,135);
        g.lineTo(115,165)
        g.lineTo(115,175)
        g.lineTo(145,145)
        g.closePath();
        g.stroke();
        g.fill();
        //4
        g.beginPath();
        let randomizer10 = Math.random();
        if (randomizer10 <= 0.5)
            g.fillStyle = "black";
        else
            g.fillStyle = "yellow";
        g.moveTo(145,165);
        g.lineTo(115,195);
        g.lineTo(115,205);
        g.lineTo(145,175);
        g.closePath();
        g.stroke();
        g.fill();

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