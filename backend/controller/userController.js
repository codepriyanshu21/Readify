import User from "../modals/user.js";
import bcrypt from 'bcryptjs'


export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        console.log(req.body)
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ msg: "User already exists", success: false })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname: fullname,
            email: email,
            password: hashedPassword
        })

        res.status(201).json({ msg: "User created successfully", success: true })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            msg: "Error creating user"
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "Invalid email or password", success: false })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
            return res.status(400).json({ msg: "Invalid email or password", success: false })
        }
        res.status(200).json({
            success: true,
            msg: "User logged in successfully",
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email

            }
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            msg: "Error logging in user"
        })
    }
}