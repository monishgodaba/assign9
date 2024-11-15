const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://monish09082002:monishgodaba@todo.ubeq5.mongodb.net/?retryWrites=true&w=majority&appName=todo')
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('MongoDB connection error:', error));

app.use('/todos', require('./routes/todos'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
