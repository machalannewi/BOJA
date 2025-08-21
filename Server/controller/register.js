import registerModel from "../model/register.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/authUtils.js";

const Register = async (req, res) => {
    try {
    console.log("REQUEST BODY:", req.body);

    const {
        firstName,
        lastName,
        email,
        phone,
        location,
        password
        } = req.body

        if(!firstName || !lastName || !email || !phone || !location || !password) {
            res.status(400).json({
                success: false,
                message: "Please enter all required fields"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log("password hashed successfully")

        const userDetails = {
            ...req.body,
            password: hashedPassword
        }
        console.log(userDetails)

        console.log("Checking database....")
        const user = await registerModel(userDetails);
        console.log(user)

        const token = generateToken(user)

        console.log(token)

        res.status(200).json({
            success: true,
            message: "Registration successful",
            user: {
                userId: user.id,
                email: user.email,
                phone: user.phone,
                password: user.password,
                location: user.location
            },
            token
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to register user",
            error: error.message
        })

    }

}
export default Register