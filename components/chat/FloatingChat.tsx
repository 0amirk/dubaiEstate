"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call Us",
      action: () => (window.location.href = "tel:+919967846250"),
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      action: () => (window.location.href = "https://wa.me/911234567890"),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      action: () => (window.location.href = "mailto:contact@realtypro.com"),
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 p-4 text-white transition-colors rounded-full shadow-lg bottom-6 right-6 bg-primary hover:bg-primary/90"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-max">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center gap-4">
            {contactOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className="flex items-center p-4 transition-colors rounded-lg"
              >
                <div className="p-2 transition-transform transform rounded-full bg-primary/10 text-primary hover:scale-125">
                  {option.icon}
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
