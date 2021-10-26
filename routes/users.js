const express = require('express');
const usersRouter = express.Router();

const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

// const { JWT_SECRET } = process.env;
const JWT_SECRET = "DonNotWell"
const jwt = require('jsonwebtoken');

const { getAllUsers, getUserByUsername, createUser, getUserById } = require('../db/users');
const { requireUser } = require('./util')

usersRouter.use((req, res, next) => {
    console.log('A request is being made to /users');
    
    next();
});

// GET /users/me
usersRouter.get('/me', requireUser, async (req, res, next) => {
    const { id } = req.user;
    try {
        const user = await getUserById(id);
        if(user) {
            res.send(user);
        }
    } catch (error) {
        next(error);
    }
});

//POST /users/login
usersRouter.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        next ({
            name: 'MissingCredentialsError',
            message: 'Please supply both a username and password'
        });
    }
    try {
        const user = await getUserByUsername({username});
        const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
        const passwordMatch = await bcrypt.compare(password, hashedPassword)
        if (user && passwordMatch) {
            const token = jwt.sign({id: user.id, username}, JWT_SECRET)
            res.send({ message: `You're logged in!`, token: `${token}` });
        } else {
            next({
                name: 'IncorrectCredentialError',
                message: 'Username or password is incorrect'
            });
        }
    } catch(error) {
        console.error(error);
        next(error);
    }
});

//POST /users/register
usersRouter.post('/register', async (req, res, next) => {
    const { firstName, lastName, email, username, password } = req.body;
    try {
        const _user = await getUserByUsername({username});
        if (_user) {
            next({
                name: 'UserExistsError',
                message: 'A user by that username already exists'
            });
        } else if (password.length < 8) {
            next({
                name: 'Error',
                message: 'Password is too short'
            });
        } else {
            const user = await createUser({
                firstName,
                lastName,
                email,
                username,
                password
            });
            res.send({ 
                message: "thank you for signing up",
                user
            });
        }
    } catch({ name, message}) {
        next({ name, message })
    }
});

module.exports = usersRouter;