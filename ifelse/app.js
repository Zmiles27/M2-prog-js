class App
{
    runApplication()
    {
        console.log("hello world!");
        let title = document.getElementById("titleId");
        let randomGetal = Math.random();
        if(randomGetal == 0)
        {
            console.log("Getal = 0");
            title.style.backgroundColor = "#00ff00";
        }
        else if(randomGetal < 2 && randomGetal > 0)
        {
            console.log("getal = kleiner dan 0.2 en groter dan 0");
            title.style.backgroundColor = "#0000ff";
        }
        else if(randomGetal < 6 && randomGetal > 2)
        {
            console.log("getal = kleiner dan 0.6 en groter dan 0.2");
            title.style.backgroundColor = "#FFA500";
        }
        else if(randomGetal > 6)
        {
            console.log("getal is groter dan 0.6");
            title.style.backgroundColor = "#Ff0000";
        }
    }
}

let app = new App();
app.runApplication();