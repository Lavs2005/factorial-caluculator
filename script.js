function isValidInput(n) {
    return Number.isInteger(n) && n >= 0;
  }
  
  function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  function calculateIterative() {
    const input = parseInt(document.getElementById("numberInput").value);
    const resultArea = document.getElementById("result");
  
    if (!isValidInput(input)) {
      resultArea.textContent = "Please enter a valid non-negative integer.";
      return;
    }
  
    const result = factorialIterative(input);
    resultArea.textContent = `Iterative: Factorial of ${input} is ${result}`;
  }
  
  function calculateRecursive() {
    const input = parseInt(document.getElementById("numberInput").value);
    const resultArea = document.getElementById("result");
  
    if (!isValidInput(input)) {
      resultArea.textContent = "Please enter a valid non-negative integer.";
      return;
    }
  
    const result = factorialRecursive(input);
    resultArea.textContent = `Recursive: Factorial of ${input} is ${result}`;
  }
  