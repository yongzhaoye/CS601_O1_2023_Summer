// Create a new Vue instance
var app = new Vue({
    // Bind the Vue instance to the div element with id "app"
    el: '#app',
    // Define the data for the Vue instance
    data: {
      buttonLabel: 'Show Images',
      images: [
        // Each image object has an id, initial image URL, hover image URL, current showing image URL, visibility status, and a description
        { id: 1, initial: "Images/Image1.webp", hover: "Images/Image2.webp", showing: "Images/Image1.webp", isVisible: false, description: "Golden Retriever" },
        { id: 2, initial: "Images/Image3.webp", hover: "Images/Image4.webp", showing: "Images/Image3.webp", isVisible: false, description: "Corgi" },
        { id: 3, initial: "Images/Image5.webp", hover: "Images/Image6.webp", showing: "Images/Image5.webp", isVisible: false, description: "Shiba Inu" },
        { id: 4, initial: "Images/Image7.webp", hover: "Images/Image8.webp", showing: "Images/Image7.webp", isVisible: false, description: "Bulldog" }
      ]
    },
    // Define the methods for the Vue instance
    methods: {
      // The hoverImage method changes the showing property of the image to the hover image URL
      hoverImage(id) {
        let image = this.images.find(img => img.id === id);
        image.showing = image.hover;
      },
      // The unhoverImage method changes the showing property of the image back to the initial image URL
      unhoverImage(id) {
        let image = this.images.find(img => img.id === id);
        image.showing = image.initial;
      },
      // The toggleImages method changes the visibility status of all images and updates the button label
      toggleImages() {
        for (let image of this.images) {
          image.isVisible = !image.isVisible;
        }
        this.buttonLabel = this.images[0].isVisible ? 'Hide Images' : 'Show Images';
      }
    }
  });
  