"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Image from "next/image";

export default function Home() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  return (
    <Wrapper>
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen"
      >
        <Image
          src="/image_5.jpg"
          alt="Cabinet"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-neutral-content px-6">
          <h1 className="text-5xl font-bold mb-4">
            Cabinet de psychomotricité à Ranville
          </h1>
          <p className="text-lg mb-6">
            Au sein de la Maison de Santé Pluridisciplinaire (CAEN)
          </p>
          <button className="btn btn-primary text-white">
            Prendre rendez-vous
          </button>
        </div>
      </motion.section>

      {/* PRÉSENTATION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <img
            src="/image_3.jpg"
            alt="Marion Couasse - Psychomotricienne"
            className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
          />
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Marion Couasse <br />
              <span className="text-primary">Psychomotricienne D.E</span>
            </h2>
            <p className="text-base leading-relaxed mb-4">
              <strong>Numéro SIRET :</strong> 93051265200015 <br />
              <strong>RPPS :</strong> 10007273534
            </p>
            <p className="text-base leading-relaxed">
              J’accueille les <strong>bébés, enfants et adultes</strong> pour
              des bilans et séances de psychomotricité, ainsi que des séances de
              relaxation adaptées à chacun.
            </p>
          </div>
        </div>
      </motion.section>

      {/* INFORMATIONS PRATIQUES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-200 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <h3 className="text-3xl font-semibold text-center mb-10">
            Informations pratiques
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Horaires */}
            <div className="card bg-base-100 shadow-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Horaires</h4>
              <p>
                Du <strong>lundi au jeudi</strong> sur rendez-vous
                <br />
                <span className="text-sm">
                  (Permanence téléphonique le vendredi)
                </span>
              </p>
              <p>Bébés et enfants / Relaxation adultes / Bilans et séances</p>
            </div>

            {/* Contact */}
            <div className="card bg-base-100 shadow-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Contact</h4>
              <p>
                📞 <strong>06.27.37.57.87</strong>
                <br />
                📧{" "}
                <a
                  href="mailto:marioncouasse.psychomot@gmail.com"
                  className="text-primary underline"
                >
                  marioncouasse.psychomot@gmail.com
                </a>
              </p>
            </div>

            {/* Adresse */}
            <div className="card bg-base-100 shadow-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Adresse</h4>
              <p>
                1 bis rue du stade <br />
                14860 Ranville
                <br />
                (proche Caen, Cabourg, Dives-sur-Mer)
                <br />
                <span className="text-sm">Parking gratuit — accès PMR</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT + MAP */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-base-100 py-20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <h3 className="text-3xl font-semibold text-center mb-10">
            Me contacter
          </h3>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Cabinet de psychomotricité - Ranville"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.385224043163!2d-0.269!3d49.202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a3b1bbeb8d6c9%3A0x34f6acb8bcd0d80!2s1%20Bis%20Rue%20du%20Stade%2C%2014860%20Ranville!5e0!3m2!1sfr!2sfr!4v0000000000000"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Formulaire */}
            <form
              onSubmit={handleSubmit}
              className="card bg-base-200 shadow-xl p-8"
            >
              <div className="form-control mb-4">
                <label className="label">Nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">Prenom</label>
                <input
                  type="text"
                  name="lastname"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="textarea textarea-bordered"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Envoyer
              </button>

              {formStatus === "success" && (
                <p className="text-success text-center mt-4">
                  ✅ Message envoyé avec succès !
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-error text-center mt-4">
                  ❌ Une erreur est survenue, veuillez réessayer.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.section>
    </Wrapper>
  );
}
