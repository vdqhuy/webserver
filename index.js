require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');
const loginHistoryRoutes = require('./routes/loginHistory.routes');

app.use(express.json());
app.use('/api', loginHistoryRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server started on port 3000'));
});
