// The register.js file registers a click event handler for the Register button that prevents the form from submitting. The event handler calls checkForm() to perform data validation

// save global references for the form and input fields
let form = document.querySelector("form");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passConfirm = document.getElementById("passwordConfirm");
let formErrors = document.getElementById("formErrors");
let submit = document.getElementById("submit");

// create function checkForm()
function checkForm(e) {
   // prevent default for submission
   e.preventDefault();

   // Validation Steps
      // save each invalid input element in a list ?
      // or add class "error" to each invalid element

   // 1. Ensure a full name with length greater than or equal to 1 was provided
      // otherwise, display "Missing full name"
   // 2. Ensure that an email address was provided and email address matches the regular expression:
   // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
      // otherwise, display "Invalid or missing email address."
   // 3. Ensure the password has 10 to 20 characters
      // otherwise, display "Password must be between 10 and 20 characters."
   // 4. Ensure the password contains at least one lowercase character (use a regular expression)
      // otherwise, display "Password must contain at least one lowercase character."
   // 5. Ensure the password contains at least one uppercase character (use a regular expression)
      // otherwise, display "Password must contain at least one uppercase character."
   // 6. Ensure the password contains at least one digit (use a regular expression)
      // otherwise, display "Password must contain at least one digit."
   // 7. Ensure the password and confirmation password match
      // otherwise, display "Password and confirmation password don't match."


   // if form validation errors exist:
   if () {

      // Display the formErrors <div> by removing the hide class

      // Display each of the associated error messages in the formErrors <div> using an unordered list. 
      // The error message must be displayed in the order the validation is performed, following the order specified below

      // Add the error class to each <input> element with invalid input

   } else { // if no form validation errors exist:
      
      // Hide the formErrors <div> by adding the hide class

      // Remove the error class from all text, email, and password <input> elements

   }
}


document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});