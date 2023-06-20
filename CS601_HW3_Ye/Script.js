// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

document.getElementById('startButton').addEventListener('click', function() {
    // Initial welcome message
    alert("Welcome to the program!");

    // Ask for visitor's name
    var visitorName = prompt("What's your name?");
    alert(`Welcome ${visitorName}!`);

    while (true) {
        // Ask for two numbers
        var num1 = prompt("Enter the first number");

        //check first input number
        while (isNaN(num1) || num1.trim() == '') {
            alert("Please enter a valid number!");
            num1 = prompt("Enter the first number");
        }

        var num2 = prompt("Enter the second number");
        //check second input number
        while (isNaN(num2) || num2.trim() == '') {
            alert("Please enter a valid number!");
            num2 = prompt("Enter the second number");
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Calculate the sum of the two numbers
        var sum = addNumbers(num1, num2);
        alert(`The sum of your two numbers is: ${sum}`);

        // Check if the sum is greater than or less than 10
        if (sum > 10) {
            alert("That is a big number.");
        } else {
            alert("That is a small number.");
        }

        // Ask if the visitor wants to continue
        var continueResponse = prompt("Do you want to continue adding numbers? (yes/no)");
        if (continueResponse.toLowerCase() !== 'yes') {
            alert("Thank you for using the program!");
            break;
        }
    }
});
