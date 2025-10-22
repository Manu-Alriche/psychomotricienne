import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface ContactProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const Contact = ({
  title = "Nous contactez",
  description = "Pour toute question ou prise de rendez-vous, n’hésitez pas à me contacter.",
  emailLabel = "Email",
  emailDescription = "Je vous répondrai dans un délai de 24 heures.",
  email = "marioncouasse.psychomot@gmail.com",
  officeLabel = "Cabinet",
  officeDescription = "Venez me rencontrer au cabinet.",
  officeAddress = "1 bis rue du stade, 14860 Ranville",
  phoneLabel = "Téléphone",
  phoneDescription = "Je suis disponible du lundi au jeudi, de 9h à 17h",
  phone = "06.27.37.57.87",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
}: ContactProps) => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 lg:py-20 bg-background"
    >
      <section>
        <div className="container">
          <div className="mb-14">
            <h1 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
              {title}
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              {description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted rounded-lg p-6">
              <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                <Mail className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
              <p className="text-muted-foreground mb-3">{emailDescription}</p>
              <a
                href={`mailto:${email}`}
                className="font-semibold hover:underline"
              >
                {email}
              </a>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                <MapPin className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
              <p className="text-muted-foreground mb-3">{officeDescription}</p>
              <a href="#" className="font-semibold hover:underline">
                {officeAddress}
              </a>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                <Phone className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
              <p className="text-muted-foreground mb-3">{phoneDescription}</p>
              <a
                href={`tel:${phone}`}
                className="font-semibold hover:underline"
              >
                {phone}
              </a>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                <MessageCircle className="h-6 w-auto" />
              </span>
              <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
              <p className="text-muted-foreground mb-3">{chatDescription}</p>
              <a href="#" className="font-semibold hover:underline">
                {chatLink}
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Contact;
