import express from 'express';

const router = express.Router();

// Error route
router.get('/error', (req, res) => {
    res.status(400).json({ message: 'Transfer failed!' });
});

export default router;