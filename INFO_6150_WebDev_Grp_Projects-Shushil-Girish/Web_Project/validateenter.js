function validateForm() {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    let emailValid = emailRegex.test(emailInput.value.trim());
    let passwordValid = passwordRegex.test(passwordInput.value.trim());

    if (emailValid) {
        emailInput.classList.remove('is-invalid');
    } else {
        emailInput.classList.add('is-invalid');
    }

    if (passwordValid) {
        passwordInput.classList.remove('is-invalid');
    } else {
        passwordInput.classList.add('is-invalid');
    }

    if (emailValid && passwordValid) {
       
        window.location.href = 'login.html';
    } 

    return false;

}