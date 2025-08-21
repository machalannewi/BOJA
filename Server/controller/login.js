import loginModel from "../model/login.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/authUtils.js";

const Login = async (req, res) => {

    try {
        console.log("REQUEST BODY:", req.body)
        const {email, password} = req.body;
        

        if(!email || !password) {
            res.status(401).json({
                success: false,
                message: "Please enter all required fields"
            })
        }
        console.log("Check complete...")

        const user = await loginModel(email)
        console.log(user);
        
        if(!user) {
            return res.status(404).json({message: "User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const token = generateToken(user);


        res.status(200).json({
            success: true,
            message: "Logged in successfully!",
            user: {
                id: user.id,
                email: user.email,
                password: user.password
            },
            token
        })

    } catch (error) {
        console.log(error, "DATABASE ERROR")

        res.status(500).json({
            success: false,
            message: "Unable to Log in user",
            error: error.message
        })
    }
}
export default Login;