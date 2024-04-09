// The register.js file registers a click event handler for the Register button that prevents the form from submitting. The event handler calls checkForm() to perform data validation

// save global references for the form and input fields
let form = document.querySelector("form");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passConfirm = document.getElementById("passwordConfirm");
let formErrors = document.getElementById("formErrors");
let submit = document.getElementById("submit");

form = false;

// create function checkForm()
function checkForm(e) {
   // prevent default for submission
   e.preventDefault();

   // if form validation errors exist:
   if (form == false) {

      // Display the formErrors <div> by removing the hide class
      formErrors.classList.remove("hide");

      // Display each of the associated error messages in the formErrors <div> using an unordered list. The error message must be displayed in the order the validation is performed, following the order specified below
      formErrors.innerHTML += error;

      // Add the error class to each <input> element with invalid input
      let invalidInput = document.getElementsByClassName("invalid");
      for (let elem of invalidInput) {
         elem.classList.add("error");
      }

   } else if (form == true) { // if no form validation errors exist:
      // Hide the formErrors <div> by adding the hide class
      formErrors.classList.add("hide");

      // Remove the error class from all text, email, and password <input> elements
      fullName.classList.remove("error");
      email.classList.remove("error");
      password.classList.remove("error");

   }
}

// Perform the following form validations in the order provided and display all error messages that apply:


   // ensure a full name with length greater than or equal to 1 was provided

      // otherwise, display "Missing full name"

   // Ensure that an email address was provided and email address matches the regular expression:
   // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/

   
      // otherwise, display "Invalid or missing email address."

   // Ensure the password has 10 to 20 characters

      // otherwise, display "Password must be between 10 and 20 characters."

   // Ensure the password contains at least one lowercase character (use a regular expression)

      // otherwise, display "Password must contain at least one lowercase character."

   // Ensure the password contains at least one uppercase character (use a regular expression)

      // otherwise, display "Password must contain at least one uppercase character."

   // Ensure the password contains at least one digit (use a regular expression)

      // otherwise, display "Password must contain at least one digit."

   // Ensure the password and confirmation password match

      // otherwise, display "Password and confirmation password don't match."

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});