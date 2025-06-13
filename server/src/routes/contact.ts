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
console.log('Nodemailer config:', {
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
   
    // Debug: Log incoming reCAPTCHA token
    //console.log('Received reCAPTCHA token:', data.recaptchaToken?.slice(0, 20) + '...');
    //console.log('Using reCAPTCHA secret (first 8 chars):', (process.env.RECAPTCHA_SECRET_KEY || '').slice(0, 8));

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

    // Debug: Log Google API response
    console.log('Google reCAPTCHA API response:', recaptchaResponse.data);

    // For v3: check success and score
    if (!recaptchaResponse.data.success) {
      console.log('reCAPTCHA not successful');
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
    if (typeof recaptchaResponse.data.score === 'number') {
      console.log('reCAPTCHA v3 score:', recaptchaResponse.data.score);
      if (recaptchaResponse.data.score < 0.5) {
        console.log('reCAPTCHA v3 score too low');
        return res.status(400).json({ message: 'reCAPTCHA score too low' });
      }
    }

    // Create Nodemailer transporter INSIDE the handler
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Optionally verify transporter
    transporter.verify(function(error, success) {
      if (error) {
        console.error('Nodemailer connection error:', error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

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