import path from "path";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import { z } from "zod";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  urgency: z.enum(["urgent", "normal", "low"]).default("normal")
});
const contactSubmissions = [];
const handleContactSubmission = async (req, res) => {
  try {
    const validatedData = ContactFormSchema.parse(req.body);
    const submission = {
      id: Date.now().toString(),
      timestamp: /* @__PURE__ */ new Date(),
      data: validatedData,
      status: "new"
    };
    contactSubmissions.push(submission);
    console.log("New contact form submission:", submission);
    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      submissionId: submission.id
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
};
const getContactSubmissions = (req, res) => {
  const sortedSubmissions = contactSubmissions.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  res.json({
    success: true,
    submissions: sortedSubmissions,
    total: sortedSubmissions.length
  });
};
const updateSubmissionStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const submission = contactSubmissions.find((s) => s.id === id);
  if (!submission) {
    return res.status(404).json({
      success: false,
      message: "Submission not found"
    });
  }
  submission.status = status;
  res.json({
    success: true,
    message: "Status updated successfully",
    submission
  });
};
const BookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Service selection is required"),
  consultationType: z.enum(["phone", "video", "inperson"]),
  preferredDate: z.string().min(1, "Date is required"),
  preferredTime: z.string().min(1, "Time is required"),
  budget: z.string().optional(),
  description: z.string().optional(),
  urgency: z.enum(["urgent", "normal", "flexible"]).default("normal"),
  agreeToTerms: z.boolean().refine((val) => val === true, "Must agree to terms")
});
const bookings = [];
const handleBookingSubmission = async (req, res) => {
  try {
    const validatedData = BookingSchema.parse(req.body);
    const booking = {
      id: `BK${Date.now()}`,
      timestamp: /* @__PURE__ */ new Date(),
      data: validatedData,
      status: "pending"
    };
    bookings.push(booking);
    console.log("New consultation booking:", booking);
    res.status(200).json({
      success: true,
      message: "Booking submitted successfully",
      bookingId: booking.id,
      booking
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
};
const getBookings = (req, res) => {
  const sortedBookings = bookings.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  res.json({
    success: true,
    bookings: sortedBookings,
    total: sortedBookings.length
  });
};
const updateBookingStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const booking = bookings.find((b) => b.id === id);
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: "Booking not found"
    });
  }
  booking.status = status;
  res.json({
    success: true,
    message: "Booking status updated successfully",
    booking
  });
};
const getBookingById = (req, res) => {
  const { id } = req.params;
  const booking = bookings.find((b) => b.id === id);
  if (!booking) {
    return res.status(404).json({
      success: false,
      message: "Booking not found"
    });
  }
  res.json({
    success: true,
    booking
  });
};
function createServer() {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });
  app2.get("/api/demo", handleDemo);
  app2.post("/api/contact", handleContactSubmission);
  app2.get("/api/contact/submissions", getContactSubmissions);
  app2.put("/api/contact/submissions/:id", updateSubmissionStatus);
  app2.post("/api/bookings", handleBookingSubmission);
  app2.get("/api/bookings", getBookings);
  app2.get("/api/bookings/:id", getBookingById);
  app2.put("/api/bookings/:id", updateBookingStatus);
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
