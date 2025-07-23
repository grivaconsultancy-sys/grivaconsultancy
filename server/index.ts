import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContactSubmission, getContactSubmissions, updateSubmissionStatus } from "./routes/contact";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);
  
  // Contact form routes
  app.post("/api/contact", handleContactSubmission);
  app.get("/api/contact/submissions", getContactSubmissions);
  app.put("/api/contact/submissions/:id", updateSubmissionStatus);

  return app;
}
