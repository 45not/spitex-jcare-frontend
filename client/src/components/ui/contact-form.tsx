import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailjs";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Vorname ist erforderlich" }),
  lastName: z.string().min(1, { message: "Nachname ist erforderlich" }),
  email: z.string().email({ message: "Gültige E-Mail-Adresse erforderlich" }),
  phone: z.string().min(1, { message: "Telefonnummer ist erforderlich" }),
  canton: z.string().min(1, { message: "Kanton ist erforderlich" }),
  source: z.string().optional(),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Sie müssen der Datenschutzerklärung zustimmen" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const cantons = [
  "Aargau", "Appenzell Innerrhoden", "Appenzell Ausserrhoden", "Bern", 
  "Basel-Landschaft", "Basel-Stadt", "Fribourg", "Genève", "Glarus", 
  "Graubünden", "Jura", "Luzern", "Neuchâtel", "Nidwalden", "Obwalden", 
  "St. Gallen", "Schaffhausen", "Solothurn", "Schwyz", "Thurgau", 
  "Ticino", "Uri", "Vaud", "Valais", "Zug", "Zürich"
];

const sources = [
  "Internet", "Freunde/Familie", "Arzt/Ärztin", "Soziale Medien", "Sonstiges"
];

export function ContactForm() {
  const { toast } = useToast();
  
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
      await sendEmail(data);
      toast({
        title: "Vielen Dank!",
        description: "Wir werden uns innerhalb eines Werktages bei Ihnen melden.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Ein Fehler ist aufgetreten",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
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
                <FormLabel>Vorname *</FormLabel>
                <FormControl>
                  <Input placeholder="Vorname" {...field} />
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
                <FormLabel>Nachname *</FormLabel>
                <FormControl>
                  <Input placeholder="Nachname" {...field} />
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
                <FormLabel>E-Mail *</FormLabel>
                <FormControl>
                  <Input placeholder="E-Mail" type="email" {...field} />
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
                <FormLabel>Telefonnummer *</FormLabel>
                <FormControl>
                  <Input placeholder="Telefonnummer" {...field} />
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
                <FormLabel>Kanton der pflegebedürftigen Person *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen..." />
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
                <FormLabel>Wie haben Sie von uns erfahren?</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sources.map((source) => (
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
                  Ich stimme der <a href="#" className="text-teal-600 hover:underline">Datenschutzerklärung</a> zu *
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full py-3 px-4 text-lg font-medium rounded-lg bg-gradient-to-r from-[#FF9155] to-[#E23B3B] hover:shadow-lg text-white"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Wird gesendet..." : "Absenden"}
        </Button>
      </form>
    </Form>
  );
}
