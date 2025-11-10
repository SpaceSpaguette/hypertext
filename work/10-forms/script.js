const input = document.getElementById('insert');
const form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const value = Number(input.value); 

      if (isNaN(value)) {
        alert("Enter a value")
      }
      else if ((value < 0)) {
        alert("Add a correct number")
        
      } else if ((value % 2) === 0) {
        alert("Even")
      } else {
        alert("Odd")
      }
    });