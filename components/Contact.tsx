"use client";

import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaFacebook, 
  FaLinkedin, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaSpinner,
  FaPhoneAlt,
  FaInstagram,   
  // BAGONG IMPORT: GitHub icon
  FaGithub        
} from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Using FormSubmit API to send email directly to your Gmail
      const response = await fetch("https://formsubmit.co/ajax/edward.layno.13@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _template: "box", // Beautiful email template
          _captcha: "false" // Disable annoying captcha for better UX
        }),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 border-t border-gray-200/50">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        {/* Main Card Container */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            
            {/* Left Column: Contact Form */}
            <div className="flex flex-col h-full justify-center">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Together</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg">Send me a message and I'll get back to you as soon as possible.</p>
              </div>
              
              {status === "success" ? (
                <div className="bg-green-50/50 border border-green-200/60 rounded-2xl p-8 text-center animate-fade-in flex flex-col items-center justify-center min-h-[400px]">
                  <FaCheckCircle className="text-6xl text-green-500 mb-6 drop-shadow-sm" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-green-700 text-base mb-8 px-4">Thank you for reaching out. I'll check my email and get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-white border border-green-200 text-green-700 rounded-full hover:bg-green-50 hover:shadow-sm transition-all font-semibold text-sm"
                    suppressHydrationWarning
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} suppressHydrationWarning>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Your Name" 
                        className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400 text-gray-800 text-sm"
                        suppressHydrationWarning
                      />
                    </div>
                    <div className="group">
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Your Email" 
                        className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400 text-gray-800 text-sm"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      placeholder="Subject" 
                      className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400 text-gray-800 text-sm"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      required
                      placeholder="Tell me about your project..." 
                      rows={5}
                      className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all placeholder-gray-400 text-gray-800 text-sm resize-none"
                      suppressHydrationWarning
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium pl-2">Something went wrong. Please try again later.</p>
                  )}

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto text-sm"
                      suppressHydrationWarning
                    >
                      {status === "submitting" ? (
                        <>
                          <FaSpinner className="animate-spin text-base" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Info */}
            <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-10 rounded-[1.5rem] text-white shadow-xl relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/40 transition-colors">
                      <FaMapMarkerAlt className="text-lg text-blue-300" />
                    </div>
                    <div className="flex flex-col mt-0.5">
                      <span className="text-xs text-gray-400 font-medium mb-1">Location</span>
                      <span className="text-gray-100 text-base leading-snug">Malolos, Bulacan, Philippines</span>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/40 transition-colors">
                      <FaEnvelope className="text-lg text-blue-300" />
                    </div>
                    <div className="flex flex-col mt-0.5 w-full">
                      <span className="text-xs text-gray-400 font-medium mb-1">Email</span>
                      <a href="mailto:edward.layno.13@gmail.com" className="text-gray-100 text-base hover:text-blue-400 transition-colors break-all">
                        edward.layno.13@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/40 transition-colors">
                      <FaPhoneAlt className="text-lg text-blue-300" />
                    </div>
                    <div className="flex flex-col mt-0.5 w-full">
                      <span className="text-xs text-gray-400 font-medium mb-1">Phone</span>
                      <a href="tel:+63962500xxxx" className="text-gray-100 text-base hover:text-blue-400 transition-colors">
                        +63 962 500 3238
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
                <p className="text-xs text-gray-400 mb-3 font-medium">Connect with me</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.facebook.com/edward.layno.184926" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:-translate-y-1 transition-all text-white text-lg">
                    <FaFacebook />
                  </a>
                  <a href="https://www.linkedin.com/in/edward-layno/" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:-translate-y-1 transition-all text-white text-lg">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/layno.edward/" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:-translate-y-1 transition-all text-white text-lg">
                    <FaInstagram />
                  </a>
                  <a href="https://github.com/bulsu-laynoee" aria-label="GitHub" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:-translate-y-1 transition-all text-white text-lg">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}