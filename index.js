require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB :)');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

//Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be added...'],
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

//Person model
const Person = mongoose.model('Person', personSchema);

// API endpoints

// Create a new person
app.post('/api', async (req, res) => {
  try {
    console.log(req.body);
    const person = new Person(req.body);
    
    const savedPerson = await person.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch details of a person by ID
app.get('/api/:user_id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Modify the details of an existing person by ID
app.put('/api/:user_id', async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      { new: true }
    );

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Remove a person by ID
app.delete('/api/:user_id', async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.user_id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//running server
app.listen(port, () => {
  console.log(`Listening on port:${port}...`);
});
