function convertToHiragana(number) {
    const hiraganaMap = {
      "01": "あ",
      "02": "い"
    };
  
    const numString = String(number);
    const converted = hiraganaMap[numString];
  
    return converted ? converted : "";
  }