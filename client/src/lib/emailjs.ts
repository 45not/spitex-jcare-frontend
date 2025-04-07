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
  if (typeof window.emailjs === 'undefined') {
    throw new Error('EmailJS is not available');
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';

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
    await window.emailjs.send(serviceId, templateId, templateParams);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
