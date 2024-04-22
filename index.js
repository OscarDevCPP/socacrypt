// ::::::::::::::  UI ::::::::::::::

function onClickEncrypt() {
  const text = document.getElementById("input-text").value;
  if(text.length === 0) 
    return
  const isValid = isValidInput(text);
  $("#output-text").value = isValid ? encrypt(text) : "";
  $("#info-text").style.color = isValid ? "" : "red";
}

function onClickDecrypt() {
  const text = document.getElementById("input-text").value;
  const isValid = isValidInput(text);
  if(text.length == 0) 
    return
  $("#output-text").value = isValid ? decrypt(text) : "";
  $("#info-text").style.color = isValid ? "" : "red";
}


function onClickCopyText(){

}

function $(selector) {
  return document.querySelector(selector);
}


// ::::::::::::::  DOMAIN ::::::::::::::

function encrypt(text) {
  let result = "";
  for (let i = 0; text.length > i; i++) {
    switch (text[i]) {
      case "a":
        result += "ai";
        break;
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += text[i];
    }
  }
  return result;
}

function decrypt(text) {
  let regex = /ai|enter|imes|ober|ufat|[a-z]|[!?¿¡]|\s+/g;
  let match = text.match(regex);
  let result = "";
  for (let i = 0; i < match.length; i++) {
    switch (match[i]) {
      case "ai":
        result += "a";
        break;
      case "enter":
        result += "e";
        break;
      case "imes":
        result += "i";
        break;
      case "ober":
        result += "o";
        break;
      case "ufat":
        result += "u";
        break;
      default:
        result += match[i];
    }
  }
  return result;
}

function isValidInput(text) {
  return !containsMayus(text) && !containsSpecialCharacters(text) && !containsAccents(text);
}

// ::::::::::::::  UTILS ::::::::::::::
function containsMayus(text) {
  return /[A-Z]/.test(text);
}

function containsSpecialCharacters(text) {
  return /[@#$%^&*()_+\-=[\]{}':"\\|<>/]/.test(text);
}

function containsAccents(text) {
  return /[áéíóú]/i.test(text);
}

