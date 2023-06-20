document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var form = event.target;
    var actionURL = "https://cs601.bu-course-examples.com/hw4/380a98f5-5191-496f-8aa1-7acc1da83cc5";
    
    // Set the form's action attribute to the desired URL
    form.action = actionURL;
  
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var facilitator = document.getElementById("facilitator").value;
  
    // Perform client-side validation
    var isValid = true;
  
    // Validate first name
    if (!validateName(firstName)) {
      isValid = false;
      alert("First name must be at least 2 characters long and contain only alphabetic characters.");
    }
  
    // Validate last name
    if (!validateName(lastName)) {
      isValid = false;
      alert("Last name must be at least 2 characters long and contain only alphabetic characters.");
    }
  
    // Validate facilitator
    if (!validateFacilitator(facilitator)) {
      isValid = false;
      alert("Invalid facilitator name. Valid facilitators are: Jen, Behdad, Chris, Christian, Josh");
    }
  
    // If all fields pass validation, submit the form
    if (isValid) {
      form.submit(); // Use the submit() function on the form element
    }
  });
  
  // Function to validate name
  function validateName(name) {
    var nameRegex = /^[A-Za-z]{2,}$/; // Only alphabetic characters, minimum length of 2
    return nameRegex.test(name);
  }
  
  // Function to validate facilitator
  function validateFacilitator(facilitator) {
    var validFacilitators = ["Jen", "Behdad", "Chris", "Christian", "Josh"];
    return validFacilitators.includes(facilitator);
  }
  