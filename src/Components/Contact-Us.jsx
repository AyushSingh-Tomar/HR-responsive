import ContactForm from './ContactForm'
import CommonHeading from './CommonHeading'
import FormFooter from './FormFooter'

function ContactUs() {
  return (
    <div className="mt-[2vw] relative  flex-col items-center font-[Poppins,sans-serif] m-auto">
    <CommonHeading title="Contact us" />
    <div className=" justify-center mt-8 sm:mt-10 m-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-3xl xl:max-w-5xl ">
     <ContactForm/>
    </div>
   
  </div>
  )
}

export default ContactUs