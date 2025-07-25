### conditional rendering for loading and graphs retrieval

{currentData.length === 0 ? (
<div className="flex flex-col items-center justify-center py-20 animate-fade-in">
<div className="w-16 h-16 bg-energy-gradient rounded-2xl flex items-center justify-center mb-6 animate-pulse">
    <span className="text-white text-2xl">⚡</span>
</div>
<p className="text-xl text-neutral-500 font-medium">Waiting for data...</p>
<p className="text-neutral-400 mt-2">Connecting to energy monitoring system</p>
</div>
) : (
<Dashboard data={currentData} />

### COLOR PALETTE:

051462, F7941D and some of its other shades as well as a FFEBD3 for text

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Ports

Node.js Publisher 1883
Websocket (React) 9001


## Running the Application

### Prerequisites
- Node.js and npm installed (for both backend and frontend)
- (Optional) Mosquitto MQTT broker if you want to test with real MQTT messages

### 1. Backend (Publisher)
1. Open a terminal and navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Start the publisher service:
   ```sh
   python publisher.py
   ```

### 2. Frontend (React + Vite)
1. Open a new terminal and navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to the local address shown in the terminal (usually `http://localhost:5173`).

---

Now your backend publisher and frontend dashboard should be running and connected via MQTT/WebSocket!