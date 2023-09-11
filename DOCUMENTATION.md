# Zuri_Stage2 REST API Documentation

This document provides documentation for the Zuri_Stage2 REST API, including request/response formats, usage examples, limitations, and setup/deployment instructions.

## Table of Contents
- [Request and Response Formats](#request-and-response-formats)
- [API Endpoints](#api-endpoints)
- [Sample Usage](#sample-usage)
- [Limitations and Assumptions](#limitations-and-assumptions)
- [Setting Up and Deploying the API](#setting-up-and-deploying-the-api)

---

## Request and Response Formats

### Create a New Person

- **HTTP Method**: POST
- **Endpoint**: `/api`
- **Request Format**:
  ```json
  {
    "name": "string",
    "email": "string (optional)",
    "age": "number (optional)"
  }
  ```

- **Response Format**:
  ```json
  {
    "_id": "string",
    "name": "string",
    "email": "string (optional)",
    "age": "number (optional)"
  }
  ```

### Fetch Person Details

- **HTTP Method**: GET
- **Endpoint**: `/api/:user_id`
- **Response Format**:
  ```json
  {
    "_id": "string",
    "name": "string",
    "email": "string (optional)",
    "age": "number (optional)"
  }
  ```

### Update Person Details

- **HTTP Method**: PUT
- **Endpoint**: `/api/:user_id`
- **Request Format**:
  ```json
  {
    "name": "string",
    "email": "string (optional)",
    "age": "number (optional)"
  }
  ```

- **Response Format**:
  ```json
  {
    "_id": "string",
    "name": "string",
    "email": "string (optional)",
    "age": "number (optional)"
  }
  ```

### Delete a Person

- **HTTP Method**: DELETE
- **Endpoint**: `/api/:user_id`
- **Response Format**:
  ```json
  {
    "message": "Person deleted successfully"
  }
  ```

---

## API Endpoints

The API includes the following endpoints:

- `POST /api`: Create a new person.
- `GET /api/:user_id`: Fetch details of a person by ID.
- `PUT /api/:user_id`: Update the details of an existing person by ID.
- `DELETE /api/:user_id`: Remove a person by ID.

---

## Sample Usage

### Creating a New Person

**Request**:

```http
POST /api
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

**Response**:

```json
{
  "_id": "unique_id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### Fetching Person Details

**Request**:

```http
GET /api/unique_id
```

**Response**:

```json
{
  "_id": "unique_id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### Updating Person Details

**Request**:

```http
PUT /api/unique_id
Content-Type: application/json

{
  "age": 31
}
```

**Response**:

```json
{
  "_id": "unique_id",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 31
}
```

### Deleting a Person

**Request**:

```http
DELETE /api/unique_id
```

**Response**:

```json
{
  "message": "Person deleted successfully"
}
```

---

## Limitations and Assumptions

- This API assumes a MongoDB database is set up and accessible with a valid connection URI.
- Data validation for email and age fields is not enforced; they are optional fields.

---

## Setting Up and Deploying the API

Follow the setup and deployment instructions in the [README.md](README.md) file of the project repository.

For local development, make sure you have Node.js, npm, and MongoDB installed.

For production deployment, it is essential to adhere to best practices in securing both your server and MongoDB instance. Additionally, you have the option to deploy the API using [Render](https://render.com/), a reliable cloud platform.