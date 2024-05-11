import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

interface EmailData {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  message: string;
}

interface MailOption {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phoneNumber, location, message }: EmailData =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.BUSINESS_EMAIL as string,
        pass: process.env.BUSINESS_EMAIL_PASSWORD as string,
      },
    });

    const mailOption: MailOption = {
      from: process.env.BUSINESS_EMAIL as string,
      to: process.env.BUSINESS_EMAIL as string,
      subject: "New message from your website contact form", // Subject line
      html: `
      <p>You have a new message from your website contact form:</p>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Location: ${location}</p>
      <p>Message: ${message}</p>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Log the error
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}

