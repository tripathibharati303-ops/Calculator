# Calculator

A small, clean calculator built with plain HTML, CSS and JavaScript. No frameworks, no libraries, no build step.

**Live demo:** https://tripathibharati303-ops.github.io/Calculator/

## Features

- Addition, subtraction, multiplication and division
- Decimal numbers
- Result stays on screen, so you can keep calculating with it
- `Clear` button resets everything
- Dark rounded design with orange operator buttons
- One click handler for the whole keypad (event delegation)

## Project structure

```
Calculator/
├── index.html        # markup: display + keypad
├── calculator.css    # styling
├── calaculator.js    # calculator logic
└── README.md
```

> **Important:** `index.html` loads the script as `calaculator.js` (with that spelling), so the file in the repo must have exactly the same name. File names are case-sensitive on GitHub Pages. If you rename the script to `calculator.js`, update the `<script src="...">` line too.

## Run it

Open `index.html` in your browser, or serve the folder:

```bash
cd Calculator
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Put `index.html`, `calculator.css` and `calaculator.js` in the **root** of the repository.
2. Go to **Settings → Pages → Deploy from a branch**, choose your branch and `/ (root)`.
3. Wait for the "pages build and deployment" action to finish, then open https://tripathibharati303-ops.github.io/Calculator/

## How it works

The keypad is one `.row` container with a single `onclick="calculate(event)"`. The function reads which button was clicked and decides what to do:

| Button type | Class | What happens |
| --- | --- | --- |
| Digits and `.` | `btn` | Appended to `currentValue` and shown on the display |
| Operators `+ - * /` | `btnop` | `currentValue` is saved to `storedValue`, the operator is remembered, input is cleared |
| `=` | `btn` | Converts both values with `Number()`, applies the operator and shows the result |
| `Clear` | `btn` | Resets `currentValue`, `storedValue`, `operator` and the display |

State lives in three variables: `currentValue`, `storedValue` and `operator`.

## Customising

- **Colours** → `.all` (body), `.btn` (number keys), `.btnop` (operator keys) in `calculator.css`
- **Size** → `.all` width/height and `.btn` / `.btnop` size
- **Display text** → `.multiply` (font size, colour, minimum height)

## Known limitations and ideas

- Only one operation at a time: `3 + 4 + 5` does not chain, because the second `+` overwrites the stored value. Calculating on each operator press would fix it.
- Pressing `=` without choosing an operator shows `undefined`.
- Dividing by zero shows `Infinity`.
- A number can contain more than one `.` (for example `1.2.3`).
- The display does not show the chosen operator.
- No keyboard support yet.
- Possible additions: backspace, percentage, `+/-`, keyboard input, history.

## Tech

HTML5 · CSS3 (grid layout) · Vanilla JavaScript

© 2026 Bharati Tripathi
