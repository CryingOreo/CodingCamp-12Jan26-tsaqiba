console.log ('This is a log from script.js');

// call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // prompt the user for their name
     let userResponse = prompt("Hi, What's your name?");
     console.log("User's name is: " + userResponse);

    // if userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
       userResponse = "Stranger from the Internet";
    }

    // update the welcome-speech element with a personalized message
   document.getElementById('welcome-speech').textContent = `Welcome to Nayo's Portfolio, ${userResponse}!`;
}

//placeholder for validation function
function validate form() {
    // validation code will go here
}