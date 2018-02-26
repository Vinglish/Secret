
var word = prompt("Введите слово для шифоровки"); 
var code ="";
for (var i = 0; i < word.length; i++) {
  var codepoint = word[i].charCodeAt(0); 
  codepoint+=3;
  code += String.fromCharCode(codepoint);
}
alert(code);

var word = prompt("Введите слово для дешифровки"); 
var code ="";
var numback = Number(prompt("Цифра кодировки"));
for (var i = 0; i < word.length; i++) {
  var codepoint = word[i].charCodeAt(0); 
  codepoint-=numback;
  code += String.fromCharCode(codepoint);
}
alert(code);
