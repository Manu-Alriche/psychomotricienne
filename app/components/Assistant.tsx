// "use client";

// import { useState } from "react";
// import { MessageCircle, X } from "lucide-react";
// import { Button } from "@/app/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/app/components/ui/card";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ContactAssistant() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <AnimatePresence>
//         {isOpen ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.25 }}
//             className="relative"
//           >
//             <Card className="w-80 shadow-2xl border-border bg-background">
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-base font-semibold">
//                   💬 Besoin d’aide ?
//                 </CardTitle>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </CardHeader>
//               <CardContent className="text-sm text-muted-foreground space-y-3">
//                 <p>Bonjour 👋 Je suis Marion, psychomotricienne à Ranville.</p>
//                 <p>
//                   Vous pouvez me contacter :
//                   <br />
//                   <strong>📞 06.27.37.57.87</strong>
//                   <br />
//                   <strong>✉ marioncouasse.psychomot@gmail.com</strong>
//                 </p>
//                 <p>
//                   Je réponds sous 24h à vos demandes de contact ou de
//                   rendez-vous.
//                 </p>
//                 <Button
//                   className="w-full mt-2"
//                   onClick={() => (window.location.href = "#contact")}
//                 >
//                   Accéder au formulaire
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ) : null}
//       </AnimatePresence>

//       {!isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <Button
//             size="icon"
//             className="rounded-full h-14 w-14 shadow-lg bg-primary text-white hover:bg-primary/80"
//             onClick={() => setIsOpen(true)}
//           >
//             <MessageCircle className="h-6 w-6" />
//           </Button>
//         </motion.div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  // --- 🔄 Charger depuis localStorage ---
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    const savedOpen = localStorage.getItem("chatOpen");

    if (savedMessages) setMessages(JSON.parse(savedMessages));
    else
      setMessages([
        {
          from: "bot",
          text: "Bonjour 👋 Je suis l’assistante virtuelle de Marion. Comment puis-je vous aider ?",
        },
      ]);

    if (savedOpen === "true") setIsOpen(true);
  }, []);

  // --- 💾 Sauvegarder messages + état ---
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    localStorage.setItem("chatOpen", String(isOpen));
  }, [messages, isOpen]);

  // --- ✉ Envoi message ---
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user" as const, text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const response = getBotResponse(input.trim().toLowerCase());
      setMessages((prev) => [
        ...prev,
        { from: "bot" as const, text: response },
      ]);
    }, 600);
  };

  // --- 🤖 Réponses ---
  const getBotResponse = (message: string) => {
    if (message.includes("bonjour") || message.includes("salut"))
      return "Bonjour 😊 Souhaitez-vous prendre rendez-vous ou obtenir une information ?";
    if (message.includes("tarif"))
      return "💶 Le tarif d’un bilan est de 200 € et une séance de suivi est à 44 €.";
    if (message.includes("rendez") || message.includes("contact"))
      return "📞 Vous pouvez me joindre au 06.27.37.57.87 ou par mail à marioncouasse.psychomot@gmail.com.";
    if (message.includes("adresse") || message.includes("où"))
      return "🏠 Le cabinet se situe au 1 bis rue du stade, 14860 Ranville.";
    if (message.includes("merci"))
      return "Avec plaisir 🌸 N’hésitez pas si vous avez d’autres questions !";
    return "Je ne suis pas sûre d’avoir compris 🤔 Vous pouvez me demander les tarifs, l’adresse ou les contacts.";
  };

  // --- 🗑️ Effacer historique ---
  const clearChat = () => {
    setMessages([
      {
        from: "bot",
        text: "Historique effacé 🧹. Comment puis-je vous aider à nouveau ?",
      },
    ]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="w-80 h-96 flex flex-col shadow-2xl border-border bg-background">
              <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
                <CardTitle className="text-base font-semibold">
                  💬 Chat Marion
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearChat}
                    title="Effacer l’historique"
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    title="Fermer"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto space-y-3 py-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-xl text-sm ${
                        msg.from === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="flex gap-2 pt-2 border-t">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Écrire un message..."
                  className="text-sm"
                />
                <Button size="icon" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="icon"
            className="rounded-full h-14 w-14 shadow-lg bg-primary text-white hover:bg-primary/80"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
