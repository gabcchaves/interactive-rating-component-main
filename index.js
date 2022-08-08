'use strict';

// Change color of clicked button
function selectRate(button) {
	if (document.getElementsByClassName('selected').length > 0) {
		document.getElementsByClassName('selected')[0].style.backgroundColor = "var(--dark-grey)";
		document.getElementsByClassName('selected')[0].style.color = "var(--light-grey)";
		document.getElementsByClassName('selected')[0].classList.remove('selected');
	}
	this.classList.add('selected');
	this.style.backgroundColor = "var(--medium-grey)";
	this.style.color = "var(--white)";
	console.log(document.getElementsByClassName('selected'));
}

// Submit and transfer rating via HTTP GET method
function submit() {
	let rating = document.getElementsByClassName('selected')[0].id;
	window.open(`thanks.html?rating=${rating}`, '_self');
}

// Make sure DOM is fully loaded to do somethings
window.onload = () => {
	if (document.getElementsByTagName('body')[0].id === 'index-page') {
		for (let i = 1; i <= 5; i++) {
			document.getElementById('' + i).addEventListener('click', selectRate);
		}
	} else {
		document.getElementById('user-rating').appendChild(document.createTextNode(
			new URLSearchParams(location.search).get('rating')
		));
	}
};
