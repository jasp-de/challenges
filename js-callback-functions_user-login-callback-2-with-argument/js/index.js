console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
let userName = "Jasper";

function showWelcomeMessage(userName) {
  console.log("Welcome " + userName + ", You are logged in now.");
}

console.log("showWelcomeMessage(userName);");
showWelcomeMessage(userName);

console.log("handleUserLogin(showWelcomeMessage);");
handleUserLogin(showWelcomeMessage);

console.log("handleUserLogin with anon");

handleUserLogin(() => {
  console.log("Welcome " + userName + ", You are logged in now.");
});
