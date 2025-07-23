import { RequestHandler } from "express";
import { z } from "zod";

// Booking form validation schema
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
  agreeToTerms: z.boolean().refine(val => val === true, "Must agree to terms")
});

// In-memory storage for demo (replace with MongoDB later)
const bookings: Array<{
  id: string;
  timestamp: Date;
  data: z.infer<typeof BookingSchema>;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}> = [];

export const handleBookingSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = BookingSchema.parse(req.body);
    
    // Create a new booking
    const booking = {
      id: `BK${Date.now()}`,
      timestamp: new Date(),
      data: validatedData,
      status: 'pending' as const
    };
    
    // Store the booking (in production, this would go to MongoDB)
    bookings.push(booking);
    
    console.log('New consultation booking:', booking);
    
    res.status(200).json({
      success: true,
      message: "Booking submitted successfully",
      bookingId: booking.id,
      booking: booking
    });
    
  } catch (error) {
    console.error('Error processing booking:', error);
    
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

export const getBookings: RequestHandler = (req, res) => {
  // This will be used by the admin dashboard
  const sortedBookings = bookings.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  
  res.json({
    success: true,
    bookings: sortedBookings,
    total: sortedBookings.length
  });
};

export const updateBookingStatus: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const booking = bookings.find(b => b.id === id);
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

export const getBookingById: RequestHandler = (req, res) => {
  const { id } = req.params;
  
  const booking = bookings.find(b => b.id === id);
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
