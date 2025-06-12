import { Router } from 'express';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import axios from 'axios';

const router = Router();

// Rate limiting middleware
const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute per IP
  message: 'Too many contact form submissions, please try again later'
});

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  canton: z.string().min(1),
  source: z.string().optional(),
  privacy: z.literal(true),
  recaptchaToken: z.string()
});

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post('/contact', contactLimiter, async (req, res) => {
  try {
    // Validate request body
    const data = contactSchema.parse(req.body);

    // Verify reCAPTCHA
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: data.recaptchaToken,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@j-care.ch',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Canton:</strong> ${data.canton}</p>
        ${data.source ? `<p><strong>Source:</strong> ${data.source}</p>` : ''}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Invalid form data' });
    }
    res.status(500).json({ message: 'Failed to send message' });
  }
});

export default router; 