import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    enquiry: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.enquiry.trim()) newErrors.enquiry = "Enquiry type is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const mailtoLink = `mailto:info@hrcompany.com?subject=Enquiry from ${encodeURIComponent(
        formData.name
      )}&body=Company: ${encodeURIComponent(formData.company)}%0D%0A
      Nature of Enquiry: ${encodeURIComponent(formData.enquiry)}%0D%0A
      Email: ${encodeURIComponent(formData.email)}%0D%0A
      Message: ${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      setTimeout(() => setIsSubmitting(false), 2000);
    }
  };

  return (
    <div 
      className="max-w-4xl mx-auto p-8 bg-blue-500 rounded-lg shadow-lg my-12"
      style={{ backgroundColor: "#3b99c8", fontFamily: "Poppins, sans-serif" }}
    >
      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <div>
          <input 
            type="text" name="name" placeholder="Name" 
            className={`h-16 p-4 rounded w-full bg-white ${errors.name ? 'border-red-500 border' : ''}`} 
            onChange={handleChange} value={formData.name} 
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>
        
        <div>
          <input 
            type="text" name="company" placeholder="Company" 
            className={`h-16 p-4 rounded w-full bg-white ${errors.company ? 'border-red-500 border' : ''}`} 
            onChange={handleChange} value={formData.company} 
          />
          {errors.company && <p className="text-red-600">{errors.company}</p>}
        </div>

        <div>
          <input 
            type="text" name="enquiry" placeholder="Nature of Enquiry" 
            className={`h-16 p-4 rounded w-full bg-white ${errors.enquiry ? 'border-red-500 border' : ''}`} 
            onChange={handleChange} value={formData.enquiry} 
          />
          {errors.enquiry && <p className="text-red-600">{errors.enquiry}</p>}
        </div>

        <div>
          <input 
            type="email" name="email" placeholder="Email" 
            className={`h-16 p-4 rounded w-full bg-white ${errors.email ? 'border-red-500 border' : ''}`} 
            onChange={handleChange} value={formData.email} 
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>

        <div className="md:col-span-2">
          <textarea
            name="message" placeholder="Enter Your Query Here..."
            className={`w-full p-4 rounded h-40 bg-white ${errors.message ? 'border-red-500 border' : ''}`}
            onChange={handleChange} value={formData.message}
          ></textarea>
          {errors.message && <p className="text-red-600">{errors.message}</p>}
        </div>

        <div className="md:col-span-2">
          <button 
            type="submit"
            className="w-full bg-blue-700 text-white py-4 rounded disabled:opacity-50"
            style={{ backgroundColor: "#016698" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;