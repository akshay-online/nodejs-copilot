const Registration = require('../models/registration');

class RegistrationController {
  // Get all registrations
  getAllRegistrations(req, res) {
    const registrations = Registration.getAllRegistrations();
    res.json(registrations);
  }

  // Get registration by ID
  getRegistrationById(req, res) {
    const { id } = req.params;
    const registration = Registration.getRegistrationById(id);
    if (registration) {
      res.json(registration);
    } else {
      res.status(404).json({ error: 'Registration not found' });
    }
  }
}

module.exports = new RegistrationController();