  function convertToCharacter() {
    let input = document.getElementById("inputNumber").value;
    
    let result = "";
    for (let i = 0; i < input.length; i += 2) {
      let code = input.substr(i, 2);
      let character = String.fromCharCode(parseInt(code));
      result += character;
    }
    if (input == 11) {
        alert("あ");
      }
      if (input == 12) {
          alert("い");
        }
      if (input == 13) {
          alert("う");
        }
      if (input == 14) {
          alert("え");
        }
      if (input == 15) {
          alert("お");
        }
      if (input == 16) {
          alert("A");
        }
      if (input == 17) {
          alert("B");
        } 
      if (input == 18) {
          alert("C");
        }
      if (input == 19) {
          alert("D");
        }
    
    alert(result);
  }
  
  