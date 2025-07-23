import { RequestHandler } from "express";
import { z } from "zod";

// Contact form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  urgency: z.enum(["urgent", "normal", "low"]).default("normal"),
});

// In-memory storage for demo (replace with MongoDB later)
const contactSubmissions: Array<{
  id: string;
  timestamp: Date;
  data: z.infer<typeof ContactFormSchema>;
  status: 'new' | 'contacted' | 'completed';
}> = [];

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = ContactFormSchema.parse(req.body);
    
    // Create a new submission
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date(),
      data: validatedData,
      status: 'new' as const
    };
    
    // Store the submission (in production, this would go to MongoDB)
    contactSubmissions.push(submission);
    
    console.log('New contact form submission:', submission);
    
    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      submissionId: submission.id
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
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

export const getContactSubmissions: RequestHandler = (req, res) => {
  // This will be used by the admin dashboard
  const sortedSubmissions = contactSubmissions.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  
  res.json({
    success: true,
    submissions: sortedSubmissions,
    total: sortedSubmissions.length
  });
};

export const updateSubmissionStatus: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const submission = contactSubmissions.find(s => s.id === id);
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
