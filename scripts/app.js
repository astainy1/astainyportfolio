const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#003538';
	} else {
		header.style.backgroundColor = '#000';
		
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


// Block code to handle the functionality of the modal
		// Get the modal
	var modal = document.getElementById('myModal');

	// Get the images and insert the clicked image inside the modal
	var images = document.getElementsByClassName('gallery-image');
	var imagesContainer = document.querySelector('.project-img');
	var modalImg = document.getElementById('img01');

	console.log(images)
	
		for (let i = 0; i < images.length; i++) {
		images[i].onclick = function() {
			console.log(images[i])
			modal.style.visibility = "visible";
			modalImg.src = this.src;
			}
		}
		// console.log(images)



	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
		modal.style.visibility = "hidden";
	}

	// Close the modal when clicking outside of the modal content
	modal.onclick = function(event) {
		if (event.target === modal) {
			modal.style.visibility = "hidden";
		}
	}


