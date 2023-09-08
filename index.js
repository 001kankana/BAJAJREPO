const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  // Parse JSON request body
  const { data } = req.body;

  // Separate alphabets and numbers
  const numbers = data.filter((item) => typeof item === 'number' || !isNaN(item));
  const alphabets = data.filter((item) => typeof item === 'string' && item.length === 1 && /^[a-zA-Z]+$/.test(item));

  // Calculate the highest alphabet
  const highestAlphabet = alphabets.reduce((max, char) => {
    return char.toLowerCase() > max.toLowerCase() ? char : max;
  }, 'A'); // Initialize max with 'A' to handle empty arrays

  // Modify these values based on your logic
  const user_id = 'kankana_majumder_15072001';
  const college_email = 'km6481@srmist.edu.in';
  const college_roll_number = 'RA2011003011142';

  // Prepare response JSON
  const response = {
    is_success: true,
    user_id,
    email: college_email,
    roll_number: college_roll_number,
    numbers,
    alphabets,
    highest_alphabet: [highestAlphabet],
  };

  res.json(response);
});


// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
