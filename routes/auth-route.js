const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
	const { email, password, rememberMe } = req.body;
	res.json({ message: 'worked' });
});

module.exports = router;
