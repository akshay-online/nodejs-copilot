const request = require('supertest');
const app = require('../src/app');

describe('Conference Registration API', () => {
  it('should return a list of conferences', async () => {
    const response = await request(app).get('/conferences/conferences');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('conferences');
    expect(response.body.conferences).toHaveLength(2); // Modify the length based on your mock data
  });

  it('should return a specific conference by ID', async () => {
    const response = await request(app).get('/conferences/conferences/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('conference');
    expect(response.body.conference.id).toBe(1);
  });

  it('should register a participant for a conference', async () => {
    const response = await request(app)
      .post('/conferences/conferences/1/register')
      .send({ participant: 'John Doe', email: 'johndoe@example.com' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('registration');
    expect(response.body.registration.participant).toBe('John Doe');
    expect(response.body.registration.conferenceId).toBe(1);
  });

  it('should return a list of registrations for a conference', async () => {
    const response = await request(app).get('/conferences/1/registrations');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('registrations');
    expect(response.body.registrations).toHaveLength(1); // Modify the length based on your mock data
  });

  it('should return a specific registration by ID', async () => {
    const response = await request(app).get('/registrations/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('registration');
    expect(response.body.registration.id).toBe(1);
  });

  it('should update a registration', async () => {
    const response = await request(app)
      .put('/registrations/1')
      .send({ participant: 'Jane Smith' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('registration');
    expect(response.body.registration.participant).toBe('Jane Smith');
  });

  it('should delete a registration', async () => {
    const response = await request(app).delete('/registrations/1');
    expect(response.status).toBe(204);
  });
});