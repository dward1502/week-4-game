
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
$('#wins').append(wins);
$('#losses').append(loss);
$('#score').append(userTotal);



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
        //send to html
        $('#wins').empty();
        $('#wins').append(wins);
        //game reset and re initialize
        reset();
        initializeGame();

    }else if (userTotal > total) {
        loss++;
        alert("I am sorry your crystals do not equal the correct total!");
        console.log("Loss: " + loss);
        $('#losses').empty();
        $('#losses').append(loss);
        reset();
        initializeGame();

    }
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