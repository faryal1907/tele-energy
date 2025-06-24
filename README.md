# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Struucture

energy-dashboard/
├── backend/                         # Node.js publisher service
│   ├── publisher.js                # Publishes MQTT messages
│   └── package.json
│
├── mosquitto/                      # Mosquitto broker config (optional)
│   └── mosquitto.conf              # Enable WebSocket listener here
│
├── frontend/                       # React + Vite dashboard
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/             # All UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── PhaseAGraph.jsx
│   │   │   ├── PhaseBGraph.jsx
│   │   │   ├── PhaseCGraph.jsx
│   │   │   ├── CombinedGraph.jsx
│   │   │   ├── BarComparison.jsx
│   │   │   └── DataTable.jsx
│   │   │
│   │   ├── hooks/                  # Reusable logic
│   │   │   └── useMQTTData.js     # Hook for live MQTT data
│   │   │
│   │   ├── utils/                  # Random data generation (optional for dev)
│   │   │   └── randomDataGenerator.js
│   │   │
│   │   ├── data/                   # Optional static data (if needed)
│   │   │   └── sampleData.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css              # Tailwind styles
│   │
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package-lock.json


## Ports

Node.js Publisher 1883
Websocket (React) 9001