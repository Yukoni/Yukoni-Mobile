const express = require('express');
const userRoutes  = require('./userRoute.js');
const authRoutes  = require('./auth.js');
// import authRoutes from './auth.route'; 

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);
//router.use('/', authRoutes);

// mount auth routes at /auth
//router.use('/auth', authRoutes);

module.exports = router;

