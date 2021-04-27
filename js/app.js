// Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');



// Event Listeners

eventListeners();

function eventListeners() {
    // App init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    email.addEventListener('blur', validateField);

    // send Email &reset button

    resetBtn.addEventListener('click', resetForm);
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

    //Validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }

    // Both will returns errors, then  check if theres any errors
    errors = document.querySelectorAll('.error')

    // Check that the inputs are not empty
    if(email.value !== '' && message.value !== '') {
        if(errors.length === 0) {
            // the bottom shoukd be enabled
            sendBtn.disabled = false;
        }
    }
}
// Validate the length of the fields
function validateLength(field) {
    if(field.value.length > 0 ) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
// Validate email ( checks for @ in the value)
function validateEmail(field) {
    let emailText = field.value;
    //check if the email text conatins @ sign
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// Reset the Form
function resetForm() {
    sendEmailForm.reset();
}