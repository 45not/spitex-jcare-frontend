import emailjs from 'emailjs-com';

/**
 * EmailJS Setup Guide:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create a new Email Service (e.g., Gmail, Outlook, etc.) and note down the Service ID
 * 3. Create a new Email Template with the following template variables:
 *    - to_email: The recipient email address
 *    - from_name: The sender's full name
 *    - from_email: The sender's email address
 *    - phone: The sender's phone number
 *    - canton: The canton selected by the sender
 *    - source: How the sender heard about the service
 *    - message: The formatted message containing all information
 * 4. Note down the Template ID
 * 5. Get your Public Key from the EmailJS dashboard
 * 6. Add the following environment variables to your project:
 *    - VITE_EMAILJS_SERVICE_ID: Your EmailJS Service ID (e.g., 'service_abcdef')
 *    - VITE_EMAILJS_TEMPLATE_ID: Your EmailJS Template ID (e.g., 'template_abcdef')
 *    - VITE_EMAILJS_PUBLIC_KEY: Your EmailJS Public Key (e.g., 'user_abcdefghijklmnopqrstuv')
 */

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  canton: string;
  source?: string;
  privacy: boolean;
};

export const sendEmail = async (data: ContactFormData): Promise<void> => {
  // Check if emailjs is available
  if (typeof emailjs === 'undefined') {
    throw new Error('EmailJS is not available');
  }

  // Get EmailJS configuration from environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  // Check if all required environment variables are set
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
  }
  
  // Initialize EmailJS with public key
  emailjs.init(publicKey);

  const templateParams = {
    to_email: 'famelevitsky@gmail.com',
    from_name: `${data.firstName} ${data.lastName}`,
    from_email: data.email,
    phone: data.phone,
    canton: data.canton,
    source: data.source || 'Nicht angegeben',
    message: `Neue Kontaktanfrage von ${data.firstName} ${data.lastName}. 
      Telefon: ${data.phone}
      Kanton: ${data.canton}
      Quelle: ${data.source || 'Nicht angegeben'}`,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
