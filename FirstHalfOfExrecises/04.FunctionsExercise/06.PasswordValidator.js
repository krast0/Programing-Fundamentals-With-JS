<<<<<<< HEAD
function passValidator(pass) {
  // •	The length should be 6 - 10 characters (inclusive)
  // •	It should consist only of letters and digits
  // •	It should have at least 2 digits
  // If a password is a valid print: "Password is valid".
  // If it is NOT valid, for every unfulfilled rule print a message:
  // •	"Password must be between 6 and 10 characters"
  // •	"Password must consist only of letters and digits"
  // •	"Password must have at least 2 digits"

  let lenghtValidation = function (password) {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    } else {
      return false;
    }
  };

  let checkLettersAndDigits = function (password) {
    for (let i = 0; i < password.length; i++) {
      const element = password[i];
      let codeElement = element.charCodeAt(0);
      if (
        !(codeElement > 47 && codeElement < 58) &&
        !(codeElement > 64 && codeElement < 91) &&
        !(codeElement > 96 && codeElement < 123)
      ) {
        return false;
      }
    }
    return true
  };


  let checkForTwoDigits = function(password){
    let count = 0
    for (const element of password) {
        
        let codeElement = element.charCodeAt(0)
        if(codeElement >= 48 && codeElement <= 57){
            count++
        }

    }
    if(count >= 2){
        return true
    }else{
        return false
    }
  }
  let isLenghtValid = lenghtValidation(pass)
  let isOnlyLettersAndDigits = checkLettersAndDigits(pass)
  let hasTwoDigits = checkForTwoDigits(pass)
  
if(isLenghtValid && isOnlyLettersAndDigits && hasTwoDigits){
    console.log(`Password is valid`)
}
if(!isLenghtValid){
    console.log("Password must be between 6 and 10 characters");
}
if(!isOnlyLettersAndDigits){
    console.log("Password must consist only of letters and digits");
}
if(!hasTwoDigits){
    console.log(`Password must have at least 2 digits`);
}



}
passValidator("MyPass123");
=======
function passValidator(pass) {
  // •	The length should be 6 - 10 characters (inclusive)
  // •	It should consist only of letters and digits
  // •	It should have at least 2 digits
  // If a password is a valid print: "Password is valid".
  // If it is NOT valid, for every unfulfilled rule print a message:
  // •	"Password must be between 6 and 10 characters"
  // •	"Password must consist only of letters and digits"
  // •	"Password must have at least 2 digits"

  let lenghtValidation = function (password) {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    } else {
      return false;
    }
  };

  let checkLettersAndDigits = function (password) {
    for (let i = 0; i < password.length; i++) {
      const element = password[i];
      let codeElement = element.charCodeAt(0);
      if (
        !(codeElement > 47 && codeElement < 58) &&
        !(codeElement > 64 && codeElement < 91) &&
        !(codeElement > 96 && codeElement < 123)
      ) {
        return false;
      }
    }
    return true
  };


  let checkForTwoDigits = function(password){
    let count = 0
    for (const element of password) {
        
        let codeElement = element.charCodeAt(0)
        if(codeElement >= 48 && codeElement <= 57){
            count++
        }

    }
    if(count >= 2){
        return true
    }else{
        return false
    }
  }
  let isLenghtValid = lenghtValidation(pass)
  let isOnlyLettersAndDigits = checkLettersAndDigits(pass)
  let hasTwoDigits = checkForTwoDigits(pass)
  
if(isLenghtValid && isOnlyLettersAndDigits && hasTwoDigits){
    console.log(`Password is valid`)
}
if(!isLenghtValid){
    console.log("Password must be between 6 and 10 characters");
}
if(!isOnlyLettersAndDigits){
    console.log("Password must consist only of letters and digits");
}
if(!hasTwoDigits){
    console.log(`Password must have at least 2 digits`);
}



}
passValidator("MyPass123");
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
