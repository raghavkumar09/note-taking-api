# Simple Note-Taking API

This project is a RESTful API for a simple note-taking application built using Node.js and Express. The application allows users to create, fetch, query, and update notes. The API is designed without user management and does not include a UI. Swagger UI is integrated to allow easy API testing.

## Table of Contents

- [Project Description](#project-description)
- [Core Features](#core-features)
- [Models](#models)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Swagger Documentation](#swagger-documentation)
- [Evaluation Metrics](#evaluation-metrics)
- [Submission](#submission)

## Project Description

This API allows users to manage notes through basic CRUD operations. It supports the following functionalities:

1. **Create Note**: Add a new note with a title and body.
2. **Fetch Note by ID**: Retrieve a note using its unique identifier.
3. **Query Notes by Title Substring**: Search for notes by a substring in the title, returning all matching results.
4. **Update Note**: Modify the title and body of an existing note identified by its ID.

No UI has been developed for this application, but Swagger UI has been provided to facilitate testing.

## Core Features

- **Create Note**: Allows creating a new note with a title and body.
- **Fetch Note by ID**: Enables fetching a note using its primary key (ID).
- **Query Notes by Title Substring**: This lets you search notes based on a substring in the title.
- **Update Note**: Provides the ability to update the title and body of an existing note.

## Models

### Note
- `title` (String): A brief title for the note.
- `body` (String): The main content of the note.
- `created_at` (Date): The date and time the note was created.
- `updated_at` (Date): The date and time the note was last updated.

## API Endpoints

- `POST /notes`: Create a new note.
- `GET /notes/:id`: Fetch a note by its primary key.
- `GET /notes?title=<substring>`: Query notes by title substring.
- `PUT /notes/:id`: Update an existing note.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone git@github.com:raghavkumar09/note-taking-api.git
    cd note-taking-api
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   PORT=3000
   MONGO_URI=<your-mongodb-connection-string>
