const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;
const lowCharWarning = 10;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= lowCharWarning) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    productNameInputElement.classList.remove("error");
    remainingCharsElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning", "error");
    productNameInputElement.classList.remove("warning", "error");
  }

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
