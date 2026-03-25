# Library Management System API

A backend REST API built for managing a library system. It handles books, authors, students, and library attendants, including logic for borrowing and returning books. 

## Tech Stack
* Node.js
* Express.js
* MongoDB & Mongoose

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ChikelubaM/library-management-api.git
   ```

2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up environment variables:
    Create a `.env` file in the root directory and add your MongoDB connection string:
    ```bash
    MONGO_URI=your_mongodb_connection_string_here
    ```
4.  Start the server:
    ```bash
    npm run dev
    # or
    node server.js
    ```
    The server will start running on `http://localhost:3000`

## API Documentation
Full documentation of the API endpoints, including required request bodies, query parameters, and sample responses, can be found here: [View Postman API Documentation](https://documenter.getpostman.com/view/53359392/2sBXikmqWw)