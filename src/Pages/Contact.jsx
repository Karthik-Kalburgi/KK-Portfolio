import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      e.preventDefault(); // Stop form submission if errors exist
    } else {
      // let Netlify handle the form submission
    }
  };

  // Form successfully submitted
  if (submitted) {
    return (
      <section
        id="contact"
        className="py-16 bg-gray-50 px-4 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">
          Thank you for contacting me!
        </h2>
        <p className="text-gray-700">I’ll get back to you soon.</p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
          Contact Me
        </h2>

        <form
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          data-netlify-recaptcha="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Netlify hidden inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* reCAPTCHA automatically rendered by Netlify */}
          <div data-netlify-recaptcha="true" className="mt-4" />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
