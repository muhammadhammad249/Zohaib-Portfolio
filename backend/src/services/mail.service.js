import nodemailer from "nodemailer";
import { env, hasSmtpConfigured } from "../config/env.js";

let transporter = null;

function getTransporter() {
  if (!transporter && hasSmtpConfigured) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS
      }
    });
  }
  return transporter;
}

export async function sendContactEmail({ name, email, subject, message }) {
  if (!hasSmtpConfigured) {
    const error = new Error("Email service is currently unavailable. Please contact directly via email or WhatsApp.");
    error.statusCode = 503;
    throw error;
  }

  const mailClient = getTransporter();

  const mailOptions = {
    from: `"${name} (Portfolio Inquiry)" <${env.SMTP_USER}>`,
    to: env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    text: `You received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e08da0; border-radius: 12px; background-color: #fbe8ec; color: #1a060c;">
        <h2 style="color: #800020; border-bottom: 2px solid #800020; padding-bottom: 10px;">New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #800020;">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px; padding: 15px; background: #ffffff; border-radius: 8px; border-left: 4px solid #800020; white-space: pre-wrap;">
          ${message}
        </div>
        <p style="margin-top: 25px; font-size: 12px; color: #6d1a2e;">Sent from Zohaib Rukhsar Portfolio Contact Form</p>
      </div>
    `
  };

  const info = await mailClient.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}

