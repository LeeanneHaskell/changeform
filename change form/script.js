$(document).ready(function(){

	const STORAGE_KEY = 'formData';
	
;

	$('#editButton').click(function(){

		
		//hide the main view,show the form
		$('#mainVeiw').addClass('hidden');
		$('#editForm').removeClass('hidden')

	

		//take text in html
		//put it in the form
		$('#titleInput').val( $('#titleText').val() );
		$('#paragraphInput').val($('#paragraphText').text() );

	});

	$('#submitButton').click(function(event){
		event.preventDefault();

		//hide the form,show the main view
		$('#editForm').removeClass('hidden')
		$('#mainVeiw').addClass('hidden');

		//take the falues in the form
		//put them in/Replace the text in the html
		const updatedPageContent = {
			title: $('#titleInput').val(),
			text: $('#paragraphInput').val()
		};
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPageContent));

			 $('#titleInput').text( $('#titleInput').val() );
			 $('#paragraphInput').text($('#paragraphInput').val() );
	});

	$('#cancelButton').click(function(){
		//hide the form,showthe main view
		$('#editForm').removeClass('hidden')
		$('#mainVeiw').addClass('hidden')
		console.log('cancel');
	}).

}).
