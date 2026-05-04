import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend is configured, send email
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "richard123tandean@gmail.com",
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <h3>New message from ${name}</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      });

      if (error) {
        console.error("[Contact] Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send message. Please try emailing me directly." },
          { status: 500 }
        );
      }
    } else {
      console.log(`[Contact] From: ${name} <${email}>\nSubject: ${subject}\nMessage: ${message}`);
    }

    return NextResponse.json(
      { success: true, message: "Message sent! I'll get back to you soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
