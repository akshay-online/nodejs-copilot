class Registration {
  constructor(id, conferenceId, attendeeName, email) {
    this.id = id;
    this.conferenceId = conferenceId;
    this.attendeeName = attendeeName;
    this.email = email;
  }

  static getAllRegistrations() {
    // Return mock data for all registrations
    return [
      new Registration(1, 1, "John Doe", "john.doe@example.com"),
      new Registration(2, 1, "Jane Smith", "jane.smith@example.com"),
      new Registration(3, 2, "Mike Johnson", "mike.johnson@example.com"),
    ];
  }

  static getRegistrationById(id) {
    // Return mock data for a registration with the given id
    const registrations = Registration.getAllRegistrations();
    return registrations.find((registration) => registration.id === id);
  }

  static getRegistrationsByConferenceId(conferenceId) {
    // Return mock data for registrations with the given conferenceId
    const registrations = Registration.getAllRegistrations();
    return registrations.filter(
      (registration) => registration.conferenceId === conferenceId
    );
  }

  static createRegistration(conferenceId, attendeeName, email) {
    // Create a new registration with the provided data
    const registrations = Registration.getAllRegistrations();
    const id = registrations.length + 1;
    const newRegistration = new Registration(
      id,
      conferenceId,
      attendeeName,
      email
    );
    registrations.push(newRegistration);
    return newRegistration;
  }
}

module.exports = Registration;