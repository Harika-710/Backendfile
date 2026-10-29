require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");
connectDB();

app.get("/api",(req, res) => {
    res.send("Hello from Express");
});

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("Auth API is running");
});
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

const studentStaticRoutes = require("./routes/studentStaticRoutes");
app.use("/api/students", studentStaticRoutes);

app.listen(3000, () => {
    console.log("Server on port 3000");
});