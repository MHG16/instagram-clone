// Using the tools you've learned in class, create a responsive image board that allows you 
// to add images and captions via a url. The images that are added to the image board should be 
// saved to tiny pizza server, so that when you reload the page, they are not lost. The form to 
// add an image should properly validate the image URL by at minimum checking for 
// a http:// or https:// prefix and require a non-empty description.

//program will be similar to a Todo list application
//create an array to hold the images with their captions
//push the new items into the array when Add Image is clicked
//then post to server

var imagesArray = [];

//1. Select the element that you want to listen for events on
//2. Add the event listener
//3. Create a function to run when that event happens.

var form = $('.addImage');

//when form is submitted run the function
form.on('submit', function(e) {

	//prevent the default behavior of form being sumbitted 
	e.preventDefault(); 

	var URL = $('.imageURL').val();
	var caption = $('.imageCaption').val();

	console.log(URL);
	console.log(caption);

	//check that prefix of url is correct
	if ((URL.substring(0,7) !== 'http://') || (URL.substring(0,8) !== 'https://')) {
		alert('The URL should start with http:// or https://')
		console.log(URL.substring(0,8));
		return;  
	}

	else if {
		(caption === '') {
			console.log('Caption cannot be blank');
			return;  
	 }}
		
	}

	console.log('success!');

})


