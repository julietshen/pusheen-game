
var wins = 0;
var losses = 0;
var correctTotal;
var userTotal;
var catOptions = [4];

$(document).on("click", ".cats", function() {

    if ($(this).is("#button1")) {
    	userTotal = userTotal + catOptions[0];
    } else if ($(this).is("#button2")) {
    	userTotal = userTotal + catOptions[1];
    } else if ($(this).is("#button3")) {
    	userTotal = userTotal + catOptions[2];
    } else if ($(this).is("#button4")) {
    	userTotal = userTotal + catOptions[3];
    } else {
    	console.log("Oops! Could not find cat button");
    }

    console.log(userTotal);

    $("#user-total").text(userTotal);

	checkScore();
});


function setUp() {
	userTotal = 0;
	correctTotal = Math.floor(Math.random() * 120) + 19;


	$("#number-to-guess").text(correctTotal);
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#user-total").text(userTotal);


	for (var i = 0; i < 4; i++) {
    	catOptions[i] = Math.floor(Math.random() * 12) + 1;
    	console.log(catOptions[i]);
	}
};

function checkScore() {
	if (userTotal > correctTotal) {
		losses++;
		setUp();
	} else if (userTotal === correctTotal) {
		wins++;
		setUp();
	} else {
		console.log("No win, no loss. Game continues.")
	}

	$("#wins").text(wins);
	$("#losses").text(losses);

};

$(document).ready(setUp);
	

