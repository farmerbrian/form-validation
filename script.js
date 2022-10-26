const form = document.querySelector('form');
const email = document.getElementById('mail');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const emailError = document.getElementById('mail-span');
const countryError = document.getElementById('country-span');
const zipError = document.getElementById('zip-span');
const passwordError = document.getElementById('password-span');
const password2Error = document.getElementById('password2-span');

function inputError(input, error) {
	input.addEventListener('input', (event) => {
		// Each time the user types something, we check if the
		// form fields are valid.

		if (input.validity.valid) {
			// In case there is an error message visible, if the field
			// is valid, we remove the error message.
			error.textContent = ''; // Reset the content of the message
			error.className = 'error'; // Reset the visual state of the message
		} else {
			// If there is still an error, show the correct error
			showError(input, error);
		}
	});
}

inputError(email, emailError);
inputError(country, countryError);
inputError(zip, zipError);
inputError(password, passwordError);
inputError(password2, password2Error);

form.addEventListener('submit', (event) => {
	// if the email field is valid, we let the form submit
	if (!email.validity.valid) {
		// If it isn't, we display an appropriate error message
		showError();
		// Then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
});

function showError(input, error) {
	if (input.validity.valueMissing) {
		// If the field is empty,
		// display the following error message.
		error.textContent = 'You need to enter an e-mail address.';
	} else if (input.validity.typeMismatch) {
		// If the field doesn't contain an email address,
		// display the following error message.
		error.textContent =
			'Entered value needs to be an e-mail address.';
	} else if (input.validity.tooShort) {
		// If the data is too short,
		// display the following error message.
		error.textContent = `Should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
	}

	// Set the styling appropriately
	error.className = 'error active';
}
