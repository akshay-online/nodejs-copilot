const Conference = require('../models/conference');

class ConferenceController {
  // Get all conferences
  getAllConferences(req, res) {
    const conferences = Conference.getAllConferences();
    res.json(conferences);
  }

  // Get conference by ID
  getConferenceById(req, res) {
    const { id } = req.params;
    const conference = Conference.getConferenceById(id);
    if (conference) {
      res.json(conference);
    } else {
      res.status(404).json({ error: 'Conference not found' });
    }
  }

  // Create a new conference
  createConference(req, res) {
    const { name, date, location } = req.body;
    const conference = Conference.createConference(name, date, location);
    res.status(201).json(conference);
  }

  // Update conference by ID
  updateConference(req, res) {
    const { id } = req.params;
    const { name, date, location } = req.body;
    const conference = Conference.updateConference(id, name, date, location);
    if (conference) {
      res.json(conference);
    } else {
      res.status(404).json({ error: 'Conference not found' });
    }
  }

  // Delete conference by ID
  deleteConference(req, res) {
    const { id } = req.params;
    const conference = Conference.deleteConference(id);
    if (conference) {
      res.json({ message: 'Conference deleted successfully' });
    } else {
      res.status(404).json({ error: 'Conference not found' });
    }
  }
}

module.exports = new ConferenceController();