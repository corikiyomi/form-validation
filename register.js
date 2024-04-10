function checkForm() {
   // references
   let form = document.querySelector("form");
   let fullName = document.getElementById("fullName");
   let email = document.getElementById("email");
   let password = document.getElementById("password");
   let passConfirm = document.getElementById("passwordConfirm");
   let formErrors = document.getElementById("formErrors");
   let submit = document.getElementById("submit");
   let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

   // reset formErrors div
   formErrors.innerHTML = "";

   // create ul
   let ul = document.createElement("ul");
   formErrors.appendChild(ul);

   let invalidInputs = [];

   // fullName check
   try {
       if (fullName.value == "") {
           invalidInputs.push(fullName);
           throw new Error("Missing full name.");
       } else {
           fullName.classList.remove("error");
       } 
   } catch(error) {
        let nameError = document.createElement("li");
        nameError.innerHTML = error.message;
        ul.appendChild(nameError);
   }

   // email check
   try {
       if (!emailRegEx.test(email.value)) {
           invalidInputs.push(email);
           throw new Error("Invalid or missing email address.");
       } else {
           email.classList.remove("error");
       }
   } catch(error) {
       let emailError = document.createElement("li");
       emailError.innerHTML = error.message;
       ul.appendChild(emailError);
   }

   // password checks
   try {
       if (password.value.length < 10 || password.value.length > 20) {
           invalidInputs.push(password);
           throw new Error("Password must be between 10 and 20 characters.");
       }
   } catch(error) {
       let lengthError = document.createElement("li");
       lengthError.innerHTML = error.message;
       ul.appendChild(lengthError);
   }
   try {
        let reLower = /.*[a-z]/;
        if (!reLower.test(password)) {
            if (!(password in invalidInputs)) {
                invalidInputs.push(password);
            }
            throw new Error("Password must contain at least one lowercase character.");
        }
   } catch(error) {
       let lowerError = document.createElement("li");
       lowerError.innerHTML = error.message;
       ul.appendChild(lowerError);
   }
   try {
       let reUpper = /.*[A-Z]/;
       if (!reUpper.test(password)) {
           invalidInputs.push(password);
           throw new Error("Password must contain at least one uppercase character.");
       }
   } catch(error) {
       let upperError = document.createElement("li");
       upperError.innerHTML = error.message;
       ul.appendChild(upperError);
   }
   try {
       let reDigit = /.*[0-9]/;
       if (!reDigit.test(password)) {
           if (!(password in invalidInputs)) {
               invalidInputs.push(password);
           }
           throw new Error("Password must contain at least one digit.");
       }
   } catch(error) {
       let digitError = document.createElement("li");
       digitError.innerHTML = error.message;
       ul.appendChild(digitError);
   }
   try {
       if (passConfirm !== password) {
           invalidInputs.push(passConfirm);
           throw new Error("Password and confirmation password don't match.");
       }
   } catch(error) {
       let passMatch = document.createElement("li");
       passMatch.innerHTML = error.message;
       ul.appendChild(passMatch);
   }


    // if no errors exist
   if (invalidInputs.length == 0) {
       formErrors.classList.add("hide");
       formErrors.classList.remove("error");
   } else {
       formErrors.classList.remove("hide");
       for (let x of invalidInputs) {
           x.classList.add("error");
        }
    }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});