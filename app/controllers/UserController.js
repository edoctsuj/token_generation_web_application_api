const User = require("../models/User");

const UserController = {
  UserRegister: async (req, res) => {
    try {
      const userData = req.body;

      // // TODO:: Uncomment this code after testing is complete
      // const existingUser = await User.getByPhoneNumber(userData.phone);
      // if (existingUser) {
      //   return res.status(409).json({ error: "Phone number already exists" });
      // }

      const newUser = await User.create(userData);

      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  UserGenerateToken: async (req, res) => {
    try {
      const randomNumber = Math.floor(Math.random() * 1000000);
      const token = String(randomNumber).padStart(6, "0");

      res.json({ token });
    } catch (error) {
      console.error("Error generating token:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = UserController;
