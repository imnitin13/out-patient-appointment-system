# out-patient-appointment-system
API endpoints for an out-patient appointment system

Appointment System API Explanation:

Doctor Listing:

Endpoint: /api/doctors
Purpose: This endpoint retrieves a list of doctors available in the system.
Implementation: It returns a JSON array of doctor objects, each containing information such as the doctor's ID, name, and available appointment days.
Doctor Detail Page:

Endpoint: /api/doctors/:id
Purpose: This endpoint provides detailed information about a specific doctor based on their ID.
Implementation: It accepts a doctor ID as a parameter and returns a JSON object with details about the doctor, including their name and available appointment days. If the doctor ID is not found, it returns a 404 error.
Appointment Booking:

Endpoint: /api/appointments
Purpose: This endpoint allows users to book appointments with doctors.
Implementation: It accepts a POST request with parameters such as doctorId, patientName, and appointmentDay. It checks if the doctor exists, whether they are available on the specified day, and if the appointment is successful, it adds the appointment to the system and returns a JSON response with the appointment details. It also handles error cases, such as when a doctor is not found or when the doctor is not available on the specified day.
