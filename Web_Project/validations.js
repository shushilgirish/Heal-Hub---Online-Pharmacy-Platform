function validateForm() {
    // Declare variables for validity flags
    let firstNameValid = false;
    let lastNameValid = false;
    let emailValid = false;
    let phoneValid = false;
    let passwordValid = false;

    // Get references to form elements
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('floatingInput');
    // const phoneInput = document.getElementById('phone'); 
    const passwordInput = document.getElementById('floatingPassword');

    // Validate first name
    const fnameRegex = /^[a-zA-Z ]+$/; 
    if (fnameRegex.test(firstNameInput.value.trim())) {
    firstNameValid = true;
    firstNameInput.classList.remove('is-invalid');
    } else {
    firstNameValid = false;
    firstNameInput.classList.add('is-invalid');
    }

    // Validate last name
    const lnameRegex = /^[a-zA-Z ]+$/; 
    if (lnameRegex.test(lastNameInput.value.trim())) {
    lastNameValid = true;
    lastNameInput.classList.remove('is-invalid');
    } else {
    lastNameValid = false;
    lastNameInput.classList.add('is-invalid');
    }


    // Validate email (using regular expression for format check)
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(emailInput.value.trim())) {
        emailValid = true;
        emailInput.classList.remove('is-invalid');
    } else {
        emailValid = false;
        emailInput.classList.add('is-invalid');
    }

    // Validate phone number (consider more comprehensive validation if needed)
    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener("input", validatePhoneNumber);

    function validatePhoneNumber() {
    const phoneRegex = /^\d{10}$/; // Corrected regular expression

    if (phoneInput.value.trim().length === 10 && phoneRegex.test(phoneInput.value.trim())) {
      phoneValid = true;
      phoneInput.classList.remove('is-invalid');
    } else {
      phoneValid = false;
      phoneInput.classList.add('is-invalid');
    }
  }
   



    // Validate password (enhanced regular expression)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,}$/;
    if (passwordRegex.test(passwordInput.value.trim())) {
        passwordValid = true;
        passwordInput.classList.remove('is-invalid');
    } else {
        passwordValid = false;
        passwordInput.classList.add('is-invalid');
    }

    // Prevent form submission if any field is invalid
    if (!firstNameValid || !lastNameValid || !emailValid || !phoneValid || !passwordValid) {
        return false; // Prevent submission
    } else {
        return true; // Allow submission
    }
}



var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate)

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate)

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate)

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate)



var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);



var validName = false;
var validEmail = false;
var validPhone = false;
//regular expressions
var regExName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@(northeastern.edu)$/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;



//funtion validate
function validate(e) {
    var value = e.target.value;
    var type = this.id;
    var em = "error_" + type;
  
    switch (type) {
      case "firstName":
        var errorMessage = "";
        if (!value.trim()) {
          errorMessage = "Field can't be null";
        } else if (!value.trim().match(regExName)) {
          errorMessage = "Invalid name, please enter valid name";
        } else if (value.length < 3 || value.length > 50) { 
          errorMessage = "Name should be between 3 and 50 characters";
        }
  
        if (errorMessage) {
          document.getElementById(em).textContent = errorMessage;
          document.getElementById(em).style.display = "block";
          this.style.border = "2px solid red";
          validName = false;
        } else {
          document.getElementById(em).style.display = "none";
          this.style.border = "";
          validName = true;
        }
        break;

        case "lastName":
        var errorMessage = "";
        if (!value.trim()) {
          errorMessage = "Field can't be null";
        } else if (!value.trim().match(regExName)) {
          errorMessage = "Invalid name, please enter valid name";
        } else if (value.length < 3 || value.length > 50) { 
          errorMessage = "Name should be between 3 and 50 characters";
        }
  
        if (errorMessage) {
          document.getElementById(em).textContent = errorMessage;
          document.getElementById(em).style.display = "block";
          this.style.border = "2px solid red";
          validName = false;
        } else {
          document.getElementById(em).style.display = "none";
          this.style.border = "";
          validName = true;
        }
        break;

        case "emailId" :
        var errorMessage = "";
        if (!value.trim()) {
          errorMessage = "Field can't be null";
        }else if (!value.trim().match(regExEmail)) {
            errorMessage = "Invalid emailID, please enter a valid emailId ";
        } else if (value.length < 3 || value.length > 50) { 
            errorMessage = "Email should be between 3 and 50 characters";
        }

        if (errorMessage) {
            document.getElementById(em).textContent = errorMessage;
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validEmail = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validEmail = true;
          }
          break;

         case "phoneNumber":
          var errorMessage = "";
          if (!value.trim()) {
            errorMessage = "Field can't be null";
          } /*else if (!value.trim().match(/^\d{10}$/)) { 
            errorMessage = "Invalid number, please enter a valid 10-digit phone number"; */
          else if (!value.trim().match(regExPhone)){
              errorMessage = "Phone number should have 10 digits and in the format xxx-xxx-xxxx"
          } 

          if (errorMessage) {
            document.getElementById(em).textContent = errorMessage;
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validPhone = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validPhone = true;
          }
          break;

          case "zipcode":
          var errorMessage = "";
          if (!value.trim()) {
            errorMessage = "Field can't be null";
          } 
          else if (!value.trim().match(regExZipcode)){
              errorMessage = "Zip code should have a max of 5 digits"
          } /*else if (value.length !== 10) { 
            errorMessage = "Phone number should contain 10 digits";
          } */

          if (errorMessage) {
            document.getElementById(em).textContent = errorMessage;
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validPhone = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validPhone = true;
          }
          break;

          case "comments":
          var errorMessage = "";
          if (!value.trim()) {
            errorMessage = "Field can't be null";
          } else if (value.length < 3 || value.length > 100) { 
            errorMessage = "Comments should be between 3 and 100 characters";
        }

          if (errorMessage) {
            document.getElementById(em).textContent = errorMessage;
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validComments = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validComments = true;
          }

            break;
     
    }

    

  
      

    
  
    checkSubmitButton();
  }
  
  function checkSubmitButton() {
    var submitButton = document.querySelector("form input[type='Submit']");
    submitButton.disabled = !(validName && validEmail && validPhone && validComments);
  }


  function submitted(e) {
    e.preventDefault(); // Prevent default form submission
    if (validName && validEmail && validPhone && validComments) {
        // Get form data
        var formData = new FormData(this);

        storeDataInLocalStorage(formData);

        window.location.href = "table.html";

        alert("Data entered successfully and stored in local storage.");
    } else {
        alert("Please enter valid data.");
    }
}

function storeDataInLocalStorage(formData) {
  // Iterate through form data and store key-value pairs
  for (var pair of formData.entries()) {
      localStorage.setItem(pair[0], pair[1]);
  }
} 






