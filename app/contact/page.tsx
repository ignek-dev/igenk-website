"use client"
import React from "react"
import { Metadata } from "next"
import Image from "next/image"

const metadata: Metadata = {
  title: "Contact Us | Liferay Development, Customization & Consulting Experts",
  description:
    "Contact our team for Liferay development, customization, support, and digital transformation services tailored to your business needs.",

  openGraph: {
    url: "https://www.ignek.com/contact-us/",
    title: "Contact Us | Liferay Development, Customization & Consulting Experts",
    description: "Contact our team for Liferay development, customization, support, and digital transformation services tailored to your business needs.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}
const FacebookIcon = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
)

const XIcon = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5A4.26 4.26 0 0 0 20.5 16.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7zm4.75-.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26z"
      clipRule="evenodd"
    />
  </svg>
)

// --- TYPES FOR PROPS ---
type FormInputProps = {
  label: string
  placeholder: string
  type?: string
}

type FormTextAreaProps = {
  label: string
  placeholder: string
  rows?: number
}

const FormInput = ({
  label,
  placeholder: _placeholder,
  type = "text",
}: FormInputProps) => (
  <div className="relative z-0 w-full">
    <input
      type={type}
      id={label}
      className="peer block w-full appearance-none border-0 border-b-2 border-gray-600 bg-transparent py-3.5 px-0 text-lg text-white focus:border-white focus:outline-none focus:ring-0"
      placeholder=" " // Required for the floating label to work
    />
    <label
      htmlFor={label}
      className="absolute top-1 -z-10 origin-[0] -translate-y-8 scale-75 transform text-3xl text-medium text-[#FFFFFF] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-white"
    >
      {label}
    </label>
    {/* <span className="text-sm text-[#DBD3D3]">{placeholder}</span> */}
  </div>
)

const FormTextArea = ({
  label,
  placeholder: _placeholder,
  rows = 6,
}: FormTextAreaProps) => (
  <div className="relative z-0 w-full">
    <textarea
      id={label}
      rows={rows}
      className="peer block w-full appearance-none border-0 border-b-2 border-gray-600 bg-transparent py-3.5 px-0 text-lg text-white focus:border-white focus:outline-none focus:ring-0"
      placeholder=" " // This space is required for the floating label to work
    />
    <label
      htmlFor={label}
      className="absolute top-1 -z-10 origin-[0] -translate-y-8 scale-75 transform text-3xl text-medium text-[#FFFFFF] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-white"
    >
      {label}
    </label>
    {/* The span is now removed. The 'placeholder' prop is no longer used. */}
  </div>
)

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative pt-16 pb-16 md:pb-16">
        {/* Main Content with standard padding */}
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Top Section: Title and Description */}
          <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-5">
            <h1 className="text-5xl leading-tight font-semibold sm:text-9xl md:col-span-2 md:text-8xl">Contact us</h1>
            <p className="text-xl leading-[30px] font-normal tracking-normal text-[#FFFFFF] md:col-span-3 md:text-right">
              Get in touch for inquiries about our properties. We&apos;re here to offer expert <br />
              advice, personalized solutions, and exceptional service to meet all your needs effectively.
            </p>
          </div>

          {/* Divider */}
          <hr className="my-12 border-t border-[#4D464A]" />

          {/* Bottom Section: Info and Form */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Left Side: "Lets Start Conversation" */}
            <div className="flex flex-col">
              <h2 className="letter-spacing-[-0.02em] text-5xl font-semibold tracking-tight">
                Lets Start Conversation
              </h2>
              <p className="mt-6 max-w-lg text-lg text-[#FFFFFF]">
                We at IGNEK appreciate your questions, comments, and teamwork. Whether you have enquiries about our
                projects or would like to discuss our services.
              </p>

              {/* Info Blocks */}
              <div className="mt-9 flex flex-col gap-8 sm:flex-row sm:gap-26">
                <div className="flex max-w-[304px] flex-col gap-2">
                  <h3 className="text-lg text-[#DBD3D3]">Email address</h3>
                  <a href="mailto:sales@ignek.com" className="mt-0.5 text-base text-white hover:text-blue-400">
                    sales@ignek.com
                  </a>
                </div>
                <div className="flex max-w-[304px] flex-col gap-2">
                  <h3 className="text-lg text-[#DBD3D3]">Phone number</h3>
                  <a href="tel:+016351575560" className="mt-0.5 text-base text-white hover:text-blue-400">
                    +01 63515 75560
                  </a>
                </div>
              </div>

              {/* Follow Us */}
              <div className="mt-9.5 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-32">
                <h3 className="text-lg text-[#FFFFFF]">Follow us on</h3>
                <div className="flex space-x-5">
                  <a href="https://www.facebook.com/ignekinfo/" className="text-white/80 hover:text-white" aria-label="Facebook" target="blank">
                    <FacebookIcon />
                  </a>
                  <a href="https://x.com/ignekinfotech" className="text-white/80 hover:text-white" aria-label="X" target="blank">
                    <XIcon />
                  </a>
                  <a href="https://www.linkedin.com/company/ignek-infotech/about/" className="text-white/80 hover:text-white" aria-label="LinkedIn" target="blank">
                    <LinkedInIcon />
                  </a>
                  <a href="https://www.instagram.com/_ignek/" className="text-white/80 hover:text-white" aria-label="Instagram" target="blank">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            {/* Right Side: Form */}
            <div className="w-full">
              <form action="#" method="POST">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                  {/* Form Inputs */}
                  <FormInput label="Full Name" placeholder="John Carter" />
                  <FormInput label="Email Address" placeholder="example@youremail.com" type="email" />
                  <FormInput label="Phone Number" placeholder="(123) 456 - 7890" type="tel" />
                  <FormInput label="Service" placeholder="ex. Liferay Consulting" />
                </div>

                {/* Message Textarea */}
                <div className="mt-12">
                  <FormTextArea label="Message" placeholder="Type your message here..." rows={3} />
                </div>

                {/* Submit Button */}
                <div className="mt-16">
                  <button
                    type="submit"
                    className="rounded-full bg-white px-10 py-4 text-lg font-semibold text-black transition-transform hover:scale-105"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW OFFICE SECTION --- */}
      <section className="bg-white py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Header part */}
          <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
                Our Offices locations in india
                <br />
                and United Arab Emirates
              </h2>
            </div>
            <div className="flex h-full items-end justify-end">
              <p className="text-normal line-height-[30px] w-full text-right text-xl text-[#374151]">
                We have offices in India and the United Arab Emirates, providing seamless regional support and collaboration for our global clients.{" "}
              </p>
            </div>
          </div>

          {/* Locations List */}
          <div className="flex flex-col gap-7.5">
            {/* Location 1: Ahmedabad */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-10">
              {/* Left Side: Image */}
              <div className="">
                <Image
                  src="/images/ahmedabad.png"
                  alt="Ahmedabad Office Location"
                  width={853}
                  height={341}
                  objectFit="contain"
                  className="w-[853px] h-[341px]"
                />
              </div>
              {/* Right Side: Details (Flex container for content and divider) */}
              <div className="mt-6 md:mt-0 md:w-1/2 md:pl-3.5 flex flex-col">
                <div> {/* Wrapper for the actual details */}
                  <h3 className="text-4xl font-semibold text-[#151314] letter-spacing-[-0.02em]">Ahmedabad, India</h3>
                  <p className="mt-4 text-lg text-[#4D464A]">
                    E 910- 912, Ganesh Glory 11, Jagatpur Road, SG Highway,
                    <br />
                    Ahmedabad, Gujarat – 382470
                  </p>
                  <div className="mt-24 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-16">
                    <div className="flex flex-col gap-1 min-w-[232px]">
                      <h4 className="text-xl font-medium text-[#766C72]">Email address</h4>
                      <a
                        href="mailto:sales@ignek.com"
                        className="text-lg font-medium text-[#151314] hover:text-blue-600"
                      >
                        sales@ignek.com
                      </a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-medium text-[#766C72]">Phone number</h4>
                      <a
                        href="tel:+916351578580"
                        className="text-lg font-medium text-[#151314] hover:text-blue-600"
                      >
                        (+91) 635 157 8580
                      </a>
                    </div>
                  </div>
                </div>

                {/* --- Divider now *inside* the right-hand details column --- */}
                <hr className="mt-25 border-t border-[#DBD3D3] w-full" />
              </div>
            </div>

            {/* Location 2: UAE (starts after the divider of Location 1's details) */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-10">
              {/* Left Side: Image */}
              <div className="">
                <Image
                  src="/images/uae.png"
                  alt="United Arab Emirates Office Location"
                  width={853}
                  height={341}
                  objectFit="contain"
                  className="w-[853px] h-[341px]"
                />
              </div>
              {/* Right Side: Details (no divider here as it's the last location) */}
              <div className="mt-6 md:mt-4 md:w-1/2 md:pl-3.5">
                <h3 className="text-4xl font-semibold text-black">United Arab Emirates</h3>
                <p className="mt-4 text-lg text-[#4D464A]">
                  office Number : 09-106, Arabian Sky Business center ,
                  <br />
                  Umm Hurrair 2 Dubai UAE
                </p>
                <div className="mt-24 flex flex-col gap-8 sm:flex-row sm:gap-16">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-medium text-[#766C72]">Email address</h4>
                    <a
                      href="mailto:newyork@konstruktion.com"
                      className="text-lg font-medium text-[#151314] hover:text-blue-600"
                    >
                      connect@ignek.com
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-medium text-[#766C72]">Phone number</h4>
                    <a
                      href="tel:+4146781903"
                      className="text-lg font-medium text-[#151314] hover:text-blue-600"
                    >
                      +97 154 219 8252
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}