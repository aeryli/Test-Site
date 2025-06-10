const urlParams = new URLSearchParams(window.location.search);

// Check if a parameter exists
const hasParam = urlParams.has('upload');
console.log('Has upload:', hasParam);

// Get the value of a parameter
const paramValue = urlParams.get('upload');
console.log('Value of upload:', paramValue);

// Get all values of a parameter (if it exists multiple times)
const allParamValues = urlParams.getAll('upload');
console.log('All values of upload:', allParamValues);