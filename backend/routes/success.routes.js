import express from 'express';

const router = express.Router();

// Success route
router.get('/success', (req, res) => {
    res.status(200).json({ message: 'Transfer successful!' });
});

export default router;