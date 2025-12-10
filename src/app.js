import express from "express";
import cors from "cors";

const app = express();

// basic configurations
app.use(express.json({ limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public")); // making 'public' folder for publicaly available

// cors configurations
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
  credentials: true,
  methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
  allowedHeaders: ["Content-type", "Authorization"]
}))

app.get("/", (req, res) => {
  res.send("Hello to udemy course!");
});

export default app;