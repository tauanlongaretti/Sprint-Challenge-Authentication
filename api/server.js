const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.get('/token', (req, res) => {

    const payload = {
        subject: 'thisuser',
        userid: 'tauan',
        favoriteFood: 'lasagna'
    };

    const secret = 'mysecret';

    const options = {
        expiresIn: '30m'
    };

    const token = jwt.sign(payload, secret, options);

    res.json(token);
})

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

module.exports = server;
