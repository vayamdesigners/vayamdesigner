import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, HelpCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "lucide-react";
import { useRouter } from "next/router";
export default function Contact() {
  const router = useRouter();
  return (
    <div className="min-h-screen ">
      <div className="min-h-screen bg-black pt-24 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-slate-300">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        <div className="w-full max-w-3xl bg-white rounded-lg p-6 mb-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <Input id="lastName" placeholder="Smith" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Your email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="    +91 850036976" />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Your message
              </label>
              <Textarea id="message" rows={6} />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Send message
            </Button>
          </form>
        </div>

        <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
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

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-white/10 rounded-full">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Support</h3>

            <Button variant="outline" className="text-sm">
              Support Center
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
