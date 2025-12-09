import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using EmailJS to send emails
      // You'll need to sign up at https://www.emailjs.com/ and replace these values
      const serviceId = "service_enp3tt8"; // Replace with your EmailJS service ID
      const templateId = "template_uf9w7wk"; // Replace with your EmailJS template ID
      const publicKey = "Gz3gUehSf3Ngaaa_s"; // Replace with your EmailJS public key

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Dhanur Motwani", // Replace with your name
          },
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or contact me directly via email.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhanurmotwani07@gmail.com",
      href: "mailto:dhanurmotwani07@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (617) 821-4571",
      href: "tel:+16178214571",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Seattle, WA",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-mono mb-2">// Contact</h2>
            <h3 className="text-slate-100 mb-4">Let's work together</h3>
            <p className="text-blue-200/80 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-blue-900/20 border-blue-400/20 hover:border-teal-400/50 transition-all backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-teal-400 mx-auto mb-3" />
                    </motion.div>
                    <p className="text-blue-300 mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-blue-100 hover:text-teal-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-blue-100">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-blue-900/20 border-blue-400/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-200 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-blue-950/30 border-blue-400/20 text-blue-100 focus:border-teal-400 placeholder:text-blue-400/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-blue-200 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-blue-950/30 border-blue-400/20 text-blue-100 focus:border-teal-400 placeholder:text-blue-400/40"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-blue-200 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-blue-950/30 border-blue-400/20 text-blue-100 focus:border-teal-400 min-h-[150px] placeholder:text-blue-400/40"
                      placeholder="Your message..."
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}