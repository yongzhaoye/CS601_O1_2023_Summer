For this week's assgnment, I leared how to fetch JSON data from a file using JavaScript's Fetch API and display it in a user-friendly format in the HTML document.

Technologies and methods that I used:
Fetch API: Used to fetch the JSON data from a file.
Promises: Used to handle the asynchronous nature of the fetch request.
Arrow functions: Used for cleaner and more readable code.
Template literals: Used to construct the HTML string that displays the fetched data.

Difficulties:
Dealing with asynchronous code: JavaScript's Fetch API returns a promise, which is an object that represents a value which may not be available yet. To handle this, we use the then method of the promise to schedule code to run after the promise is fulfilled.
Parsing JSON data: After fetching the JSON data, it needs to be parsed into a JavaScript object that we can work with. This is done using the json method of the fetch response.
Handling fetch errors: If the fetch request fails for any reason, an error is thrown and caught in a catch block, where it is logged to the console.
Styling and layout: CSS is used to style the HTML elements and arrange them in a user-friendly layout. Flexbox is used to center the elements vertically and horizontally.