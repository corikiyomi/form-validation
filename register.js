// The register.js file registers a click event handler for the Register button that prevents the form from submitting. The event handler calls checkForm() to perform data validation

// save global references for the form and input fields
let form = document.querySelector("form");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passConfirm = document.getElementById("passwordConfirm");
let formErrors = document.getElementById("formErrors");
let submit = document.getElementById("submit");
let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

// create function checkForm()
function checkForm() {
   // e.preventDefault();

   // Validation Steps
   let invalidInput = [];

   // 1. Ensure a full name with length greater than or equal to 1 was provided
   if (!fullName.length) {
      invalidInput.push(fullName);
      // otherwise, display "Missing full name"
      throw new Error("Missing full name.");
   } 
   // 2. Ensure that an email address was provided and email address matches the regular expression:
   // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
   if (!emailRegEx.test(email)) {
      invalidInput.push(email);
      // otherwise, display "Invalid or missing email address."
      throw new error("Invalid or missing email address.");
   } 
   // 3. Ensure the password has 10 to 20 characters
   if (password.length <= 10 || password.length >= 20) {
      invalidInput.push(password);
      // otherwise, display "Password must be between 10 and 20 characters."
      throw new Error("Password must be between 10 and 20 characters.");
   }
   // 4. Ensure the password contains at least one lowercase character (use a regular expression)
   let reLower = /[a-z]/;
   if (!reLower.test(password)) {
      if (!(password in invalidInput)) {
         invalidInput.push(password);
      }
      // otherwise, display "Password must contain at least one lowercase character."
      throw new Error("Password must contain at least one lowercase character.");
   }
   // 5. Ensure the password contains at least one uppercase character (use a regular expression)
   let reUpper = /[A-Z]/;
   if (!reUpper.test(password)) {
      if (!(password in invalidInput)) {
         invalidInput.push(password);
      }
      // otherwise, display "Password must contain at least one uppercase character."
      throw new Error("Password must contain at least one uppercase character.");
   }
   // 6. Ensure the password contains at least one digit (use a regular expression)
   let reDigit = /[0-9]/;
   if (!reDigit.test(password)) {
      if (!(password in invalidInput)) {
         invalidInput.push(password);
      }
      // otherwise, display "Password must contain at least one digit."
      throw new Error("Password must contain at least one digit.");
   }
   // 7. Ensure the password and confirmation password match
   if (passConfirm !== password) {
      invalidInput.push(passConfirm);
      // otherwise, display "Password and confirmation password don't match."
      throw new Error("Password and confirmation password don't match.");
   }

   // if form validation errors exist:
   if (invalidInput != []) { 
      // Display the formErrors <div> by removing the hide class
      formErrors.classList.remove("hide");
      // Display each of the associated error messages in the formErrors <div> using an unordered list.
      // create ul
      let errorsUL = formErrors.createElement("ul");

      // The error message must be displayed in the order the validation is performed, following the order specified below
      for (let i = 0; i < (invalidInput.length - 1); i++) {
         // Add the error class to each <input> element with invalid input
         invalidInput[i].classList.add("error");
         // append error message to formErrors div ul
         let li = invalidInput[i].Error;
         errorsUL.appendChild(li);
      }

   } else { // if no form validation errors exist:
      // Hide the formErrors <div> by adding the hide class
      formErrors.classList.remove("hide");
      // Remove the error class from all text, email, and password <input> elements
      let errorClass = document.getElementsByClassName("error");
      errorClass.forEach(function(item) {
         item.classList.remove("error");
      }) 
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();
   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});