// The variables needed to add event listeners and will be referenced through
// more than one function
const number_of_players = document.getElementById("number_of_players");
const player_name = document.querySelector(".player_name");
const body = document.querySelector(".body");
const enter_number_button = document.querySelector(".enter_number");
const enter_player_button = document.querySelector(".enter_player");
const names = document.querySelector(".names");
const setup = document.querySelector(".setup");
const how_many = document.querySelector(".how_many");
const set_players = document.querySelector(".set_players")
const score_updates = document.querySelector(".score_updates");
const restart =  document.querySelector(".restart");
const errors = document.querySelector(".errors");
const high_score = document.querySelector(".high_score")
const out_div = document.querySelector(".dart_out");
const num_value = document.getElementById("darts");

// A variable which is assigned in enter_number_button but used when entering 
// players.
let total;
let current_high_score = 0;

// A function that plays different sounds throughout the game
function play_sound(sound){
    let play_sound = new Audio(sound).play();
    return play_sound;
}

function how_many_players(){
    // Make sure the user inputs a valid total
    try{
        if(isNaN(number_of_players.value)) throw "Please enter a number";
        else if(number_of_players.value == "") throw "Please enter a value";
        else if(number_of_players.value <= 0) throw "Please enter a positive integer"
        total =  number_of_players.value;
        how_many.textContent = "Enter the player names";
        set_players.remove();
        names.style.display = "block";
        enter_number_button.disabled = true;
        errors.textContent = "";
    }catch(err){
        errors.textContent = err;
    }
}

// A function which sets how many players are to be added
enter_number_button.addEventListener("click", ()=>{
    how_many_players();
}) 

number_of_players.addEventListener("keyup", (e)=>{
    if (e.keyCode === 13){
        how_many_players();
    }
})

/* 
This function creates DOM elements which are can be referenced for later use.
Many of these variables are created with ID's so they can be referenced 
when implementing new scores etc. All of the elements created here are put into
the playernames table.
*/
function create_new_player(player){

    // To keep track of score averages
    let rolling_average = document.createElement("p");

    // Create the table elements
    let newRow = document.createElement('tr');
    let playerCol = document.createElement('th');
    let score = document.createElement("th");
    let average = document.createElement("th");
    let thrown = document.createElement("th");
    let wins = document.createElement("th");
    let last_dart_thrown = document.createElement("th");


    // Set text of table elements
    playerCol.textContent = player;
    playerCol.id = "player_name"+i;
    score.textContent = "Score required";
    average.textContent = "3 Dart average";
    thrown.textContent = "Darts Thrown";
    wins.textContent = "# of wins";
    last_dart_thrown.textContent = "Last Throw";

    // Create the number values
    let numbers = document.createElement("tr");
    let resetName = document.createElement("td");
    let score_value = document.createElement("td");
    let average_score = document.createElement("td");
    let thrown_value = document.createElement("td");
    let win_number = document.createElement("td");
    let last_throw = document.createElement("td");

    // Set number elements values and give them ID's
    resetName.id = "reset "+i;
    resetName.textContent = "Edit"
    score_value.textContent = 501;
    score_value.id = "score_value"+i;
    average_score.textContent = 0;
    average_score.id = "average_score"+i;
    thrown_value.textContent = 0;
    thrown_value.id = "thrown_value"+i;
    win_number.textContent = 0;
    win_number.id = "win"+i;
    last_throw.textContent = 0;
    last_throw.id = "last"+i;

    // To keep track of average scores
    rolling_average.textContent = 0;
    rolling_average.id = "rolling"+i;
    rolling_average.classList.add("rolling");

    // Style the reset button
    resetName.style.background = "#CCCCCC";
    resetName.style.pointerEvents = "all";


    // Place all of the variables into the player_names table rows
    newRow.appendChild(playerCol);
    newRow.appendChild(score);
    newRow.appendChild(average);
    newRow.appendChild(thrown);
    newRow.appendChild(wins);
    newRow.appendChild(last_dart_thrown);
    numbers.appendChild(resetName);
    numbers.appendChild(score_value);
    numbers.appendChild(average_score);
    numbers.appendChild(thrown_value);
    numbers.appendChild(win_number);
    numbers.appendChild(rolling_average);
    numbers.appendChild(last_throw)

    // Place the rows onto the table
    document.querySelector(".playernames").appendChild(newRow);
    document.querySelector(".playernames").appendChild(numbers);
}

// This is the area that marks scores
function scoreboard(){

    // Creates elements for each name input
    let newdiv = document.createElement("div");
    let nameOfPlayer = document.createElement("p");
    let add_score = document.createElement("button");
    let undo_score = document.createElement("button");
    let score_input = document.createElement("input");

    // Create IDs for each player input
    score_input.id = i;
    add_score.id = i;
    undo_score.id = "undo" + i
    nameOfPlayer.id = "score_player"+i;
    undo_score.classList.add("btn", "btn-secondary")
    undo_score.textContent = "Undo score"
    add_score.classList.add("btn", "btn-primary")
    add_score.textContent = "Add score";
    score_input.value = "0";

    // Get the players name and set to each score element
    let playerID = document.getElementById("player_name"+i);
    nameOfPlayer.textContent = playerID.textContent;

    // Add all elements to a new div
    newdiv.append(nameOfPlayer);
    newdiv.append(score_input);
    newdiv.appendChild(add_score);
    newdiv.append(undo_score);

    // Add to DOM
    score_updates.appendChild(newdiv);
}


// Create an index variable to end the loop
let i = 0

function enter_player(){
    i++
    if (i <= total){
        create_new_player(player_name.value);
        scoreboard();
        score_updates.style.padding = "20px";
        player_name.value = "";

        // If statement to remove the input panel
        if (i == total){
            setup.classList.add("panel_remove");
            names.style.visibility = "hidden";
            score_updates.classList.add(".dart_add");
        }
    }
}

// A function which adds players to the DOM
enter_player_button.addEventListener("click", ()=>{
    enter_player();
})

player_name.addEventListener("keyup", (e)=>{
    if (e.keyCode === 13){
        enter_player();
    }
})

let player_names = document.querySelector(".playernames");
let button_list = document.getElementById("button_list");

// Variable for the winner id.
let winner = document.querySelector(".winner");

function reset(e){
    let i = document.getElementById(e.target.id);
    let index = i.id;
    let split = index.split(" ");
    let resetter = split[1];
    let name = document.getElementById("player_name"+resetter);
    let score_name = document.getElementById("score_player"+resetter);
    let new_name = document.createElement("input");
    i.addEventListener("click", ()=>{
        name.textContent = "";
        name.appendChild(new_name);
    })
    new_name.addEventListener("keyup", function(e) {
        if(e.keyCode == 13) {
            console.log(new_name.value);
            name.textContent = new_name.value;
            score_name.textContent = new_name.value;
        }
    });
}

player_names.addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "TD") {
        reset(e);
    }
});


// Get the element, add a click listener to find the specific ID of each button
// press. This is the full game code.

function GameLoop(e){
    // These variables are used to get the button ID
    let i = document.getElementById(e.target.id);
    let index = i.id;

    errors.textContent = "";
    // Variables that need to be changed
    let score_id = document.getElementById(index);
    let player_name = document.getElementById("player_name"+index).textContent;
    let score_value = document.getElementById("score_value"+index);
    let thrown_value = document.getElementById("thrown_value"+index);
    let thrown_int = +document.getElementById("thrown_value"+index).innerHTML;
    let three_dart_average = document.getElementById("average_score"+index);
    let rolling_score_text = document.getElementById("rolling"+index);
    let rolling_score = +document.getElementById("rolling"+index).innerHTML;
    let last_dart_thrown = document.getElementById("last"+index);
    // Variable to add darts to average
    let three_darts = 3;

    // Update the highest score of the night
    if (current_high_score < Number(score_id.value) && score_id.value <= 180){
        current_high_score = score_id.value
        high_score.textContent = `High-score: ${player_name} with ${score_id.value}`
    }

    // Update the score of the darts thrown and make sure the input is a number
    try{
    if (isNaN(score_id.value)) throw "Please enter integer values only";
    else if(score_id.value == "") throw "Please enter a value";
    
    // Don't allow higher values than 180
    if (parseInt(score_id.value) > 180){
        score_id.value = "0";
        three_darts = 0;
        throw "Please enter a number less than 180"
    }

    // Set the score
    score_value.textContent -= parseInt(score_id.value);
    last_dart_thrown.textContent = parseInt(score_id.value);
    
    document.getElementById("undo"+index).addEventListener("click", ()=>{
        score_value.textContent -= -parseInt(last_dart_thrown.textContent);
        rolling_score_text.textContent -= parseInt(last_dart_thrown.textContent)
        three_darts = -3;
        thrown_value.textContent = thrown_int += three_darts;
        console.log(rolling_score -= parseInt(last_dart_thrown.textContent))
        last_dart_thrown.textContent = 0;
    })

    if (score_value.textContent == 0)
    {
        // Set visibility on elements
        three_darts = 0;
        out_div.style.visibility = "visible";
        button_list.style.visibility = "hidden";
        out_div.addEventListener("change", ()=>{
        // Add to the win number
        var strUser = num_value.options[num_value.selectedIndex].value;
        player_names.style.visibility = "hidden";
        winner.style.visibility = "visible";
        winner.textContent = document.getElementById("player_name"+index).textContent + ", You won!";
        winner.style.display = "block";
        restart.style.visibility = "visible";
        thrown_value.textContent = thrown_int += parseInt(strUser);
        out_div.style.visibility = "hidden";
        })
        let win = document.getElementById("win"+index);
        let win_int = +document.getElementById("win"+index).innerHTML;
        win.textContent = win_int += 1;
    }

    // Throw an error if the score goes below 0 or the input is negative
    if(score_value.textContent < 0)
    {
        score_value.textContent = +score_value.textContent + parseInt(score_id.value)
            throw "Score cannot be lower than 0";
    }
    else if(parseInt(score_id.value) < 0)
    {
        score_value.textContent = +score_value.textContent + parseInt(score_id.value)
        throw "Please enter positive integers only";
    }

    // Add to the total darts thrown
    thrown_value.textContent = thrown_int += three_darts;
    if (three_darts == 3){
        rolling_score += parseInt(score_id.value);
        rolling_score_text.textContent = rolling_score;
        console.log(rolling_score)
        three_dart_average.textContent = Math.floor(rolling_score / (thrown_int / three_darts));
    }

    // Write the error to the user
    } catch(err){
        errors.textContent = err
    }

    // Soundbites for good scores
    switch (parseInt(score_id.value)){
        case 26:
            play_sound("scores/unlucky.mp3");
            break;
        case 100:
            play_sound("scores/100.mp3");
            break;
        case 120:
            play_sound("scores/120.mp3");
            break;
        case 140:
            play_sound("scores/140.mp3");
            break;
        case 160:
            play_sound("scores/160.mp3");
            break;
        case 180:
            play_sound("scores/180.mp3");
            break;
    }
    score_id.value = "";
}

button_list.addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "BUTTON") {
        GameLoop(e);
    }
});

button_list.addEventListener("keyup", function(e) {
	if(e.keyCode == 13) {
        GameLoop(e);
    }
});

// Restart the game on click
restart.addEventListener("click", () =>{

    // Add and remove elements from the game board
    player_names.style.visibility = "visible";
    button_list.style.visibility = "visible";
    restart.style.visibility = "hidden";
    winner.style.display = "none";
    num_value.selectedIndex = "default"

    // Create a loop for all players
    for (let index = 0; index < i; index++)
    {
        // Reset the game score but keep the averages
        let reset_score = document.getElementById("score_value"+(index+1));
        reset_score.textContent = "501";
    }
})