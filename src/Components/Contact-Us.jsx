import ContactForm from './ContactForm'
import CommonHeading from './CommonHeading'
import FormFooter from './FormFooter'

function ContactUs() {
  return (
    <div className='mt-[2vw] relative px-4 sm:px-8 max-w-screen-lg '>
      <CommonHeading title="Contact Us" />
      <ContactForm />
    </div>
  )
}

export default ContactUs