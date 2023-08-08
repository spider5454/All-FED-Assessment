// Get all the elements with the class "key"
const keys = document.querySelectorAll('.key');
const inputDisplay = document.getElementById('input');
const outputDisplay = document.getElementById('output');

// Add click event listeners to the keys
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.dataset.key;
    
    // Handle different key values
    if (keyValue === 'clear') {
      inputDisplay.value = '';
      outputDisplay.value = '';
    } else if (keyValue === '=') {
      try {
        outputDisplay.value = eval(inputDisplay.value);
      } catch (error) {
        outputDisplay.value = 'Error';
      }
    } else {
      inputDisplay.value += keyValue;
    }
  });
});
