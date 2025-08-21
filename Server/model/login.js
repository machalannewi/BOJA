import pool from "../config/db.js"

const loginModel = async (email) => {
    const query = 
    `SELECT * FROM users WHERE email = $1`

    const { rows } = await pool.query(query, [email])

    return rows[0] 

}
export default loginModel