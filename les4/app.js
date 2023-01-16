class App
{
    runApplication()
    {
        console.log("sup");
        this.nameFunction();
        this.screamFunction();
        this.sumFunction(3,7);
    }
    nameFunction()
    {
        console.log("MARIO!!");
    }

    screamFunction()
    {
        let scream = console.log("BWAHAHA!!!");
        return scream;
    }
    sumFunction(firstNumber, secondNumber)
    {
        console.log(firstNumber + secondNumber)
    }
}

let app = new App();
app.runApplication();