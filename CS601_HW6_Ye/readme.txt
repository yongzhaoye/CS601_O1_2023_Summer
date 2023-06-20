For this week's assgnment, I using Vue.js, HTML, and CSS. The application allows the user to view four images and interact with them.

Vue.js is the backbone of this web. It is used to dynamically render the images, change their visibility, and handle user interactions like hovering over an image.

Image Hover: This feature is implemented using Vue.js directives and methods. The mouseover and mouseout directives are attached to the image elements, and they trigger the hoverImage() and unhoverImage() methods respectively. These methods switch the showing property of the corresponding image object between two different image URLs, giving the illusion of a new picture when an image is hovered over.

Toggle Visibility: One of the powerful features of Vue.js is its ability to easily show or hide elements based on certain conditions. In this application, the visibility of the images is toggled with the v-if directive. When the user clicks a button, the toggleImages() method changes the isVisible property of all image objects, causing the images to be shown or hidden.

Counting Visible Images: Vue.js' array methods and computed properties are leveraged to count the number of images currently visible. A filter is applied to the images array to create a new array of only visible images, and then the length of this new array is displayed. This dynamic count updates whenever the visibility of the images is toggled.

Difficulties: One challenge was managing the image hover functionality. It required keeping track of which image is currently being hovered over and ensuring the correct image source is shown at the right time.
