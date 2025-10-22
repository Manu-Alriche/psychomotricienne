import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({} as Record<string, string>);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Nom requis";
    if (!formData.email) newErrors.email = "Email requis";
    if (!formData.subject) newErrors.subject = "Sujet requis";
    if (!formData.message) newErrors.message = "Message requis";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Ici, envoyer le formulaire à votre backend ou service email
      alert("Formulaire envoyé !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-200 py-20"
    >
      <section className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Google Map */}
          <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.385224043163!2d-0.269!3d49.202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a3b1bbeb8d6c9%3A0x34f6acb8bcd0d80!2s1%20Bis%20Rue%20du%20Stade%2C%2014860%20Ranville!5e0!3m2!1sfr!2sfr!4v0000000000000"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Formulaire de contact */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold lg:text-4xl">Contactez-nous</h2>
            <p className="text-muted-foreground max-w-lg">
              Remplissez le formulaire ci-dessous et nous reviendrons vers vous
              rapidement.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Nom */}
              <div className="relative">
                <Input
                  name="name"
                  type="text"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer transition-colors duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer transition-colors duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Sujet */}
              <div className="relative">
                <Input
                  name="subject"
                  type="text"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer transition-colors duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <Textarea
                  name="message"
                  placeholder="Votre message..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer transition-colors duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-fit duration-200">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Contact;
