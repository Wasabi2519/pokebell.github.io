const numberMap = {
  "11": "あ",
  "12": "い",
  "13": "う",
  "14": "え",
  "15": "お",
  "16": "A",
  "17": "B",
  "18": "C",
  "19": "D",
  "20": "10",
  "21": "か",
  "22": "き",
  "23": "く",
  "24": "け",
  "25": "こ",
  "26": "F",
  "27": "G",
  "28": "H",
  "29": "I",
  "20": "J",
  "31": "さ",
  "32": "し",
  "33": "す",
  "34": "せ",
  "35": "そ",
  "36": "K",
  "37": "L",
  "38": "M",
  "39": "N",
  "30": "O",
  "41": "た",
  "42": "ち",
  "43": "つ",
  "44": "て",
  "45": "と",
  "46": "P",
  "47": "Q",
  "48": "R",
  "49": "S",
  "40": "T",
  "51": "な",
  "52": "に",
  "53": "ぬ",
  "54": "ね",
  "55": "の",
  "56": "U",
  "57": "V",
  "58": "W",
  "59": "X",
  "50": "Y",
  "61": "は",
  "62": "ひ",
  "63": "ふ",
  "64": "へ",
  "65": "ほ",
  "66": "Z",
  "67": "?",
  "68": "!",
  "60": "-",
  "70": "/",
  "71": "ま",
  "72": "み",
  "73": "む",
  "74": "め",
  "75": "も",
  "76": "¥",
  "77": "&",
  "78": "🕒",
  "70": "☎",
  "80": "",
  "81": "や",
  "82": "(",
  "83": "ゆ",
  "84": ")",
  "85": "よ",
  "86": "*",
  "87": "#",
  "88": " ",
  "89": "",
  "90": "5",
  "91": "ら",
  "92": "り",
  "93": "る",
  "94": "れ",
  "95": "ろ",
  "96": "1",
  "97": "2",
  "98": "3",
  "99": "4",
  "01": "わ",
  "02": "を",
  "03": "ん",
  "04": "ﾞ",
  "05": "ﾟ",
  "06": "6",
  "07": "7",
  "08": "8",
  "09": "9",
  "00": "0",

};

function convertToHiraganaOrNumber() {
const inputElement = document.getElementById("input-text");
const inputText = inputElement.value;

let outputText = "";
if (/^\d+$/.test(inputText)) {
  // 数字の場合、ひらがなに変換する
  for (let i = 0; i < inputText.length; i += 2) {
    const pair = inputText.slice(i, i + 2);
    const hiragana = numberMap[pair];
    outputText += hiragana ? hiragana : "";
  }
} else {
  // ひらがなの場合、数字に変換する
  const hiraganaMap = {};
  for (const pair in numberMap) {
    const hiragana = numberMap[pair];
    hiraganaMap[hiragana] = pair;
  }
  for (let i = 0; i < inputText.length; i++) {
    const hiragana = inputText[i];
    const number = hiraganaMap[hiragana];
    outputText += number ? number : "";
  }
}

document.getElementById("output-text").textContent = outputText;
}