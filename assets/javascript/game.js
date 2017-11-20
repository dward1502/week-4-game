
//Global Variables
//==========================================
var rNumtopaz;
var rNumberyl;
var rNumtourmaline;
var rNumLapis;
//Game variables
var userTotal = 0;
var total = 0;
var wins = 0;
var loss = 0;



//Functions
//====================================
function initializeGame() {

    //creates random total crystal number
    total = Math.floor(Math.random() * 100) + 19;
    console.log("Computer total " + total); 
    //Create random number for each crystal
    rNumtopaz = Math.ceil(Math.random() * 12);
    rNumberyl = Math.ceil(Math.random() * 12);
    rNumtourmaline = Math.ceil(Math.random() * 12);
    rNumLapis = Math.ceil(Math.random() * 12);    
    //need to Add update HTML game field using jQuery
    $('#total').append(total);  

}
//Reset 
function reset(){
    //Clears previous total
    $('#total').empty();
    //Clears user score
    $('#score').empty();
    //Clears user total
    userTotal = 0;  
}
//Update Score
function updateScore(){
    $('#score').empty();
    $('#score').append(userTotal);
}
//Win lose function
function winLose() {
    if (userTotal === total) {
        wins++;
        alert("Congratulations you guessed the correct amount of crystals!");
        console.log("Wins: " + wins);
        $('#wins').empty();
        $('#wins').append(wins);
        reset();
        initializeGame();

    } else if (userTotal > total) {
        loss = loss + 1;
        alert("I am sorry your crystals do not equal the correct total!");
        console.log("Loss: " + loss);
        $('#losses').empty();
        $('#losses').append(loss);
        reset();
        initializeGame();

    }
}
//Add user crystal guesses (still have to figure this out)
function updateHTML() {

}
// Functions for the crystal buttons
$(".gem1").on("click", function () {
     userTotal = userTotal + rNumtopaz;
     console.log("Update: " + userTotal);
    updateScore();
    winLose();

    
});
$(".gem2").on("click", function () {
   // berylNum();
    userTotal = userTotal + rNumberyl;
    console.log("Update: " + userTotal);
    updateScore();
    winLose();


});
$(".gem3").on("click", function () {
   // tourmalineNum();
    userTotal = userTotal + rNumtourmaline;
    console.log("Update: " + userTotal);
    updateScore();
    winLose();

});
$(".gem4").on("click", function () {    
   // lapisNum();
    userTotal = userTotal + rNumLapis;
    console.log("Update: " + userTotal);
    updateScore();
    winLose();

});


//Main
//=============================
initializeGame();