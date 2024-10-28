console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

function callbackFunction(userName, userRole) {
  console.log(`Welcome, ${userName}! You are logged in as ${userRole}.`);
}

console.log("Call with named Function");
handleUserLogin(callbackFunction);

console.log("Call with anon Function");
handleUserLogin((userName, userRole) => {
  console.log(`Welcome, ${userName}! You are logged in as ${userRole}.`);
});

// You should write a callback function in two different ways.
// In both cases your callback function should accept two parameters: "userName" and "userRole".
// The following message should be logged to the console:
// "Welcome ${userName}! You are logged in now as ${userRole}."

// 1.  Write a function with the "function" keyword named "showWelcomeMessage".
//     Call "handleUserLogin" and pass your callback function as the first argument.
//     (You should see the log from your callback message)

// 2.  Call "handleUserLogin" again but this time write the callback function as an anonymous function **inside** the function call (i.e. between the round brackets).
//     (You should see the log from your callback message)
