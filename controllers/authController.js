22

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "name, email and password are required"
            });
        }

        // Check if email already exists
        const exists = await User.findOne({ email });

        if (exists) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "Registered successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};