# Activity Management System

## Overview

This repository provides a backend implementation for managing mental well being activities. 

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **MongoDB**: A running MongoDB instance is required. You can set up MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.

### Installation

1. **Clone the Repository**

   ```bash
   cd mental-activities
    ```
2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```
3. **Set Up Environment Variables**

Modify the `.env` file in the root directory and add your MongoDB connection string:

```plaintext
MONGO_URI=mongodb://localhost:27017/activity_db
```

4. **Run the Application**

Start the server:

```bash
npm start
```
The application will now be running, and you can access it on http://localhost:3000 

### Supported Features

1. Create and persist users
2. List all activities.
3. JWT for authentication of users
4. Mark activities as completed
5. See a user's completed activities
6. Have an unauthenticated endpoint for adding new activities


### Pending Features

1. Unit tests - Need to be added. I haven't added them as I was working on nodejs and express after a long time and was going through a learning curve
2. CRUD endpoints, are simple enough and can be added later
3. Add docker compose 