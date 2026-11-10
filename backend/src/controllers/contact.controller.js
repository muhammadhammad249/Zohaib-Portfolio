import { sendContactEmail } from "../services/mail.service.js";

export async function handleContactSubmission(req, res, next) {
  try {
    const { name, email, subject, message, honeypot } = req.body;

    // Honeypot check (anti-spam)
    if (honeypot && honeypot.trim().length > 0) {
      return res.status(400).json({
        success: false,
        message: "Bot submission detected"
      });
    }

    await sendContactEmail({ name, email, subject, message });

    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! Your message has been sent successfully. I will get back to you soon."
    });
  } catch (error) {
    next(error);
  }
}

