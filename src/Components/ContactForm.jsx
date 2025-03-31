import React, { useState, useEffect } from "react";
import logo2 from "../assets/logo2.png";

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
      <div className={`w-[90%] mx-auto p-6 rounded-lg mt-4 ${isMobile ? '' : 'w-[80%]'}`} style={{ backgroundColor: "#fff", fontFamily: "Poppins, sans-serif" }}>
        {/* <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between mb-4  border-4 border-[#016698] p-4 rounded-lg `}> */}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between mb-4  border-4 border-black p-4 rounded-lg `}>
        <div className="p-4 bg-white w-full md:w-[40%] border border-blue-400">
  <p>0124 4961988</p>
  <p>0124 4275594</p>
  <p>+ 91 9810404656</p>
</div>

<div className="p-4 bg-white w-full md:w-[60%] border border-blue-400 overflow-hidden break-words">
  <p>info@thehrcompany.co.in</p>
  <br />
  <p className="break-words whitespace-break-spaces">
     <a href="https://www.linkedin.com/in/udai-upendra-6514895/">https://www.linkedin.com/in/udai-upendra-6514895/</a>
  </p>
</div>

        </div>

        <form onSubmit={handleSubmit}>
  {/* Wrapper div for Name, Organization, Enquiry, and Email */}
  {/* <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 mb-4 border-4 border-[#016698] p-4 rounded-lg"> */}
  <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 mb-4 border-4 border-black p-4 rounded-lg">
    <div className="w-full">
      <label className="block mb-1">{'\u00A0'}Name :</label>
      <input
        type="text"
        name="name"
        className="h-12 p-3 w-full bg-white border-2 border-[#016698] rounded"
        onChange={handleChange}
        value={formData.name}
      />
      {errors.name && <p className="text-red-600">{errors.name}</p>}
    </div>
    <div className="w-full">
      <label className="block mb-1">{'\u00A0'}Organization :</label>
      <input
        type="text"
        name="company"
        className="h-12 p-3 w-full bg-white border-2 border-[#016698] rounded"
        onChange={handleChange}
        value={formData.company}
      />
      {errors.company && <p className="text-red-600">{errors.company}</p>}
    </div>
    <div className="w-full">
      <label className="block mb-1">{'\u00A0'}Phone :</label>
      <input
        type="phone"
        name="enquiry"
        className="h-12 p-3 w-full bg-white border-2 border-[#016698] rounded"
        onChange={handleChange}
        value={formData.enquiry}
      />
      {errors.enquiry && <p className="text-red-600">{errors.enquiry}</p>}
    </div>
    <div className="w-full">
      <label className="block mb-1">{'\u00A0'}Email :</label>
      <input
        type="email"
        name="email"
        className="h-12 p-3 w-full bg-white border-2 border-[#016698] rounded"
        onChange={handleChange}
        value={formData.email}
      />
      {errors.email && <p className="text-red-600">{errors.email}</p>}
    </div>
  </div>

  {/* <div className="border-4 border-[#016698] p-4 rounded-lg"> */}
  <div className="border-4 border-black p-4 rounded-lg">
    <label className="block mb-1">Message :</label>
    <textarea
      name="message"
      className="w-full p-3 h-24 mb-4 bg-white border-2 border-[#016698] rounded"
      onChange={handleChange}
      value={formData.message}
    ></textarea>
    {errors.message && <p className="text-red-600">{errors.message}</p>}
  </div>

  <div className="flex justify-center">
  <button
    type="submit"
    className=" p-2 bg-[#016698] text-white py-3 rounded mt-4 border-2 border-[#016698] hover:bg-blue-800"
  >
    Send Message
  </button>
</div>

</form>



        <img
          src={logo2}
          className="hidden sm:block absolute right-[2vw] bottom-[-4vw] h-[5vw] min-h-[40px]"
          alt="Logo"
        />
      </div>
    </>
  );
};

export default ContactForm;





//info@hrcompany.com