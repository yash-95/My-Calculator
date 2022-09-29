function clr()  {
    document.getElementById('calField').value = null; // For clearing the values
   }
  
  function dis(val) {
    document.getElementById('calField').value += val // For making the button input the value to the input field
   }
  
  function solve() {
    let x = document.getElementById('calField').value; // For solving the sum
    let y = eval(x);
    document.getElementById('calField').value = y;
  }
  