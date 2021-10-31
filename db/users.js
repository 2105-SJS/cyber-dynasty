const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const {client} = require('./client');

const createUser = async ({ firstName, lastName, email, username, password }) => {
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
        const { rows: [user] } = await client.query(`
            INSERT INTO users("firstName", "lastName", email, username, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, "firstName", "lastName", username;
        `, [firstName, lastName, email, username, hashedPassword]);
        if(!user) {
            return("no user")
        }
        return user
    } catch (error) {
        throw error;
    }
}

const getUser = async ({ username, password }) => {
    try {
        const { rows: [user] } = await client.query(`
            SELECT *
            FROM users
            WHERE username = $1
        `, [username]);
        const hashedPassword = user.password;
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (passwordMatch) {
            delete user.password;
            return user;
        }
    } catch (error) {
        throw error;
    }
}

const getAllUsers = async () => {
    try {
        const users = await client.query(`
            SELECT *
            FROM users
            RETURNING *;
        `);
        delete users.password;
        return users;
    } catch (error) {
        throw error;
    }
}

const getUserById = async (id) => {
    try {
        const { rows: [user] } = await client.query(`
            SELECT *
            FROM users
            WHERE id=$1
        `, [id]);
        return user;
    } catch (error) {
        throw error;
    }
}

const getUserByUsername = async ({username}) => {
    try {
        const { rows: [user] } = await client.query(`
            SELECT *
            FROM users
            WHERE username=$1
        `, [username]);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    getUserById,
    getUserByUsername
}