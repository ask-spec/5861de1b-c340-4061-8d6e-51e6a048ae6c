import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Hiba",
        description: "Kérjük, fogadja el az adatvédelmi szabályzatot.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Sikeres küldés",
        description: "Üzenetét megkaptuk, hamarosan felvesszük Önnel a kapcsolatot.",
      });

      // Redirect to thank you page
      navigate("/koszonjuk");
    } catch (error) {
      toast({
        title: "Hiba történt",
        description: "Kérjük, próbálja újra később.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Név *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                       focus:border-transparent transition-all duration-200"
              placeholder="Teljes név"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            E-mail cím *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                       focus:border-transparent transition-all duration-200"
              placeholder="email@pelda.hu"
            />
          </div>
        </div>
      </div>

      {/* Phone and Subject Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Telefonszám
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                       focus:border-transparent transition-all duration-200"
              placeholder="+36 30 123 4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Téma *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground 
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                     transition-all duration-200"
          >
            <option value="">Válasszon témát</option>
            <option value="ingyenes-konzultacio">Ingyenes konzultáció</option>
            <option value="nyugdij-tervezes">Nyugdíj-tervezés</option>
            <option value="befektetes">Befektetési tanácsadás</option>
            <option value="biztositas">Biztosítási konzultáció</option>
            <option value="ado">Adóoptimalizálás</option>
            <option value="egyeb">Egyéb kérdés</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Üzenet *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground 
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                     focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Írja le kérdését vagy igényét..."
          />
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={handleCheckboxChange}
          className="mt-1 h-4 w-4 text-primary focus:ring-primary border-input rounded"
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          Elfogadom az{" "}
          <a href="/gdpr" className="text-primary hover:underline">
            adatvédelmi szabályzatot
          </a>{" "}
          és hozzájárulok személyes adataim kezeléséhez. *
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-hero flex items-center justify-center space-x-2 disabled:opacity-50 
                 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Küldés...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Üzenet küldése</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;