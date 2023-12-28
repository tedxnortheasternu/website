import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Contact Us
        </h1>
      </div>

      <div className="max-w-md p-8 mx-auto border rounded-md border-slate-200">
        <ContactForm />
      </div>
    </>
  )
}
