// ::::::::::::::  UI ::::::::::::::

function onClickEncrypt() {
  handleClickActionButton(encrypt);
}

function onClickDecrypt() {
  handleClickActionButton(decrypt);
}

function handleClickActionButton(callback) {
  const text = document.getElementById("input-text").value;
  if (text.trim().length === 0)
    return
  const isValid = isValidInput(text);
  $("#output-text").style.display = isValid ? "block" : "none";
  $("#btn-copy").style.display = isValid ? "block" : "none";
  $("#output-text").value = isValid ? callback(text) : "";
  $("#info-text").style.color = isValid ? "" : "red";
  $("#not-message-found").style.display = isValid ? "none" : "flex";
}

async function onClickCopyText() {
  const textToCopy = document.getElementById("output-text").value
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (e) {
    console.error(e);
    var aux = document.createElement("textarea");
    aux.innerHTML = textToCopy;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }
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
  return /[@#$%^&*()_+\-=[\]{}':"\\|<>/]|[0-9]/.test(text);
}

function containsAccents(text) {
  return /[áéíóú]/i.test(text);
}

