const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', authMiddleware, reservationController.createReservation);

// Get reservations for a user (protected route)
router.get('/user/:userId', authMiddleware, reservationController.getUserReservations);

module.exports = router;
