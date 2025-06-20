const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'seusegredotaguardado';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Ex: Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido ou expirado' });

    req.user = user; // salva dados do usuário no req
    next();
  });
}

module.exports = authenticateToken;
