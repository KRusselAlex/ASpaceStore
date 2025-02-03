import { PhoneCall, Mail, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
// import { useState } from "react";
import Link from "next/link";
import { SiTiktok } from "react-icons/si";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

interface ContactFormData {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  topics: string[]; // Array since multiple checkboxes can be selected
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>(); // Using the defined interface

  //   const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // setSubmitted(true);
    reset(); // Reset form after submission
  };
  return (
    <div className="bg-fourthly w-full">
      <div className="max-w-6xl flex gap-5 justify-center mx-auto p-6 py-16 ">
        <div className="w-1/3">
          <div>
            <h3>Contact Information</h3>
            <p>Say something to start a live chat!</p>
          </div>
          <div>
            <div>
              <PhoneCall className="w-5 h-5" />

              <p>+1012 3456 789</p>
            </div>
            <div>
              <Mail className="w-5 h-5" />
              <p>demo@gmail.com</p>
            </div>
            <div>
              <MapPin className="w-5 h-5" />
              <p>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5 justify-center md:justify-start items-center">
            <Link
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaFacebookF size={25} />
            </Link>
            <Link
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaInstagram size={25} />
            </Link>
            <Link
              href="https://www.pinterest.com"
              aria-label="Pinterest"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaPinterestP size={25} />
            </Link>
            <Link
              href="https://www.twitter.com"
              aria-label="Twitter"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaTwitter size={25} />
            </Link>
            <Link
              href="https://www.tiktok.com"
              aria-label="TikTok"
              className="transition-transform duration-300 hover:scale-125"
            >
              <SiTiktok size={25} />
            </Link>
          </div>
        </div>
        <div className="w-2/3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium">First Name</label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full p-2 border rounded-lg"
              />
              {errors.firstName?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.firstName.message)}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-medium">Last Name</label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full p-2 border rounded-lg"
              />
              {errors.lastName?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.lastName.message)}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block font-medium">Country</label>
              <input
                {...register("country", { required: "Country is required" })}
                className="w-full p-2 border rounded-lg"
              />
              {errors.country?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.country.message)}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+\.\S+$/,
                })}
                className="w-full p-2 border rounded-lg"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            {/* Select Topic */}
            <div>
              <label className="block font-medium">Select Topics</label>
              <div className="flex flex-col space-y-2">
                {["Support", "Feedback", "General Inquiry"].map((topic) => (
                  <label key={topic} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("topics", {
                        required: "Please select at least one topic",
                      })}
                      value={topic.toLowerCase()} // Convert to lowercase for consistency
                      className="w-4 h-4"
                    />
                    <span>{topic}</span>
                  </label>
                ))}
              </div>
              {errors.topics?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.topics.message)}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 border rounded-lg"
                rows={4}
              ></textarea>
              {errors.message?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.message.message)}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
