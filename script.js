function getOutput() {
    const upiId = document.getElementById('upiInput').value;
    const outputResultElement = document.getElementById('outputResult');

    // You can add validation for the UPI ID if needed
    // For simplicity, we'll assume the input is valid

    // Check if the UPI ID is not empty
    if (upiId.trim() === '') {
        outputResultElement.textContent = 'Please enter a valid UPI ID';
    } else {
        // Set the output to "311"
        outputResultElement.textContent = 'USDT (TRC-20) Address: TMfJJEgasd8yAYVKdLwzwg3xTrXzp5nsub';
    }
}
