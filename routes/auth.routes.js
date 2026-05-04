const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET = 'secreto';

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    const token = jwt.sign(
      { user: username },
      SECRET,
      { expiresIn: '1h' }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: 'Credenciales incorrectas' });
});

module.exports = router;