# ⚽ FIFA 26 Players

A football player discovery website inspired by the FIFA gaming experience. Explore teams, browse player cards, and discover information about football players through an interactive web interface.

🌐 **Live Demo:** [fifa26play.vercel.app](https://fifa26play.vercel.app/)

💻 **GitHub Repository:** [Raghav1130/FIFA-26-players](https://github.com/Raghav1130/FIFA-26-players)

## ✨ Features

- **Team & Group Navigation** — Browse teams and groups through a structured interface.
- **FIFA-Inspired Player Cards** — Explore football players using a card-based design inspired by FIFA.
- **Player Information** — Click a player's image to access their Wikipedia introduction.
- **Dataset-Based Player Listings** — Uses player data filtered from a Kaggle FIFA dataset and a list of selected 2026 players.
- **Responsive Interface** — Built with React and Tailwind CSS for a modern web experience.
- **Live Deployment** — Hosted on Vercel and accessible online.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Tailwind CSS | Styling and responsive layouts |
| JavaScript | Application logic and interactivity |
| HTML5 | Web page structure |
| Vercel | Hosting and deployment |
| Git & GitHub | Version control and source code management |

## 📂 Project Structure

The exact structure may vary depending on the current version of the project.

```text
FIFA-26-players/
├── public/             # Static assets and public files
├── src/                # React application source code
│   ├── components/     # Reusable UI components
│   ├── assets/         # Images and other assets
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration, if present
└── README.md           # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- npm (included with Node.js)
- Git installed

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Raghav1130/FIFA-26-players.git
```

**2. Navigate to the project directory**

```bash
cd FIFA-26-players
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local website**

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

> Note: The commands assume the project uses Vite. Check `package.json` for the actual available scripts if the development command differs.

## 📊 Player Data

The project uses a Kaggle FIFA player dataset containing approximately 19,239 player records as its source dataset. A separate text file containing selected players is used to filter the records for the project.

The website uses the resulting data to display player listings without requiring every player card to be created manually.

Player data and external Wikipedia links depend on the availability and accuracy of their respective sources.

## 🌍 Deployment

The project is deployed on Vercel.

To deploy your own version:

1. Fork or clone the repository.
2. Import the repository into [Vercel](https://vercel.com/).
3. Configure the build settings according to the project's `package.json`.
4. Deploy the application.

## 🎯 Project Goals

- Create an engaging football player browsing experience.
- Practice building reusable React components.
- Work with structured datasets and dynamically rendered UI.
- Improve frontend development and responsive design skills.
- Deploy a web application using a modern hosting platform.

## 🔮 Future Improvements

Potential improvements for future versions include:

- Player search and filtering by team, nationality, position, and rating.
- Detailed player profile pages with statistics.
- Sorting players by rating and other attributes.
- Improved mobile responsiveness and loading performance.
- Additional player images and more comprehensive player information.
- Favorites and comparison features.

## 👨‍💻 Author

**Raghav Saraswar**

- GitHub: [@Raghav1130](https://github.com/Raghav1130)
- Project: [FIFA 26 Players](https://fifa26play.vercel.app/)

## 📄 License

No license is specified here. If you want others to reuse, modify, or distribute this project, consider adding an appropriate open-source license to the repository.

---

*Built as a frontend development project inspired by football and the FIFA gaming experience.*

**Disclaimer:** This is an independent fan project and is not affiliated with or endorsed by EA Sports or FIFA. FIFA and related trademarks belong to their respective owners.
