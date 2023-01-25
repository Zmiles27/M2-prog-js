class App
{
    runApplication()
    {
        let canvas= document.getElementById("canvasId") 
        let g = canvas.getContext("2d");
        console.log(canvas);
    
//background
        g.beginPath();
        g.fillStyle = "#050a30";
        g.moveTo(50,1030);
        g.lineTo(1870,1030);
        g.lineTo(1870,50);
        g.lineTo(50,50);
        g.closePath();
        g.stroke();
        g.fill();

// street
        g.beginPath();
        g.fillStyle = "#808080";
        g.moveTo(900,1030);
        g.lineTo(1020,1030);
        g.lineTo(980,700);
        g.lineTo(940,700);
        g.closePath();
        g.stroke();
        g.fill();

// field 1
        g.beginPath();
        g.fillStyle = "#008631";
        g.moveTo(900,1030);
        g.lineTo(50,1030);
        g.lineTo(50,700);
        g.lineTo(940,700);
        g.closePath();
        g.stroke();
        g.fill();

// field 2
        g.beginPath();
        g.fillStyle = "#008631";
        g.moveTo(1020,1030);
        g.lineTo(1870,1030);
        g.lineTo(1870,700);
        g.lineTo(980,700);
        g.closePath();
        g.stroke();
        g.fill();

//wall
        g.beginPath();
        g.fillStyle = "#333333";
        g.moveTo(50,700);
        g.lineTo(1870,700);
        g.lineTo(1870,600);
        g.lineTo(50,600);
        g.closePath();
        g.stroke();
        g.fill();

//tunnel
        g.beginPath();
        g.fillStyle = "#000000";
        g.moveTo(920,700);
        g.lineTo(920,660);
        g.lineTo(1000,660);
        g.lineTo(1000,700);
        g.closePath();
        g.stroke();
        g.fill();

//gebouw l1
        g.beginPath();
        g.fillStyle = "#808080";
        g.moveTo(610,600);
        g.lineTo(610,140);
        g.lineTo(760,140);
        g.lineTo(760,600);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#30302e";
        g.moveTo(760,140);
        g.lineTo(780,340);
        g.lineTo(780,600);
        g.lineTo(760,600);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 7
        g.beginPath();
        let randomizer7 = Math.random();
        if (randomizer7 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(630,220);
        g.lineTo(630,180);
        g.lineTo(740,180);
        g.lineTo(740,220);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 8
        g.beginPath();
        let randomizer8 = Math.random();
        if (randomizer8 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(630,280);
        g.lineTo(630,240);
        g.lineTo(740,240);
        g.lineTo(740,280);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 9
        g.beginPath();
        let randomizer9 = Math.random();
        if (randomizer9 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(630,340);
        g.lineTo(630,300);
        g.lineTo(740,300);
        g.lineTo(740,340);
        g.closePath();
        g.stroke();
        g.fill();


//gebouw l2
        g.beginPath();
        g.fillStyle = "#808080";
        g.moveTo(360,600);
        g.lineTo(360,110);
        g.lineTo(510,110);
        g.lineTo(510,600);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#30302e";
        g.moveTo(510,110);
        g.lineTo(540,130);
        g.lineTo(540,600);
        g.lineTo(510,600);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 1 
        g.beginPath();
        let randomizer1 = Math.random();
        if (randomizer1 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(380,180);
        g.lineTo(380,140);
        g.lineTo(490,140);
        g.lineTo(490,180);
        g.closePath();
        g.stroke();
        g.fill();
        

        //raam 2
        g.beginPath();
        let randomizer2 = Math.random();
        if (randomizer2 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(380,240);
        g.lineTo(380,200);
        g.lineTo(490,200);
        g.lineTo(490,240);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 3
        g.beginPath();
        let randomizer3 = Math.random();
        if (randomizer3 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(380,300);
        g.lineTo(380,260);
        g.lineTo(490,260);
        g.lineTo(490,300);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 4
        g.beginPath();
        let randomizer4 = Math.random();
        if (randomizer4 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(380,360);
        g.lineTo(380,320);
        g.lineTo(490,320);
        g.lineTo(490,360);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 5
        g.beginPath();
        let randomizer5 = Math.random();
        if (randomizer5 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(380,420);
        g.lineTo(380,380);
        g.lineTo(490,380);
        g.lineTo(490,420);
        g.closePath();
        g.stroke();
        g.fill();

        //raam 6
        g.beginPath();
        let randomizer6 = Math.random();
        if (randomizer6 <= 0.5)
                g.fillStyle = "black";
        else
                g.fillStyle = "yellow";
        g.moveTo(380,480);
        g.lineTo(380,440);
        g.lineTo(490,440);
        g.lineTo(490,480);
        g.closePath();
        g.stroke();
        g.fill();

// gebouw r1
        g.beginPath();
        g.fillStyle = "#808080";
        g.moveTo(1500,600);
        g.lineTo(1500,110);
        g.lineTo(1750,110);
        g.lineTo(1750,600);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#30302e";
        g.moveTo(1500,110);
        g.lineTo(1470,160);
        g.lineTo(1470,600);
        g.lineTo(1500,600);
        g.closePath();
        g.stroke();
        g.fill();

        //bill board

        g.beginPath();
        g.fillStyle = "#D3D3D3";
        g.moveTo(1510,200);
        g.lineTo(1510,120);
        g.lineTo(1740,120);
        g.lineTo(1740,200);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#000000";
        g.moveTo(1520,190);
        g.lineTo(1520,130);
        g.lineTo(1580,130);
        g.lineTo(1580,150);
        g.lineTo(1540,150);
        g.lineTo(1540,160);
        g.lineTo(1560,160);
        g.lineTo(1560,170);
        g.lineTo(1540,170);
        g.lineTo(1540,190);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#000000";
        g.moveTo(1600,190);
        g.lineTo(1620,190);
        g.lineTo(1620,170);
        g.lineTo(1600,170);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#000000";
        g.moveTo(1640,190);
        g.lineTo(1660,190);
        g.lineTo(1660,170);
        g.lineTo(1640,170);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#000000";
        g.moveTo(1680,190);
        g.lineTo(1700,190);
        g.lineTo(1700,170);
        g.lineTo(1680,170);
        g.closePath();
        g.stroke();
        g.fill();

//tree 1
        g.beginPath();
        g.fillStyle = "#315a39";
        g.moveTo(1100,520);
        g.lineTo(1100,420);
        g.lineTo(1160,420);
        g.lineTo(1160,520);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#315a39";
        g.moveTo(1100,420);
        g.lineTo(1090,440);
        g.lineTo(1090,520);
        g.lineTo(1100,520);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#3d251e";
        g.moveTo(1120,520);
        g.lineTo(1140,520);
        g.lineTo(1140,600);
        g.lineTo(1120,600);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#3d251e";
        g.moveTo(1110,520);
        g.lineTo(1120,520);
        g.lineTo(1120,600);
        g.lineTo(1110,600);
        g.closePath();
        g.stroke();
        g.fill();

        //tree 2
        g.beginPath();
        g.fillStyle = "#315a39";
        g.moveTo(1300,520);
        g.lineTo(1300,420);
        g.lineTo(1360,420);
        g.lineTo(1360,520);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#315a39";
        g.moveTo(1300,420);
        g.lineTo(1290,450);
        g.lineTo(1290,520);
        g.lineTo(1300,520);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#3d251e";
        g.moveTo(1320,520);
        g.lineTo(1340,520);
        g.lineTo(1340,600);
        g.lineTo(1320,600);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#3d251e";
        g.moveTo(1310,520);
        g.lineTo(1320,520);
        g.lineTo(1320,600);
        g.lineTo(1310,600);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runApplication();