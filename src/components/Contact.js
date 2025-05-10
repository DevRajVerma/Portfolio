"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
import { Send, Mail, Phone, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: "",
  })

  const [status, setStatus] = useState({
    message: "",
    type: "", // 'success' or 'error'
    visible: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm("service_sz90eii", "template_fnekr9o", e.target, "aG77XjKU30MIDXyqD")
      .then(
        (result) => {
          setStatus({
            message: "Message sent successfully! I'll get back to you soon.",
            type: "success",
            visible: true,
          })
          setFormData({ email: "", mobile: "", message: "" })
          setTimeout(() => setStatus((prev) => ({ ...prev, visible: false })), 5000)
        },
        (error) => {
          setStatus({
            message: "There was an error sending your message. Please try again.",
            type: "error",
            visible: true,
          })
          setTimeout(() => setStatus((prev) => ({ ...prev, visible: false })), 5000)
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  // Social media data with proper icons and URLs
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DevRajVerma/",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dev-raj-verma/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/Dev91854734",
      icon: <Twitter className="w-5 h-5" />,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-lg mx-auto">
              Want to connect? Drop a message and let's make things happen!
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Contact Info Section */}
              <div className="md:col-span-2 bg-gradient-to-br from-green-500 to-green-700 p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Let's talk</h3>
                    <p className="mb-10 text-green-100">
                      Fill out the form and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-4" />
                      <span>drverma2704@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 mr-4" />
                      <span>(+91) 8076603037</span>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="flex space-x-4">
                      {/* Social Media Icons - Now with different icons for each platform */}
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="md:col-span-3 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-1">
                      Mobile (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+1 (123) 456-7890"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600 transform hover:-translate-y-1 hover:shadow-lg"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Status Message */}
                {status.visible && (
                  <div
                    className={`mt-6 p-4 rounded-lg flex items-start ${
                      status.type === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
