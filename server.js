const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simulate a database to store form data
const formInstances = {};

// Create a new form instance
app.post('/api/form', (req, res) => {
  const { userId } = req.body;
  const formId = generateFormId(); // Implement your own form ID generation logic
  formInstances[formId] = { userId, currentStep: 0, formData: {} };
  res.json({ formId });
});

// Retrieve form status
app.get('/api/form/:formId', (req, res) => {
  const { formId } = req.params;
  const formInstance = formInstances[formId];
  if (!formInstance) {
    return res.status(404).json({ error: 'Form not found' });
  }
  res.json(formInstance);
});

// Submit form data for a specific step
app.post('/api/form/:formId/step/:step', (req, res) => {
  const { formId, step } = req.params;
  const { formData } = req.body;
  const formInstance = formInstances[formId];
  if (!formInstance) {
    return res.status(404).json({ error: 'Form not found' });
  }
  formInstance.formData[step] = formData;
  formInstance.currentStep = parseInt(step, 10) + 1;
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
