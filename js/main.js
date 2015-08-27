
$(document).ready(function() {

	var value = 0;
	var valueHasDecimal = false;
	var valueOfButton;
	var result = null;
	var operator = null;

	// rounds the result to 2 decimal places
	var roundToTwo = function(value) {
    return(Math.round(value * 100) / 100);
	};

	//outputs values to the screen
	var screenValue = function() {
		$( "input" ).val(value);
		parseFloat(value);
	};
	screenValue();

	// grabs the first current value and stores it, 
	// then sets the value back to 0 to start input for 
	// the next value to input.
	var startCalculation = function() {
		result = parseFloat(value);
		value = 0;
		valueHasDecimal = false;
	};

	// resets the calculator
	var resetCalculation = function() {
		valueHasDecimal = false;
		result = null;
		operator = null;
		screenValue();
	};

	// depending on the operation sign pressed the first value
	// ( which was stored in result in startCalculation() ) will be
	// executed accordingly with the next current value.

	//The result is updated and sent to the screen
	var finishCalculation = function() {
		if (operator === 'addition') {
			result += parseFloat(value);
		} else if (operator === 'subtract') {
			result -= parseFloat(value);
		} else if (operator === 'multiply') {
			result *= parseFloat(value);
		} else if (operator === 'divide') {
			result /= parseFloat(value);
		} 
		$( "input" ).val( roundToTwo(result) );
		value = 0;
		valueHasDecimal = false; 
	};

	// allows the user to input values. Decimals are only permitted once on each input value.
	$('.buttons div').click(function() {
		valueOfButton = $(this).attr("id");
		if ( parseInt(valueOfButton ) || valueOfButton === "0" ) {
			if ( value === 0 ) {		
				value = valueOfButton;
			} else {
				value += valueOfButton;
			}
		} else if ( valueOfButton === "." && valueHasDecimal === false ) {
			value += valueOfButton;
			valueHasDecimal = true;

		} else if (valueOfButton === "clear") {
			
			startCalculation();
		}
		screenValue();	
	});

	// takes in the operation selected and assigns it to a variable 'operator'.
	// next time user inputs a value or presses equal the last operator will
	// fire on the last given value that was input. Effectively keeping the result updated
	// continously till equal is pressed. CLR resets the calculator.
	$('.buttons div').click(function() {
		if (valueOfButton = $(this).attr("class")) {
			if ( operator !== null ) {
				finishCalculation();
				operator = valueOfButton;
		    } else {
		    	startCalculation();
		    	operator = valueOfButton;
		    }
		} else if ( operator === 'equal') {
			resetCalculation();
		}   
	}); 



/////////// TWEEN MAX ANIMATIONS ////////////

	//intro animation upon load
	TweenMax.staggerFrom("div", 2, { scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut }, 0.2);

	var buttonPress = function() {
	var that = this; //stores this into a variable.
		currentTween = TweenMax.to(('#' + this.id), 1, { scale:0.5, ease:Elastic.easeOut }, 0.2);
		onComplete: buttonPress, 
		TweenMax.to(('#' + this.id), 1, { scale:1, ease:Elastic.easeOut }, 0.2); //onComplete do this.
	}
	
	$('.buttons').on('click', "div", buttonPress) //click event to execute animation.
		
}); // close document ready function
