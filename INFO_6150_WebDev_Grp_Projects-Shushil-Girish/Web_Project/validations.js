function validateForm() {
   
    let firstNameValid = false;
    let lastNameValid = false;
    let emailValid = false;
    let phoneValid = false;
    let passwordValid = false;

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('floatingInput');
    const phoneInput = document.getElementById('phone'); 
    const passwordInput = document.getElementById('floatingPassword');

    const fnameRegex = /^[a-zA-Z ]+$/; 
    if (fnameRegex.test(firstNameInput.value.trim())) {
        firstNameValid = true;
        firstNameInput.classList.remove('is-invalid');
    } else {
        firstNameValid = false;
        firstNameInput.classList.add('is-invalid');
    }

    const lnameRegex = /^[a-zA-Z ]+$/; 
    if (lnameRegex.test(lastNameInput.value.trim())) {
        lastNameValid = true;
        lastNameInput.classList.remove('is-invalid');
    } else {
        lastNameValid = false;
        lastNameInput.classList.add('is-invalid');
    }

  
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(emailInput.value.trim())) {
        emailValid = true;
        emailInput.classList.remove('is-invalid');
    } else {
        emailValid = false;
        emailInput.classList.add('is-invalid');
    }

    const phoneRegex = /^\d{10}$/; 
    if (phoneInput.value.trim().length === 10 && phoneRegex.test(phoneInput.value.trim())) {
        phoneValid = true;
        phoneInput.classList.remove('is-invalid');
    } else {
        phoneValid = false;
        phoneInput.classList.add('is-invalid');
    }

 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,}$/;
    if (passwordRegex.test(passwordInput.value.trim())) {
        passwordValid = true;
        passwordInput.classList.remove('is-invalid');
    } else {
        passwordValid = false;
        passwordInput.classList.add('is-invalid');
    }

    if (!firstNameValid || !lastNameValid || !emailValid || !phoneValid || !passwordValid) {
        return false; 
    } else {
      
        window.location.href = 'enter.html';
        return false; 
    }
}
