import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, HelpCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "lucide-react";
import { useRouter } from "next/router";
import axios from "axios";
import SendMailAnimation from "@/components/SendMailAnimation";
import { Toaster, toast } from "alert";
export default function Contact() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const subject = "Enquiery about your services.";
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const emailResponse = await axios.post("/api/sendMail", {
        from: email,
        subject: subject,
        text: `Name ${firstName} ${lastName} Message: ${message}`,
      });

      if (emailResponse.status == 200) {
        toast.success("Email Sent");
        setFirstName("");
        setLastName("");
        setMessage("");
        setEmail("");
      }
    } catch (Error) {
      toast.error("Error in sending email please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen ">
      <div className="min-h-screen bg-black pt-24 flex flex-col items-center justify-center p-4">
        <Toaster position="top-center" />
        {loading && (
          <div>
            <SendMailAnimation />
          </div>
        )}
        {!loading && (
          <form
            className="w-[75%] md:w-[50%] mt-10 mx-auto space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-white">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="bg-white border-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-white">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white border-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-white">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px] bg-white border-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-normal"
            >
              Send
            </Button>
          </form>
        )}
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-white/10 rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Email us:</h3>

            <a href="mailto:hello@example.com"> nithishreddygade@gmail.com</a>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-white/10 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Call us:</h3>

            <a
              href="tel:+1234567890"
              className="text-sm text-blue-400 hover:underline"
            >
              +91 850036976
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
