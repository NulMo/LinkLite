# LinkLite

LinkLite is a simple and efficient URL shortener web application. It consists of a React frontend for submitting URLs and a Node.js/Express backend backed by Redis for storage.

## Features

- Shorten long URLs into concise, shareable links.
- Fast redirection service.
- Simple and clean user interface.

## Tech Stack

- **Frontend:** React, Create React App
- **Backend:** Node.js, Express.js
- **Database:** Redis (using Upstash)

## Project Structure

The repository is organized into two main directories:

- `backend/`: Contains the Node.js Express server API.
- `frontend/`: Contains the React client application.

## Configuration

The application currently uses some hardcoded values that you might want to update for your own deployment or local development environment:

- **Frontend API URL:** The frontend (`frontend/src/App.js`) currently points to a deployed backend URL (`https://linklite-i09t.onrender.com`). For local development, update this to your local backend server (e.g., `http://localhost:3000`).
- **Redis Credentials:** The backend (`backend/src/database.js`) connects to a remote Upstash Redis instance with hardcoded credentials. Ensure you have your own Redis instance running and update the connection details accordingly.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager).

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The backend server runs on port 3000 by default.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The application will open in your browser.

   > **Note:** If you are running the backend locally on port 3000, Create React App will prompt you to run the frontend on a different port (e.g., 3001).

## API Endpoints

### `POST /submit`

Submits a URL to be shortened.

- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "url": "https://www.example.com/very/long/path"
  }
  ```
- **Response:** Returns the generated short ID string.

### `GET /:id`

Redirects to the original URL associated with the given ID.

## License

This project is licensed under the ISC License.