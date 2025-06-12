import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailjs";
import { useState, useRef } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  canton: string;
  source?: string;
  privacy: boolean;
};

const cantons = [
  "Aargau", "Appenzell Innerrhoden", "Appenzell Ausserrhoden", "Bern", 
  "Basel-Landschaft", "Basel-Stadt", "Fribourg", "Genève", "Glarus", 
  "Graubünden", "Jura", "Luzern", "Neuchâtel", "Nidwalden", "Obwalden", 
  "St. Gallen", "Schaffhausen", "Solothurn", "Schwyz", "Thurgau", 
  "Ticino", "Uri", "Vaud", "Valais", "Zug", "Zürich"
];

// The sources will be translated according to the current language
const getSourceOptions = (t: any) => [
  t('contact.form.sources.internet'), 
  t('contact.form.sources.friends'), 
  t('contact.form.sources.doctor'), 
  t('contact.form.sources.social'), 
  t('contact.form.sources.other')
];

export function ContactForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const formSchema = z.object({
    firstName: z.string().min(1, { message: t('contact.form.firstName') + " " + t('is required') }),
    lastName: z.string().min(1, { message: t('contact.form.lastName') + " " + t('is required') }),
    email: z.string().email({ message: t('valid email required') }),
    phone: z.string().min(1, { message: t('contact.form.phone') + " " + t('is required') }),
    canton: z.string().min(1, { message: t('contact.form.canton') + " " + t('is required') }),
    source: z.string().optional(),
    privacy: z.literal(true, {
      errorMap: () => ({ message: t('must agree to privacy policy') }),
    }),
  });
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      canton: "",
      source: "",
      privacy: false as any, // Using 'as any' to bypass TypeScript check, will be set by user interaction
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      console.log('VITE_RECAPTCHA_SITE_KEY:', import.meta.env.VITE_RECAPTCHA_SITE_KEY);      console.log("Submitting form data:", data);
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA not yet available');
      }
      const token = await executeRecaptcha('contact_form');
      console.log("reCAPTCHA v3 token:", token);
      if (!token) {
        throw new Error('reCAPTCHA verification failed');
      }
      // Send to backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });
      console.log("Fetch response:", response);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }
      toast({ title: t('contact.form.success'), description: t('contact.form.success') });
      form.reset();
      setTimeout(() => setIsSubmitting(false), 30000);
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        description: error instanceof Error ? error.message : t('contact.form.error'),
        variant: "destructive",
      });
      setIsSubmitting(false);
      console.error("Error in onSubmit:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.firstName')} *</FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.form.firstName')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.lastName')} *</FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.form.lastName')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.email')} *</FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.form.email')} type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.phone')} *</FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.form.phone')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="canton"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.canton')} *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('please select')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cantons.map((canton) => (
                      <SelectItem key={canton} value={canton}>
                        {canton}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.source')}</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('please select')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {getSourceOptions(t).map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  {t('contact.form.privacy')} <a href="/privacy" className="text-[#E23B3B] hover:underline">{t('privacy policy')}</a> *
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full py-3 px-4 text-lg font-medium rounded-full bg-gradient-to-r from-[#FF9155] to-[#E23B3B] hover:shadow-lg text-white"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? t('sending...') : t('contact.form.button')}
        </Button>
      </form>
    </Form>
  );
}
