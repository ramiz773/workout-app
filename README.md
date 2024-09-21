Workout Tracker App

Table of Contents
Introduction
Features
Demo
Technologies Used
Installation
Usage
Project Structure
Contributing
License
Contact
Introduction
The Workout Tracker App is a full-stack web application designed to help users manage their workout routines efficiently. Built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, this application allows users to authenticate their accounts, add new workouts, delete existing ones, and track their progress over time. The project serves as a practical implementation of JWT authentication and CRUD operations using Mongoose, complemented by a responsive front end leveraging React's Context API.

Features
User Authentication:

Register and login using JWT for secure authentication.
Protect routes to ensure only authenticated users can access certain features.
Workout Management:

Add Workout: Create new workout entries with details like type, duration, and notes.
Delete Workout: Remove workouts that are no longer needed.
Track Progress: View a list of all workouts and monitor progress over time.
Responsive Design:

Mobile-friendly interface for managing workouts on the go.
State Management:

Utilizes React's Context API for efficient state management across components.
Demo

Screenshot of the Workout Tracker App in action.

Technologies Used
Frontend
React.js: Front-end library for building user interfaces.
Context API: For state management across the application.
CSS3: Styling the application with modern CSS techniques.
Backend
Node.js & Express.js: Server-side runtime and framework for handling API requests.
MongoDB & Mongoose: NoSQL database and ODM for data modeling and management.
JWT (JSON Web Tokens): Secure authentication mechanism.
Tools & Others
Git & GitHub: Version control and repository hosting.
Postman: API testing and development.
VS Code: Code editor.
Installation
Prerequisites
Node.js: Ensure you have Node.js installed. You can download it here.
MongoDB: Set up a MongoDB database. You can use MongoDB Atlas for a cloud-based solution.
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/workout-tracker-app.git
Navigate to the Project Directory:

bash
Copy code
cd workout-tracker-app
Install Backend Dependencies:

bash
Copy code
cd backend
npm install
Configure Environment Variables:

Create a .env file in the backend directory.

Add the following variables:

env
Copy code
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the Backend Server:

bash
Copy code
npm start
Install Frontend Dependencies:

Open a new terminal window and navigate to the frontend directory:

bash
Copy code
cd frontend
npm install
Start the Frontend Application:

bash
Copy code
npm start
Access the Application:

Open your browser and navigate to http://localhost:3000.

Usage
Register an Account:

Click on the "Register" button and provide the necessary details to create a new account.
Login:

Use your credentials to log in to the application.
Add a Workout:

Navigate to the "Add Workout" section and input the workout details.
View Workouts:

View a list of all your workouts on the dashboard.
Delete a Workout:

Remove any unwanted workouts by clicking the delete button next to the respective entry.
