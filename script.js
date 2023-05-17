function convertToHiragana() {
    const input = document.getElementById("inputBox").value;
    const hiraganaMap = {
      "01": "あ",
      "02": "い"
    };

    let result = "";
    for (let i = 0; i < input.length; i += 2) {
      const pair = input.slice(i, i + 2);
      const converted = hiraganaMap[pair];
      result += converted ? converted : "";
    }

    document.getElementById("output").textContent = result;
  }