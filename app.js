const express = require('express');

const app = express();

app.use(express.json());
app.use('/api', appRouter);
// app.use(errorHandlers.errorHandler);

module.exports = app;