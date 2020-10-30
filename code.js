$(document).ready(
    function ()
    {
        $("#bacCalc").click(alcContent);

        function alcContent()
        {
            var beerOunces = 0.54;
            var wineOunces = 0.6;
            var shotOunces = 0.6;
            var avgAbsorption = 7.5;
            var numBeers = $("#numBeers").val();
            numBeers = parseFloat(numBeers);
            var numWine = $("#numWine").val();
            numWine = parseFloat(numWine);
            var numShots = $("#numShots").val();
            numShots = parseFloat(numShots);
            var personWeight = $("#personWeight").val();
            personWeight = parseFloat(personWeight);
            var numHours = $("#numHours").val();
            numHours = parseFloat(numHours);
            var totalBeerOunces = numBeers*beerOunces;
            var totalWineOunces = numWine*wineOunces;
            var totalShotOunces = numShots*shotOunces;
            var totalLiquidOunces = totalBeerOunces+totalWineOunces+totalShotOunces;
            var nextCalculation = totalLiquidOunces*avgAbsorption;
            var BAC = nextCalculation/personWeight;
            var hourSubtraction = numHours*0.015;
            var finalBAC = BAC-hourSubtraction;
            $("#displayBAC").text(finalBAC.toFixed(3));
            $(".calculator").show();
        }
    }
);