
$(document).ready(function() {

	var value = 0;
	var valueHasDecimal = false;
	var valueOfButton;
	var result = null;
	var operator = null;

	var screenValue = function() {
		$( "input" ).val(value);
		parseFloat(value);
	}
	screenValue();


	var startCalculation = function() {
		result = parseFloat(value);
		value = 0;
		valueHasDecimal = false;
	}

	var resetCalculation = function() {
		valueHasDecimal = false;
		result = null;
		operator = null;
		screenValue();
	}

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
		$( "input" ).val(result);
		value = 0;
		valueHasDecimal = false; 
	}


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

 TweenMax.staggerFrom("div", 2, { scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut }, 0.2);


	$('.buttons').on('click', "div", bounceIn) //click event to execute animation.
		
}); // close document ready function

















