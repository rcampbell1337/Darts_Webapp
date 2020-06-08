const number_of_players = document.getElementById("number_of_players");
const player_name = document.querySelector(".player_name");
const body = document.querySelector(".body");
const enter_number_button = document.querySelector(".enter_number");
const enter_player_button = document.querySelector(".enter_player")
const names = document.querySelector(".names")
const setup = document.querySelector(".setup")
const how_many = document.querySelector(".how_many")
const set_players = document.querySelector(".set_players")
const score_updates = document.querySelector(".score_updates");
let total

enter_number_button.addEventListener("click", ()=>{
    total =  number_of_players.value;
    how_many.textContent = "Enter the player names";
    set_players.remove();
    names.style.visibility = "visible";
    enter_number_button.disabled = true;
}) 

function create_new_player(player){
    var newRow = document.createElement('tr');
    var playerCol = document.createElement('th');
    playerCol.textContent = player;
    playerCol.id = "player_name"+i;
    var score = document.createElement("th");
    score.textContent = "Score required";
    var average = document.createElement("th");
    average.textContent = "3 Dart average";
    var thrown = document.createElement("th");
    thrown.textContent = "Darts Thrown";
    var numbers = document.createElement("tr");
    var blankCol = document.createElement("td");
    var score_value = document.createElement("td");
    score_value.textContent = "501";
    score_value.id = "score_value"+i;
    var average_score = document.createElement("td");
    average_score.textContent = "0";
    average_score.id = "average_score"+i;
    var thrown_value = document.createElement("th");
    thrown_value.textContent = "0";
    thrown_value.id = "thrown_value"+i;
    newRow.appendChild(playerCol);
    newRow.appendChild(score);
    newRow.appendChild(average);
    newRow.appendChild(thrown);
    numbers.appendChild(blankCol);
    numbers.appendChild(score_value);
    numbers.appendChild(average_score);
    numbers.appendChild(thrown_value);
    document.querySelector(".playernames").appendChild(newRow);
    document.querySelector(".playernames").appendChild(numbers);
}

var button_id;
var score_id;
function scoreboard(){
    var newdiv = document.createElement("div");
    var nameOfPlayer = document.createElement("p");
    playerID = document.getElementById("player_name"+i);
    nameOfPlayer = playerID.textContent;
    var score_input = document.createElement("input");
    score_input.type = "text";
    score_input.id = "dart_score"+i
    let score_id = "score"+i;
    score_input.id = score_id;
    var add_score = document.createElement("button");
    add_score.id = i;
    add_score.classList.add("btn-primary")
    add_score.textContent = "Add your score!";
    newdiv.append(nameOfPlayer);
    newdiv.append(score_input);
    newdiv.appendChild(add_score);
    score_updates.appendChild(newdiv);
}

i = 0
enter_player_button.addEventListener("click", ()=>{
    i++
    if (i <= total){
        create_new_player(player_name.value)
        scoreboard()
        console.log(score_updates)
        if (i == total){
            setup.classList.add("panel_remove")
            names.style.visibility = "hidden"
            score_updates.classList.add(".dart_add")
        }
    }
})

let current_score = 501

// Get the element, add a click listener...
document.getElementById("button_list").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "BUTTON") {
        let i = document.getElementById(e.target.id);
        let index = i.id;
        let score_id = document.getElementById("score"+index);
        let score_value = document.getElementById("score_value"+index);
        score_value.textContent = score_value.textContent -= parseInt(score_id.value);
        score_id.value = "0";
	}
});