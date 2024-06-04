// success message modal
const closeButton = document.getElementById('closeDialog');
const dialog = document.getElementById('dialog');

closeButton.addEventListener('click', () => {
    dialog.classList.remove('block');
    dialog.classList.add('hidden');

});

// form submit button
const submit = document.getElementById('submitBtn');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    sendEmail();
});

// if email is valid send else error
function sendEmail() {
    // user input
    const input = document.getElementById('emailInput').value;
    console.log(input);
    const error = document.getElementById('errorMsg');

    if (emailIsValid(input)) {
        error.innerHTML = "";
        successModal(dialog, input);
    } else {
        error.innerHTML = "Please enter a valid email";
    }
}

// email validation and empty input validation
function emailIsValid(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email) && email.trim() !== '') {
        return true;
    }

    return false;
}

// success modal
function successModal(modal, input) {
    // to change the email inside the modal
    let email = document.getElementById('userEmail');
    email.innerHTML = input;

    // opening the modal
    modal.classList.remove('hidden');
    modal.classList.add('block');
}
