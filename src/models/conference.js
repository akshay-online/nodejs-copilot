class Conference {
  constructor(id, name, date, location) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.location = location;
  }

  static getAllConferences() {
    // Return mock data for all conferences
    return [
      { id: 1, name: 'Conference 1', date: '2022-01-01', location: 'Location 1' },
      { id: 2, name: 'Conference 2', date: '2022-02-01', location: 'Location 2' },
      { id: 3, name: 'Conference 3', date: '2022-03-01', location: 'Location 3' },
    ];
  }

  static getConferenceById(id) {
    // Return mock data for a conference with the given id
    const conferences = Conference.getAllConferences();
    return conferences.find(conference => conference.id == id);
  }

  static createConference(name, date, location) {
    // Create a new conference with the given details
    const id = Date.now(); // Generate a unique id
    const conference = new Conference(id, name, date, location);
    // Save the conference to the database or mock data
    // ...
    return conference;
  }

  static updateConference(id, name, date, location) {
    // Update the conference with the given id and details
    const conference = Conference.getConferenceById(id);
    if (conference) {
      conference.name = name;
      conference.date = date;
      conference.location = location;
      // Update the conference in the database or mock data
      // ...
    }
    return conference;
  }

  static deleteConference(id) {
    // Delete the conference with the given id
    const conference = Conference.getConferenceById(id);
    if (conference) {
      // Delete the conference from the database or mock data
      // ...
    }
    return conference;
  }
}

module.exports = Conference;