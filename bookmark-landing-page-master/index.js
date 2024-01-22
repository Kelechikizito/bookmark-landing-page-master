
const form = $('form');
const formBtn = $('.form-btn');
const email = $('input[type="email]');

function validateEmail() {
    const isEmailValid = email[0].validity.valid;
    const errorMsg = $('error-msg');

    console.log(isEmailValid)

    // if (!isEmailValid) {
    //     errorMsg.css('display', 'inline-block');
    // } else {
        
    // }
}

formBtn.click(function (e) { 

    if (!form[0].checkValidity()) {
        validateEmail();
        e.preventDefault();
    }
    e.preventDefault();

    
});
