const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fastifycrud')
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))