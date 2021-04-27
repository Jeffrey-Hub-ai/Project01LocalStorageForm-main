// Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');



// Event Listeners

eventListeners();

function eventListeners() {
    // App init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    email.addEventListener('blur', validateField);
}


//Functions 

// App Initialization
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}

// Validate the fields
function validateField() {
    let errors;

    // Validate the Lenght of the field
    validateLength(this)
}