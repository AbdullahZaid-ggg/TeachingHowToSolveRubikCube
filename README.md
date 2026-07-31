# Teaching How to Solve the Rubik's Cube

An interactive, bilingual (**English / Arabic**) web tutorial that teaches beginners how to solve a Rubik's Cube using the **Layer-by-Layer (LBL)** method — complete with a live **3D cube simulator** rendered in Three.js.

> Made by **Abdalla Zaid**

---

## 🧊 About

This website walks you through the 7 classic LBL steps — from the white cross all the way to orienting the yellow corners — with plain-language instructions, clear goals, the exact algorithms to memorize, and common mistakes to avoid.

Every step is paired with an interactive **3D Rubik's Cube** you can explore and practice on directly in your browser.

---

## ✨ Features

- **7-Step LBL Tutorial** — the complete beginner method, step by step:
  1. Solve the White Cross
  2. Solve White Corners
  3. Solve Middle Layer Edges
  4. Solve Yellow Cross
  5. Orient Yellow Edges
  6. Position Yellow Corners
  7. Orient Yellow Corners
- **Interactive 3D Cube** — built with Three.js; rotate the camera, turn any face, and watch the moves in real time
- **Scramble & Reset** — scramble the cube to practice, or reset it back to solved
- **Bilingual Support** — full Arabic (RTL) and English translations with a one-click toggle
- **Accordion Layout** — expand only the step you're working on
- **Beginner-Friendly** — algorithms, goals, tips, and common mistakes for every step
- **Fully Responsive** — works on desktop, tablet, and mobile

---

## 🎮 Controls

| Input | Action |
|-------|--------|
| **Mouse drag** | Orbit / rotate the camera |
| **Click a face** | Rotate that face |
| `R` `L` `U` `D` `F` `B` | Rotate the corresponding face |
| **Shift + key** | Rotate counterclockwise |

---

## 🚀 Getting Started

This is a **static website** — no build step or dependencies to install. Just open it in your browser:

### Option 1: Open directly

Open `index.html` in any modern browser.

### Option 2: Local server

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

Then visit `http://localhost:8000`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and content |
| **CSS3** | Styling and responsive layout |
| **JavaScript** | Tutorial logic and interactivity |
| **Three.js** | 3D cube rendering and controls |
| **Bootstrap 5** | UI framework and accordion components |

---

## 📂 Project Structure

```text
TeachingHowToSolveRubikCube/
├── index.html      # Main page with the tutorial content
├── script.js       # 3D cube rendering and interaction logic
├── lang.js         # English / Arabic translations & language toggle
└── style.css       # Custom styles
```

---

## 📖 How the LBL Method Works

1. **First Layer** — solve the white cross, then insert the four white corners.
2. **Middle Layer** — slot the four edge pieces into place.
3. **Last Layer** — form the yellow cross, position the yellow edges, then position and orient the yellow corners.

Once you master these 7 steps, you'll be able to solve any Rubik's Cube!

---

## 📄 License

This project is open-source and free to use, modify, and extend.
