# Conference Registration App

This is a Node.js application for conference registration. It provides APIs for managing conferences and registrations.

## Project Structure

```
conference-registration-app
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── conferenceController.js
│   │   └── registrationController.js
│   ├── models
│   │   ├── conference.js
│   │   └── registration.js
│   ├── routes
│   │   ├── conferenceRoutes.js
│   │   └── registrationRoutes.js
│   └── data
│       └── mockData.js
├── test
│   └── apiTest.js
├── package.json
└── README.md
```

## Files

- `src/app.js`: Entry point of the application. Sets up the Express server and imports the routes.
- `src/controllers/conferenceController.js`: Controller class for conference-related operations.
- `src/controllers/registrationController.js`: Controller class for registration-related operations.
- `src/models/conference.js`: Model class for conferences.
- `src/models/registration.js`: Model class for registrations.
- `src/routes/conferenceRoutes.js`: Routes for conference-related operations.
- `src/routes/registrationRoutes.js`: Routes for registration-related operations.
- `src/data/mockData.js`: Mock data for conferences and registrations.
- `test/apiTest.js`: API tests for the conference registration application.
- `package.json`: Configuration file for npm.
- `README.md`: Documentation for the project.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access the APIs at `http://localhost:3000`.

## API Documentation

### Conferences

- `GET /conferences`: Get all conferences.
- `GET /conferences/:id`: Get conference by ID.
- `POST /conferences`: Create a new conference.
- `PUT /conferences/:id`: Update conference by ID.
- `DELETE /conferences/:id`: Delete conference by ID.

### Registrations

- `GET /registrations`: Get all registrations.
- `GET /registrations/:id`: Get registration by ID.
- `POST /registrations`: Create a new registration.
- `PUT /registrations/:id`: Update registration by ID.
- `DELETE /registrations/:id`: Delete registration by ID.

## Testing

To run the API tests, use the command `npm test`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.