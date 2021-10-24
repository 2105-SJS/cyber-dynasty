const { client } = require ("../client");

const createUser = async ({ firstName, lastName, email, username, password}) => {
    try {
        const {rows: [user] } = await client.query(`
            INSERT INTO users ("firstName", "lastName", "email", "username", "password")
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `, [firstName, lastName, email, username, password]);



    }catch (error) {
        console.error(error);
    };
};

const getUser = async ({ username, password }) => {
    try {
        const { rows: [ user ]} = await client.query(`
        SELECT *
        FROM users
        WHERE username=$1;
        AND password=$2;
        `,[username, password]);
        return user;
    } catch(error) {
        throw error;
    }
}