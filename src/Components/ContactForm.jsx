import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    enquiry: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const mailtoLink = `mailto:info@hrcompany.com?subject=Enquiry from ${encodeURIComponent(
        formData.name
      )}&body=Company: ${encodeURIComponent(formData.company)}
      %0D%0ANature of Enquiry: ${encodeURIComponent(formData.enquiry)}
      %0D%0AEmail: ${encodeURIComponent(formData.email)}
      %0D%0AMessage: ${encodeURIComponent(formData.message)}`;
      
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
      {isMobile ? (
        <div className="w-[90%] mx-auto p-6 bg-blue-500 rounded-lg shadow-lg mt-4" style={{ backgroundColor: "#3b99c8", fontFamily: "Poppins, sans-serif" }}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input type="text" name="name" placeholder="Name" className="h-12 p-3 rounded w-full bg-white" onChange={handleChange} value={formData.name} />
              {errors.name && <p className="text-red-600">{errors.name}</p>}

              <input type="text" name="company" placeholder="Company" className="h-12 p-3 rounded w-full bg-white" onChange={handleChange} value={formData.company} />
              {errors.company && <p className="text-red-600">{errors.company}</p>}

              <input type="text" name="enquiry" placeholder="Nature of Enquiry" className="h-12 p-3 rounded w-full bg-white" onChange={handleChange} value={formData.enquiry} />
              {errors.enquiry && <p className="text-red-600">{errors.enquiry}</p>}

              <input type="email" name="email" placeholder="Email" className="h-12 p-3 rounded w-full bg-white" onChange={handleChange} value={formData.email} />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>

            <textarea name="message" placeholder="Enter Your Query Here..." className="w-full p-3 rounded h-24 mb-4 bg-white" onChange={handleChange} value={formData.message}></textarea>
            {errors.message && <p className="text-red-600">{errors.message}</p>}

            <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded" style={{ backgroundColor: "#016698" }}>Send Message</button>
          </form>
        </div>
      ) : (
        <div className="w-[80%] mx-auto p-8 bg-blue-500 rounded-lg shadow-lg mt-[2vw] relative flex-col items-center font-[Poppins,sans-serif]" style={{ backgroundColor: "#3b99c8", fontFamily: "Poppins, sans-serif" }}>
          <div className="mt-8 px-6 max-w-4xl text-justify m-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <input type="text" name="name" placeholder="Name" className="h-16 p-4 rounded w-full bg-white" onChange={handleChange} value={formData.name} />
                  {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <input type="text" name="company" placeholder="Company" className="h-16 p-4 rounded w-full bg-white" onChange={handleChange} value={formData.company} />
                  {errors.company && <p className="text-red-600">{errors.company}</p>}
                </div>
                <div>
                  <input type="text" name="enquiry" placeholder="Nature of Enquiry" className="h-16 p-4 rounded w-full bg-white" onChange={handleChange} value={formData.enquiry} />
                  {errors.enquiry && <p className="text-red-600">{errors.enquiry}</p>}
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" className="h-16 p-4 rounded w-full bg-white" onChange={handleChange} value={formData.email} />
                  {errors.email && <p className="text-red-600">{errors.email}</p>}
                </div>
              </div>
              <div>
                <textarea name="message" placeholder="Enter Your Query Here..." className="w-full p-4 rounded h-40 mb-6 bg-white" onChange={handleChange} value={formData.message}></textarea>
                {errors.message && <p className="text-red-600">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded" style={{ backgroundColor: "#016698" }}>Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;



//info@hrcompany.com