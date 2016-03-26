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

var form = $('.addToPage');

$(document).ready(function() {
	$('i').click(function(e){
    form.slideToggle();
	});
});

//render takes the picture(URL) and caption from the user and then puts those in a image object.
//then image object is prepended to imagesArray 
//then iterates over the array of image objects each wih a picture(URL) and caption
//Each object is prepended to the imageHolder DIV.  

//Inputs: array of objects, each with URL and caption
//Outputs:  None

function render(arr) {

	image = {};

	image.picture = $().val();
	image.caption = $().val();

	for (var i = 0; i < imagesArray.length; i++) {
	
	$('imageHolder') = 
	
	}
	document.querySelector('.txtArea').innerHTML = todoItems; 
}










//when form is submitted run the function
form.on('submit', function(e) {

	//prevent the default behavior of form being sumbitted 
	e.preventDefault(); 

	var enteredURL = $('.pictureURL').val();
	var enteredCaption = $('.pictureCaption').val();

	console.log(enteredURL);
	console.log(enteredCaption);

	//check that prefix of url is correct
	console.log(enteredURL.substring(0, 7));
	console.log(enteredURL.substring(0, 8));

	if ((enteredURL.substring(0, 7) !== 'http://') && (enteredURL.substring(0, 8) !== 'https://')) {
		alert('The URL must begin with http:// or https://');
		return;
	}

	else if (enteredCaption === '') {
			alert('The caption cannot be blank');
			return;  
	 };

	console.log('success!');

	//if input passes validation, add image and caption to the array
	render(arr);

	

});


