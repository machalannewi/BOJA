import pool from "../config/db.js";

const registerModel = async (userDetails) => {

    const queryUser = 
    `SELECT * FROM users WHERE email = $1`

    const userExist = await pool.query(queryUser, [userDetails.email])

    if(userExist.rows.length > 0) {
        throw new Error('User already exists');
    }

    const query = 
    `INSERT INTO users (first_name, last_name, email, phone, location, password)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`

    const { firstName, lastName, email, phone, location, password } = userDetails

    const { rows } = await pool.query(query, [
        firstName,
        lastName,
        email,
        phone,
        location,
        password
    ])

    return rows[0]
}
export default registerModel;
