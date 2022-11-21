class App
{
    runApplication()
    {
        let appNaam = "MarinusIsSinging";
        let versiernummer = 0.9;
        let versiedatum = new Date();
        let atheur = "JanIsCool";
        let copyright = "RobinIsOokCool";
        let distributeur = "MaarGerbenIsHetCoolst";
        let darkmode = true;
        console.log(appNaam);
        console.log(versiernummer);
        console.log(versiedatum);
        console.log(atheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();