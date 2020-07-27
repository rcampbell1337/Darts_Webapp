<!--
    Version: 1.0.1
    Author: Robbie C
    Date: 08/06/2020
    Description:
    A darts application that has the functionality to keep score, decide how many
    players are playing and a few averages. It is a work in progress but i expect
    that it will be buggy with the current version. Send a message to me at:
    robbielcampbell31@gmail.com for any queries.
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Darts scorekeeper</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css"></style>
</head>
<body>
    <!-- Pseudo nav bar and title of page-->
    <div class="contain text-center">
        <h1 class="alert">Let's play darts!</h1> 
        <h3 class="errors alert-danger"></h3>
        <h4 class="high_score">! HIGH SCORE !</h4>
        <!-- This table is filled once players have been added by javascript -->
            <table class="playernames text-center">
                
            </table>

            <!-- This is where the winners name is placed -->
            <h1 class="winner"></h1>
            <!-- start a new game option -->
            <button class="restart btn btn-secondary">Play again?</button>
            
            <!-- This is where the score input data is kept -->
            <div id="button_list" class="score_updates text-right">
                    
            </div>
            <!-- The div where number of players and player names are included -->
            <div class="setup">
                <h3 class="how_many">How many players are playing?</h3>
                <div class="set_players">
                    <input type="text" id="number_of_players" placeholder="How many players">
                    <button class="enter_number btn btn-primary">Enter players</button>
                </div>
                <!-- Put in place of the select player number after selecting player numbers -->
                <div class="names">
                    <input type="text" class="player_name" placeholder="Enter player name">
                    <button class="enter_player btn btn-primary">Enter player name</button>
                </div>
                <div class="dart_out">
                    <select name="darts_out" id="darts">
                        <option value="default" selected="selected">Select a value</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <h3 id="dart_out" class="enter_dart_out">Enter out</h3>
                </div>
    </div>
<script src="app.js"></script>
</body>
</html>