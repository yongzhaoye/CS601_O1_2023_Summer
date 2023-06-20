function toggleDescription(index) {
    var description = document.getElementById('description' + index);
    description.classList.toggle('hidden');
  }

// The images you want to show
var images = ["Images/HomeTownImage1.webp", "Images/HomeTownImage2.webp", "Images/HomeTownImage3.webp", "Images/HomeTownImage4.webp"];

// Keep track of the current image
var currentImageIndex = 0;

// Get the image and button elements
var imageElement = document.getElementById("image");
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");

// Add event listener to the previous button
previousButton.addEventListener("click", function() {
  // Decrease the currentImageIndex
  currentImageIndex--;

  // If we're at the first image, loop back to the last image
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  // Update the image
  imageElement.src = images[currentImageIndex];
});

// Add event listener to the next button
nextButton.addEventListener("click", function() {
  // Increase the currentImageIndex
  currentImageIndex++;

  // If we're at the last image, loop back to the first image
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Update the image
  imageElement.src = images[currentImageIndex];
});

