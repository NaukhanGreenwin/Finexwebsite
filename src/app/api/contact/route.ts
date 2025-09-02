import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend (you'll need to set RESEND_API_KEY in your environment)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per window

  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown";

    // Check rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Log the contact form submission (in production, use proper logging)
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      timestamp: new Date().toISOString(),
      ip,
    });

    // Send email notification (if Resend is configured)
    if (resend && process.env.CONTACT_EMAIL) {
      try {
        await resend.emails.send({
          from: "noreply@finexdevelopment.com", // Use your verified domain
          to: process.env.CONTACT_EMAIL,
          subject: `New Contact Form Submission from ${validatedData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Address:</strong> ${validatedData.address}</p>
            ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        });

        // Send auto-reply to the user
        await resend.emails.send({
          from: "noreply@finexdevelopment.com",
          to: validatedData.email,
          subject: "Thank you for contacting Finex Development",
          html: `
            <h2>Thank you for your inquiry!</h2>
            <p>Dear ${validatedData.name},</p>
            <p>Thank you for contacting Finex Development. We have received your message and will get back to you within 24 hours.</p>
            <p>Here's a copy of your message:</p>
            <blockquote style="border-left: 4px solid #1B3A5A; padding-left: 16px; margin: 16px 0; color: #666;">
              ${validatedData.message.replace(/\n/g, '<br>')}
            </blockquote>
            <p>If you have any urgent matters, please don't hesitate to call us at (905) 555-0123.</p>
            <p>Best regards,<br>The Finex Development Team</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails, just log it
      }
    }

    // Return success response
    return NextResponse.json(
      { 
        ok: true, 
        message: "Thank you for your message. We'll get back to you soon!" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation failed", 
          details: error.issues.map(e => ({ field: e.path.join('.'), message: e.message }))
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
