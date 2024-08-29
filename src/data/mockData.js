const conferences = [
  {
    id: 1,
    name: "Conference 1",
    date: "2022-10-01",
    location: "New York",
    capacity: 100,
  },
  {
    id: 2,
    name: "Conference 2",
    date: "2022-11-15",
    location: "San Francisco",
    capacity: 150,
  },
  // Add more conference objects as needed
];

const registrations = [
  {
    id: 1,
    conferenceId: 1,
    attendeeName: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    conferenceId: 1,
    attendeeName: "Jane Smith",
    email: "jane.smith@example.com",
  },
  // Add more registration objects as needed
];

module.exports = {
  conferences,
  registrations,
};