import jwt from 'jsonwebtoken';

const generateToken = (id: number) => {
  const secret = process.env.SECRET_JWT;

  if (!secret) {
    throw new Error('SECRET_JWT is not defined in environment variables');
  }

  return jwt.sign({ id }, secret, { expiresIn: '1h' });
};

module.exports = { generateToken };
