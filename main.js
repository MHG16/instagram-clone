// Using the tools you've learned in class, create a responsive image board that allows you 
// to add images and captions via a url. The images that are added to the image board should be 
// saved to tiny pizza server, so that when you reload the page, they are not lost. The form to 
// add an image should properly validate the image URL by at minimum checking for 
// a http:// or https:// prefix and require a non-empty description.

//program will be similar to a Todo list application
//create an array to hold the images with their captions
//push the new items into the array when Add Image is clicked
//then post to server

const imagesArray = [];

//1. Select the element that you want to listen for events on
//2. Add the event listener
//3. Create a function to run when that event happens.

const form = $('.addToPage');

$(document).ready(function() {
	$('i').click((e) => {
    	form.slideToggle();
	});


	//load the array from the server when the page loads  
	const settings = {

		url: 'http://small-tiyfe.herokuapp.com/collections/mgrossmann',

		type: 'GET',
		dataType: 'json',
		success: handleData,  
		
		error: (err) => {
			console.log(err);
		},
		complete: function() {
			console.log('I got a response');
		}
	};

	$.ajax(settings);

	function handleData(data) {
		data.forEach((val, i, array) => {
		const boxDIV = $('<div></div');

		//sample picture: http://www.publicdomainpictures.net/pictures/160000/nahled/caribbean-shore-1457611808Jfq.jpg

		//append picture and caption to boxDIV 
		boxDIV.append('<img class="picture" src="'+ val.URL + '">');
		boxDIV.append('<p class="caption">' + val.caption +'</p>');

		//append boxDIV to section  
		$('.imageHolder').append(boxDIV);		
	});	

};

});

//when form is submitted run the function
form.on('submit', (e) => {

	//prevent the default behavior of form being sumbitted 
	e.preventDefault(); 

	const enteredURL = $('.pictureURL').val();
	const enteredCaption = $('.pictureCaption').val();


	//check that prefix of url is correct

	if ((enteredURL.substring(0, 7) !== 'http://') && (enteredURL.substring(0, 8) !== 'https://')) {
		alert('The URL must begin with http:// or https://');
		return;
	}
	//check that caption is not left blank 
	else if (enteredCaption === '') {
			alert('The caption cannot be blank');
			return;  
	 };

	//console.log('success!');

	function addImages(imagesArray) {

		const image = new Object();

		image.URL =  enteredURL;
		image.caption =  enteredCaption;

		imagesArray.unshift(image);  

		return imagesArray; 
	};

	addImages(imagesArray);

	//now use forEach to append each picture and caption to a DIV 

	imagesArray.forEach((val, i, array) => {
		const boxDIV = $('<div></div');

		//sample picture: http://www.publicdomainpictures.net/pictures/160000/nahled/caribbean-shore-1457611808Jfq.jpg



		//append picture and caption to boxDIV 
		boxDIV.append('<img class="picture" src="' + val.URL + '">');
		boxDIV.append('<p>' + enteredCaption +'</p>');

		//append boxDIV to section  
		$('.imageHolder').append(boxDIV);

	});

	//now need to 'POST' the imagesArray to the tiny pizza server
	imagesArray.forEach((image) => {

	const settings = $.ajax ({

		url: 'http://small-tiyfe.herokuapp.com/collections/mgrossmann',
		type: 'post',
		data: image, 
		datatype: 'json',
	 
		success: function(data) {
	     	console.log(imagesArray);
	 	},

		error: function(err) {
			console.log(err);
		},

		complete: function() {
			console.log('I got a message');
			}
		})

	});

});


