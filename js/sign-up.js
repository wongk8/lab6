//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation

    var stateSelect = $('.us-states');
    var state;
    usStates.forEach(function(state){
    	state = $(document.createElement('state'));
    	state.attr('value', state.abbreviation);
    	state.html(state.name);
    	stateSelect.append(state);
    })

	$('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);

		//select a descendant input element with the name "addr-1"
        var addr1Input = signupForm.find('input[name="addr-1"]');
        var addr1Value = addr1Input.val();
        if(addr1Value.length > 0){
                var zipInput = signupForm.find('input[name="zip"]');
                var zipValue = zipInput.val();
                if(zipValue.length == 0){
                        alert("ZIP must be entered with address")
                        return false;
                }
        }
	});

	$('.cancel-signup').click(function(){
	    //code to run when user clicks "No Thanks!" button
        $('.cancel-signup-modal').modal();

	   //redirect browser to google
	    $('.btn-abandon').click(function(){
	    	window.location = 'http://www.google.com';
	    })
	}); //cancel-signup click
}); //on document ready 