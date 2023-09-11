# Zuri_Stage2 REST API README

This README provides instructions for setting up, running, and using the REST API.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
  - [Create a New Person](#create-a-new-person)
  - [Fetch Person Details](#fetch-person-details)
  - [Update Person Details](#update-person-details)
  - [Delete a Person](#delete-a-person)
- [Sample Requests](#sample-requests)
- [Documentation](#documentation)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed.
- MongoDB server running with a valid connection URI.
- MongoDB database created for the API.


## Getting Started

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/NwobiaDavid/zuri_stage2.git
   cd zuri_stage2 
   ```
2. Install the project dependencies:
    ```bash
    npm install
    ```
### Configuration
1. Create a .env file in the project root directory and add the following environment variables:
    ```bash
    MONGO_URI=your_mongodb_connection_uri
    ```
2. Replace `your_mongodb_connection_uri` with your actual MongoDB connection URI.


## Running the API
Start the API server by running the following command:
```bash
node index.js
```
The API will run on the specified port (default is 3000). You can access it at `http://localhost:3000`.

## API Endpoints
### Create a New Person
- **URL:** `/api`
- **HTTP Method:** POST
- **Request Body:** JSON
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
  ```
- **Response:** JSON
  ```json
  {
    "_id": "unique_id",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
  ```

### Fetch Person Details
- **URL:** `/api/:user_id`
- **HTTP Method:** GET
- **Response:** JSON
  ```json
  {
    "_id": "unique_id",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
  ```

### Update Person Details
- **URL:** `/api/:user_id`
- **HTTP Method:** PUT
- **Request Body:** JSON (fields to update)
  ```json
  {
    "age": 31
  }
  ```
- **Response:** JSON
  ```json
  {
    "_id": "unique_id",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 31
  }
  ```

### Delete a Person
- **URL:** `/api/:user_id`
- **HTTP Method:** DELETE
- **Response:** JSON
  ```json
  {
    "message": "Person deleted successfully"
  }
  ```

## Sample Requests
You can use tools like Postman or `curl` to interact with the API. Here are some sample requests:
- Creating a new person:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "age": 30}' http://localhost:3000/api
  ```
- Fetching person details:
  ```bash
  curl http://localhost:3000/api/unique_id
  ```
- Updating person details:
  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"age": 31}' http://localhost:3000/api/unique_id
  ```
- Deleting a person:
  ```bash
  curl -X DELETE http://localhost:3000/api/unique_id
  ```

## Documentation
For more details on API endpoints, request/response formats, and usage, refer to the [DOCUMENTATION.md](DOCUMENTATION.md) file.
