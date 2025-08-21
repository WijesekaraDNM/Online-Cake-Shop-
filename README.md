# Online Cake Shop

This repository contains the code for an Online Cake Shop application with separate backend and frontend modules.

## Backend

The backend is built with Node.js, Express, and MongoDB (using Mongoose). It handles user authentication, cake data management, and order processing.

### Backend Features
- User registration and authentication with JWT tokens
- Cake and order management APIs
- Secure password handling with bcryptjs
- Middleware for CORS and async error handling

### Backend Setup
1. Navigate to the backend folder:
     cd backend
2. Install dependencies:
     npm install
3. Create a `.env` file for environment variables (e.g., database URI, JWT secret)
4. Start the development server:
     npm run dev


## Frontend

The frontend is built with React and supports browsing cakes, placing orders, and user interactions.

### Frontend Features
- Responsive UI built with React
- Form handling with react-hook-form
- Client-side routing with react-router-dom
- Notifications with react-toastify
- API calls handled using axios

### Frontend Setup
1. Navigate to the frontend folder:
    cd frontend
2. Install dependencies:
    npm install
3. Start the React development server:
    npm start


## Development

- Backend code entry point: `src/server.js`
- Frontend code entry point: `src/index.js` (React app)
- Use nodemon for auto-reloading backend during development
- React-scripts handles frontend build and development server

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the ISC License.

