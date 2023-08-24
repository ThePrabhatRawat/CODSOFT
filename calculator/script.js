document.addEventListener('DOMContentLoaded', function() {
    const resultField = document.getElementById('result');
    const buttons = document.querySelectorAll('.button');
    const clearButton = document.getElementById('clear');
    const backspaceButton = document.getElementById('backspace');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonText = button.textContent;
        
        if (buttonText === '=') {
          calculate();
        } else if (buttonText === 'AC') {
          clearResult();
        } else if (buttonText === 'DEL') {
          backspace();
        } else {
          appendToResult(buttonText);
        }
      });
    });
    
    function appendToResult(value) {
      resultField.value += value;
    }
    
    function calculate() {
      try {
        const result = eval(resultField.value);
        resultField.value = result;
      } catch (error) {
        resultField.value = 'Error';
      }
    }
    
    function clearResult() {
      resultField.value = '';
    }
    
    function backspace() {
      const currentValue = resultField.value;
      resultField.value = currentValue.slice(0, -1);
    }
  });
  