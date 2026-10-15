// Store the decimal Unicode codes for the emojis in an array.
const emojiCodes = [
  128558,
  128513,
  128514,
  128515,
  128516,
  128525,
  128526,
  128540,
  128561,
  128564,
  128578,
  128579
];

// Find the empty gallery container from the HTML.
const gallery = document.getElementById("gallery");

// Create a function that controls how many emojis are displayed.
function showEmojis(count = emojiCodes.length) {
    gallery.innerHTML = "";

  for (let index = 0; index < count; index++) {
    const code = emojiCodes[index];

    const card = document.createElement("div");
    card.classList.add("emoji-card");

    const emoji = document.createElement("p");
    emoji.classList.add("emoji");
    emoji.textContent = String.fromCodePoint(code);

    const codeText = document.createElement("p");
    codeText.classList.add("code");
    codeText.textContent = code;

    card.appendChild(emoji);
    card.appendChild(codeText);

    gallery.appendChild(card);
  }
}

// Show all emojis when page loads
showEmojis();