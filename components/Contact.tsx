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
          _template: "box", 
          _captcha: "false" 
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
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 md:py-32 border-t border-gray-200/50 dark:border-gray-800/50 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Glows (Dark Mode Ready) */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none z-0 transition-colors duration-500"></div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        {/* --- CONSISTENT SECTION HEADER --- */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-cyan-400 rounded-full"></span>
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Together</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl leading-relaxed">
            Have a project in mind, need technical support, or just want to say hi? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* --- SPLIT WIDGET LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* =========================================
              LEFT COLUMN: CONTACT FORM
              ========================================= */}
          <div className="lg:col-span-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none h-full flex flex-col justify-center transition-colors">
            
            {status === "success" ? (
              <div className="bg-green-50/50 dark:bg-green-900/20 border border-green-200/60 dark:border-green-800/50 rounded-2xl p-8 text-center animate-fade-in flex flex-col items-center justify-center h-full min-h-[350px]">
                <FaCheckCircle className="text-6xl text-green-500 dark:text-green-400 mb-6 drop-shadow-sm" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Sent!</h3>
                <p className="text-green-700 dark:text-green-300 text-base mb-8 px-4">Thank you for reaching out. I'll check my email and get back to you shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-full hover:bg-green-50 dark:hover:bg-slate-700 active:scale-95 transition-all font-semibold text-sm shadow-sm"
                  suppressHydrationWarning
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe" 
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-white text-sm"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com" 
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-white text-sm"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="How can I help you?" 
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-white text-sm"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 ml-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="Tell me about your project or concern..." 
                    rows={5}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-800 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-white text-sm resize-none"
                    suppressHydrationWarning
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-500 dark:text-red-400 text-sm font-medium pl-2">Something went wrong. Please try again later.</p>
                )}

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto text-sm"
                    suppressHydrationWarning
                  >
                    {status === "submitting" ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
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

          {/* =========================================
              RIGHT COLUMN: CONTACT INFO
              ========================================= */}
          <div className="lg:col-span-2 flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden ring-1 ring-white/10 dark:ring-white/5">
            
            {/* Background Decorations */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex-grow">
              <h3 className="text-2xl font-extrabold mb-8 tracking-tight">Contact Info</h3>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/40 transition-colors">
                    <FaMapMarkerAlt className="text-xl text-cyan-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Location</span>
                    <span className="text-gray-100 text-sm font-medium">Malolos, Bulacan, Philippines</span>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/40 transition-colors">
                    <FaEnvelope className="text-xl text-cyan-300" />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email</span>
                    <a href="mailto:edward.layno.13@gmail.com" className="text-gray-100 text-sm font-medium hover:text-cyan-300 transition-colors break-all">
                      edward.layno.13@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/40 transition-colors">
                    <FaPhoneAlt className="text-xl text-cyan-300" />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Phone</span>
                    <a href="tel:+639625003238" className="text-gray-100 text-sm font-medium hover:text-cyan-300 transition-colors">
                      +63 962 500 3238
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative z-10 pt-8 mt-12 border-t border-white/10">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">Connect with me</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/edward.layno.184926" aria-label="Facebook" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 active:scale-90 transition-all text-white text-xl">
                  <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/edward-layno/" aria-label="LinkedIn" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 active:scale-90 transition-all text-white text-xl">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/layno.edward/" aria-label="Instagram" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 active:scale-90 transition-all text-white text-xl">
                  <FaInstagram />
                </a>
                <a href="https://github.com/bulsu-laynoee" aria-label="GitHub" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 active:scale-90 transition-all text-white text-xl">
                  <FaGithub />
                </a>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}