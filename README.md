# socacrypt

socacrypt is a small browser-based text encoder built for an Alura Latam challenge. It replaces lowercase vowels with predefined strings and can reverse those substitutions. All processing happens locally in the browser.

> This project demonstrates reversible text substitution. It is not cryptography and must not be used to protect sensitive information.

## Features

- Encodes text with the mappings `a` -> `ai`, `e` -> `enter`, `i` -> `imes`, `o` -> `ober`, and `u` -> `ufat`.
- Decodes text produced with the same mappings.
- Rejects uppercase letters, accented vowels, numbers, and several special characters.
- Copies the result to the clipboard, with a legacy browser fallback.
- Adapts its two-panel interface to mobile, tablet, and desktop screen sizes.
- Shows an empty-state illustration until a valid result is available.

## Stack

- HTML5
- CSS3 with responsive media queries
- Vanilla JavaScript
- Google Fonts (Poppins, loaded from the network)

There are no package dependencies, build tools, or installation scripts.

## Run locally

Clone the repository and serve its root directory with any static file server. For example, with Python 3:

```bash
git clone https://github.com/OscarDevCPP/socacrypt.git
cd socacrypt
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Opening `index.html` directly may also work, but clipboard behavior depends on browser security rules and is more reliable from a local server.

## Usage

1. Enter lowercase, unaccented text in the input area.
2. Select **Encriptar** to encode it or **Desencriptar** to reverse the supported substitutions.
3. Select **copiar** to copy the result.

Example:

```text
gato -> gaitober -> gato
```

## Repository structure

```text
.
|-- assets/       # Empty-state and GitHub images
|-- index.html    # Page structure and controls
|-- index.css     # Theme and responsive layout
|-- index.js      # UI handlers, validation, and substitution logic
|-- reset.css     # Browser style reset
`-- VERSION       # Current project version (0.1.0)
```

## Status and limitations

- The repository identifies the current version as `0.1.0`.
- The interface text is in Spanish.
- The encoder is a substitution exercise, not secure encryption.
- Input validation accepts some punctuation that the decoder does not preserve. For example, periods and commas can be discarded during decoding.
- Clipboard access can be restricted by the browser or page context; the application falls back to the deprecated `document.execCommand("copy")` API.
- The project has no automated test suite, package manifest, build pipeline, or declared license.
