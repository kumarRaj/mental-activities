# Activity Management System

## Overview

This repository provides a backend implementation for managing activities. It includes functionalities for creating and retrieving activities, with data persistence managed through MongoDB and Mongoose. 

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