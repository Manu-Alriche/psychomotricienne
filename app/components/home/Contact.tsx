"use client";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-base-200 py-20"
      aria-labelledby="contact-heading"
    >
      <section className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* MAP */}
          <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Localisation du cabinet de psychomotricité à Ranville"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.385224043163!2d-0.269!3d49.202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a3b1bbeb8d6c9%3A0x34f6acb8bcd0d80!2s1%20Bis%20Rue%20du%20Stade%2C%2014860%20Ranville!5e0!3m2!1sfr!2sfr!4v0000000000000"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
            />
          </div>

          {/* FORM */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold lg:text-4xl">Me contacter</h2>
            <p className="text-muted-foreground max-w-lg">
              Remplissez le formulaire ci-dessous et je reviendrai vers vous
              dans les plus brefs délais.
            </p>

            <form
              action="/mail.php"
              method="POST"
              className="flex flex-col gap-4"
            >
              <Input
                name="name"
                type="text"
                placeholder="Nom"
                required
                minLength={2}
              />

              <Input name="email" type="email" placeholder="Email" required />

              <Input name="subject" type="text" placeholder="Sujet" required />

              <Textarea
                name="message"
                placeholder="Votre message..."
                rows={6}
                required
                minLength={10}
              />

              {/* anti spam simple */}
              <input type="text" name="company" className="hidden" />

              <Button
                type="submit"
                className="w-fit bg-primary hover:bg-primary/90 text-white shadow-md transition-all"
              >
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
