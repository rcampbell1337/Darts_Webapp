const number_of_players = document.getElementById("number_of_players");
const player_name = document.querySelector(".player_name");
const body = document.querySelector(".body");
const enter_number_button = document.querySelector(".enter_number");
const enter_player_button = document.querySelector(".enter_player")
const names = document.querySelector(".names")
const setup = document.querySelector(".setup")
const how_many = document.querySelector(".how_many")
const set_players = document.querySelector(".set_players")
let total

enter_number_button.addEventListener("click", ()=>{
    total =  number_of_players.value;
    how_many.textContent = "Enter the player names";
    set_players.remove();
    names.style.visibility = "visible";
    enter_number_button.disabled = true;
}) 

i = 0
enter_player_button.addEventListener("click", ()=>{
    i++
    if (i <= total){
        var newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.textContent = i + ". " + player_name.value;
        document.querySelector(".playernames").appendChild(newDiv);
    }
    else{
        setup.style.visibility = "hidden";
        names.style.visibility = "hidden";
    }
})