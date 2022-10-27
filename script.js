const form = document.querySelector('form');

const email = {
	name: 'mail',
	id: document.getElementById(`mail`),
	errorSpan: document.getElementById(`mail-span`),
	errorText: 'Please enter an e-mail address Fool.',
};

const country = {
	name: 'country',
	id: document.getElementById(`country`),
	errorSpan: document.getElementById(`country-span`),
	errorText: 'Please enter the name of a country.',
};

const zip = {
	name: 'mail',
	id: document.getElementById(`zip`),
	errorSpan: document.getElementById(`zip-span`),
	errorText: 'Please enter a zip code.',
};

const password = {
	name: 'password',
	id: document.getElementById(`password`),
	errorSpan: document.getElementById(`password-span`),
	errorText: 'Please enter a password.',
};

const password2 = {
	name: 'password2',
	id: document.getElementById(`password2`),
	errorSpan: document.getElementById(`password2-span`),
	errorText: 'Please confirm your password.',
};

function inputError(input) {
	input.id.addEventListener('input', (event) => {
		// Each time the user types something, we check if the
		// form fields are valid.

		if (input.id.validity.valid) {
			// In case there is an error message visible, if the field
			// is valid, we remove the error message.
			input.errorSpan.textContent = ''; // Reset the content of the message
			input.errorSpan.className = 'error'; // Reset the visual state of the message
		} else {
			// If there is still an error, show the correct error
			showError(input);
		}
	});
}

inputError(email);
inputError(country);
inputError(zip);
inputError(password);
inputError(password2);

form.addEventListener('submit', (event) => {
	event.preventDefault();
	// if the email field is valid, we let the form submit
	if (
		!email.id.validity.valid ||
		!country.id.validity.valid ||
		!zip.id.validity.valid ||
		!password.id.validity.valid ||
		!(password.id.value == password2.id.value)
	) {
		// Then we prevent the form from being sent by canceling the event
		// event.preventDefault();
		if (!(password.id.value == password2.id.value)) {
			password2.errorSpan.className = 'error active';
			password2.errorSpan.textContent = "Password doesn't match";
		}
		alert('Please fix the errors on the form');
	} else {
		alert('High-Five!!! Good Job!');
	}
});

function showError(input) {
	if (input.id.validity.valueMissing) {
		// If the field is empty,
		// display the following error message.
		input.errorSpan.textContent = input.errorText;
	} else if (input.id.validity.typeMismatch) {
		// If the field doesn't contain an email address,
		// display the following error message.
		input.errorSpan.textContent = input.errorText;
	} else if (input.id.validity.tooShort) {
		// If the data is too short,
		// display the following error message.
		input.errorSpan.textContent = `Should be at least ${input.id.minLength} characters; you entered ${input.id.value.length}.`;
	}

	// Set the styling appropriately
	input.errorSpan.className = 'error active';
}
