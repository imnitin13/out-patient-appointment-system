const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const doctors = [
  { id: 1, name: 'Dr. Rajesh', availableSlots: ['Monday', 'Wednesday', 'Friday'] },
  { id: 2, name: 'Dr. Sourabh', availableSlots: ['Tuesday', 'Thursday'] },
];

const appointments = [];

// Define API endpoints
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

app.get('/api/doctors/:id', (req, res) => {
  const doctorId = parseInt(req.params.id);
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) {
    return res.status(404).json({ error: 'Doctor not found' });
  }

  res.json(doctor);
});

app.post('/api/appointments', (req, res) => {
  const { doctorId, patientName, appointmentDay } = req.body;
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) {
    return res.status(404).json({ error: 'Doctor not found' });
  }

  if (!doctor.availableSlots.includes(appointmentDay)) {
    return res.status(400).json({ error: 'Doctor not available on that day' });
  }

  const appointment = {
    doctorId,
    patientName,
    appointmentDay,
  };

  appointments.push(appointment);
  res.status(201).json(appointment);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
