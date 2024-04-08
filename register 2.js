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
   if (!checkValidation(e)) {

      e.preventDefault();

      // Display the formErrors <div> by removing the hide class
      formErrors.classList.remove("hide");

      // Display each of the associated error messages in the formErrors <div> using an unordered list. The error message must be displayed in the order the validation is performed, following the order specified below
      // create unordered list
      const newUL = document.createElement("ul", { is: "form-errors" });

      // use a loop to append new list items to parent element newUL
      // TODO

      // display the associated error messages in the form errors div
      formErrors.innerHTML = newUL; // OR
      // formErrors.innerHTML = newListItem; 

      // Add the error class to each <input> element with invalid input
      for (item of invalidInput) {
         item.classList.add("error");
      }

   } else { // if no form validation errors exist:
      // Hide the formErrors <div> by adding the hide class
      formErrors.classList.add("hide");

      // Remove the error class from all text, email, and password <input> elements
      fullName.classList.remove("error");
      email.classList.remove("error");
      password.classList.remove("error");

   }
}

// Perform the following form validations in the order provided and display all error messages that apply:

function checkValidation() {

   let invalidInput = [];

   // ensure a full name with length greater than or equal to 1 was provided
   if (fullName.value.length == "") {
      // otherwise, display "Missing full name"
      invalidInput.append(fullName);
      throw new Error("Missing full name.");
   }
   // Ensure that an email address was provided and email address matches the regular expression:
   let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

   if (emailRegEx.test(email.value) == false) {
      // otherwise, display "Invalid or missing email address."
      invalidInput.append(email);
      throw new Error("Invalid or missing email address.");
   }
   // Ensure the password has 10 to 20 characters
   if (password.value.length < 10 || password.value.length > 20) {
      // otherwise, display "Password must be between 10 and 20 characters." 
      invalidInput.append(password);
      throw new Error("Password must be between 10 and 20 characters.");
   }
   // Ensure the password contains at least one lowercase character (use a regular expression)
   let passLowerCaseCheck = /?=.*?[a-z]/;

   if (passLowerCaseCheck.test(password.value) == false) {
      // otherwise, display "Password must contain at least one lowercase character."
      if (!(password in invalidInput)) {
         invalidInput.append(password);
      }
      throw new Error("Password must contain at least one lowercase character.");
   }
   // Ensure the password contains at least one uppercase character (use a regular expression)
   let passUpperCaseCheck = /?=.*?[A-Z]/;

   if (!(passUpperCaseCheck.test(password))) {
      // otherwise, display "Password must contain at least one uppercase character."
      if (!(password in invalidInput)) {
         invalidInput.append(password);
      }
      throw new Error("Password must contain at least one uppercase character.");
   }
   // Ensure the password contains at least one digit (use a regular expression)
   let passDigitCheck = /?=.*?[0-9]/;

   if (!passDigitCheck.password.value) {
      // otherwise, display "Password must contain at least one digit."
      if (!(password in invalidInput)) {
         invalidInput.append(password);
      }
      throw new Error("Password must contain at least one digit.");
   }
   // Ensure the password and confirmation password match
   if (password.value !== passConfirm.value) {
      // otherwise, display "Password and confirmation password don't match."
      invalidInput.append(passConfirm);
      throw new Error("Password and confirmation password don't match.")
   } 
   
   else {
      return true;
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});