// Get the button element
const button = document.getElementById('myButton');

// Set the initial count
let count = 0;

// Add an event listener for clicks on the button
button.addEventListener('click', () => {
  // Increment the count on each click
  count++;

  // Update the button's text with the count
  button.textContent = `Clicked ${count} times`;
});