"use client"
import { contactContent, contactLeftSection, officeLocationsData, officeLocationsSection } from "data/contact"
import { Metadata } from "next"
import Image from "next/image"
import React from "react"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"

const metadata: Metadata = {
  title: "Contact IGNEK | Speak With Liferay DXP Experts",
  description:
    "Contact IGNEK for Liferay DXP consulting, support, and implementation inquiries. Connect with our experts for guidance on digital experience solutions.",

  openGraph: {
    url: "https://www.ignek.com/contact-us/",
    title: "Contact IGNEK | Speak With Liferay DXP Experts",
    description:
      "Contact IGNEK for Liferay DXP consulting, support, and implementation inquiries. Connect with our experts for guidance on digital experience solutions.",
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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.9234 1.28401C11.6302 1.63801 10.153 3.15481 9.8746 5.43961C9.8482 5.65441 9.8278 6.52801 9.8278 7.46521V9.11401H6.3418V12.936H9.8278V22.806H13.9858V12.936H15.7294C16.687 12.936 17.4718 12.9288 17.4718 12.9204L17.7238 11.0532C17.863 10.0344 17.9758 9.18121 17.9758 9.15721C17.9758 9.12841 17.329 9.11401 15.9814 9.11401H13.9858V7.79401C13.9858 6.00721 14.0386 5.68081 14.389 5.29201C14.563 5.10001 14.7286 5.00401 15.0778 4.89001C15.2734 4.82761 15.5266 4.81201 16.7158 4.79161L18.1234 4.76761L18.1342 3.06001L18.145 1.35361L17.8822 1.32721C16.7026 1.20841 14.5654 1.18561 13.9234 1.28401Z"
      fill="white"
    />
  </svg>
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.03823 1.85883C2.59463 3.85443 9.36503 12.7908 9.35063 12.8304C9.33263 12.876 2.41583 21.0312 1.64543 21.9132L1.41623 22.176H3.15383L4.89263 22.1748L7.89503 18.6456C8.91983 17.442 9.94343 16.2372 10.9634 15.03C11.027 14.9484 11.1482 15.1008 13.7918 18.5604L16.553 22.176H23.6918L23.507 21.9348C20.5118 18.0228 14.8526 10.596 14.8382 10.5564C14.8214 10.5156 18.3758 6.29883 21.7454 2.36283L22.2206 1.80603H20.4866L18.7526 1.80723L15.9662 5.08203C14.4338 6.88443 13.1678 8.35683 13.1522 8.35563C13.1366 8.35443 12.0014 6.87963 10.6286 5.07963L8.13383 1.80603H4.56503C1.71623 1.80603 1.00463 1.81683 1.03823 1.85883ZM13.2686 11.9916L19.4282 20.0556L18.5246 20.0664C17.633 20.0772 17.621 20.076 17.531 19.9824C17.4818 19.9296 14.7518 16.362 11.4638 12.054C8.17703 7.74603 5.43143 4.14963 5.36423 4.06323L5.24063 3.90483L6.17423 3.91563L7.10903 3.92763L13.2686 11.9916Z"
      fill="white"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.38079 1.29481C2.65839 1.47841 2.08119 1.92841 1.76919 2.55001C1.56159 2.96401 1.49559 3.67321 1.61799 4.19041C1.81239 5.01721 2.48079 5.67601 3.36039 5.90881C3.73239 6.00721 4.54239 6.00721 4.91439 5.90881C6.47679 5.49601 7.19919 3.93481 6.49239 2.49721C6.23679 1.97881 5.75559 1.56601 5.16159 1.35601C4.74399 1.20841 3.83919 1.17721 3.38079 1.29481ZM16.9576 7.62241C16.2616 7.73641 15.634 7.98241 15.0676 8.36401C14.7268 8.59321 14.1616 9.14161 13.888 9.50881L13.672 9.79921L13.66 8.84761L13.6492 7.89601H9.00999V21.756H13.6504L13.6516 17.6292C13.6516 13.0632 13.6456 13.176 13.9216 12.6516C14.5144 11.5236 15.5584 11.0184 16.7692 11.2752C17.7736 11.4888 18.3364 12.2844 18.4804 13.692C18.5032 13.9176 18.5212 15.7584 18.5212 17.9232L18.5224 21.756H23.1424V17.4792C23.1424 14.766 23.1256 13.0344 23.098 12.744C22.942 11.154 22.4476 9.94321 21.592 9.05761C20.9008 8.33521 20.0008 7.84681 19.018 7.66321C18.5332 7.56721 17.428 7.54561 16.9576 7.62241ZM1.80639 14.826V21.756H6.46839V7.89601H1.80639V14.826Z"
      fill="white"
    />
  </svg>
)

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.21081 1.26239C5.72921 1.40879 4.57841 1.82039 3.40001 2.98199C2.26001 4.10399 1.82441 5.20439 1.62881 7.45559C1.55081 8.34839 1.55081 15.6336 1.62881 16.5276C1.82441 18.7776 2.26001 19.8756 3.39881 21C4.59161 22.1772 5.73761 22.578 8.31521 22.7208C9.31481 22.776 15.3136 22.7772 16.3588 22.7208C18.9556 22.584 20.134 22.1616 21.3544 20.9328C22.5856 19.6932 22.9792 18.4848 23.098 15.582C23.1532 14.2536 23.1532 9.72839 23.098 8.39999C22.9792 5.49719 22.5856 4.28879 21.3544 3.04919C20.2384 1.92599 19.2472 1.52039 17.0728 1.29599C16.5112 1.23839 9.08681 1.20959 8.21081 1.26239ZM18.6148 4.89839C18.88 4.98359 19.2028 5.27999 19.3444 5.57039C19.672 6.23999 19.3228 7.08359 18.6088 7.35359C17.9968 7.58519 17.2948 7.30319 16.9744 6.69959C16.8796 6.51959 16.8628 6.43679 16.8628 6.13199C16.8616 5.71679 16.9588 5.46839 17.2252 5.20199C17.6032 4.82399 18.0628 4.72319 18.6148 4.89839ZM13.3384 6.49079C14.4388 6.68159 15.4636 7.22639 16.2964 8.06159C17.35 9.09719 17.9404 10.5144 17.9332 11.9916C17.9404 13.4676 17.35 14.8848 16.2964 15.9192C15.1984 17.0172 13.8832 17.5656 12.3472 17.5668C11.2336 17.5788 10.1416 17.25 9.21881 16.626C8.79521 16.3488 8.01521 15.576 7.73801 15.1608C6.24161 12.9192 6.47801 10.038 8.31281 8.13359C9.60161 6.77039 11.4928 6.15119 13.3384 6.49079ZM11.6356 8.35919C10.258 8.64479 9.15401 9.67319 8.76881 11.0256C8.62961 11.5116 8.62961 12.4704 8.76881 12.9576C9.11201 14.172 10.042 15.1332 11.2456 15.5148C12.5092 15.9132 13.8904 15.5964 14.854 14.6868C15.3544 14.2296 15.718 13.6416 15.9028 12.99C16.0036 12.66 16.0156 12.5544 16.0156 11.9916C16.0156 11.4276 16.0036 11.322 15.9028 10.992C15.718 10.3404 15.3544 9.75239 14.854 9.29519C14.4664 8.92559 14.0008 8.64719 13.4908 8.48159C13.1116 8.35439 13.036 8.34359 12.4528 8.33279C12.1804 8.32199 11.9068 8.33159 11.6356 8.35919Z"
      fill="white"
    />
  </svg>
)

// --- TYPES FOR PROPS ---
type FormInputProps = {
  label: string
  placeholder: string
  name: string
  type?: string
  required?: boolean
}

type FormTextAreaProps = {
  label: string
  placeholder: string
  name: string
  rows?: number
  required?: boolean
}

const FormInput = ({ label, placeholder, name, type = "text", required = false }: FormInputProps) => (
  <div className="relative z-0 w-full">
    <label
      htmlFor={label}
      className="text-medium top-1 z-10 origin-[0] -translate-y-8 scale-75 transform text-xl text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-white lg:text-3xl"
    >
      {label}
    </label>
    <input
      type={type}
      id={label}
      name={name}
      required={required}
      className="peer block w-full appearance-none border-0 border-b-2 border-gray-600 bg-transparent px-0 py-3.5 text-base text-white placeholder-[#DBD3D3] focus:border-white focus:ring-0 focus:outline-none lg:text-xl"
      placeholder={placeholder} // visible only on focus
    />
  </div>
)

const FormTextArea = ({ label, placeholder, name, rows = 6, required = false }: FormTextAreaProps) => (
  <div className="relative z-0 w-full">
    <label
      htmlFor={label}
      className="text-medium top-1 z-10 origin-[0] -translate-y-8 scale-75 transform text-xl text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-white lg:text-3xl"
    >
      {label}
    </label>
    <textarea
      id={label}
      name={name}
      required={required}
      rows={rows}
      className="peer block w-full appearance-none border-0 border-b-2 border-gray-600 bg-transparent px-0 py-3.5 text-base text-white placeholder-[#DBD3D3] focus:border-white focus:ring-0 focus:outline-none md:text-xl"
      placeholder={placeholder} // visible only on focus
    />
  </div>
)

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  })
  const [phone, setPhone] = React.useState<string | undefined>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setStatus({ type: "idle", message: "" })

    if (phone && !isValidPhoneNumber(phone)) {
      setStatus({ type: "error", message: "Please enter a valid phone number." })
      setLoading(false)
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", "f4dec7fc-2afe-4db7-9612-886b779847e9")
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      await response.json()
      if (response.ok) {
        setStatus({ type: "success", message: "Thanks for your message. We will get back to you soon." })
        form.reset()
        setPhone("")

        // ⏳ Hide message after 4 seconds
        setTimeout(() => {
          setStatus({ type: "idle", message: "" })
        }, 4000)
      } else {
        setStatus({ type: "error", message: "Failed to send message." })

        // ⏳ Hide error after 4 seconds
        setTimeout(() => {
          setStatus({ type: "idle", message: "" })
        }, 4000)
      }
    } catch (err) {
      console.log(err)
      setStatus({ type: "error", message: "Network error. Please try again later." })
    } finally {
      setLoading(false)
    }
  }
  return (
    <main className="bg-black text-white">
      <section className="relative -mt-px pt-32 pb-16 md:pt-44 md:pb-16">
        {/* Main Content with standard padding */}
        <div className="global-container mx-auto w-full px-5 md:px-10 lg:px-0">
          {/* Top Section: Title and Description */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-5 lg:gap-10">
            <h1 className="font-semibold text-white lg:col-span-2 lg:font-medium!">{contactContent.title}</h1>
            <p className="font-regular text-p16 lg:text-p18 right-0 tracking-normal text-[#FFFFFF] lg:col-span-3 lg:text-right">
              {contactContent.description}
            </p>
          </div>

          {/* Divider */}
          <hr className="my-5.5 border-t border-[#4D464A] sm:my-5.5 md:my-8 lg:my-12" />

          {/* Bottom Section: Info and Form */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Side: "Lets Start Conversation" */}
            <div className="flex flex-col">
              <h2 className="font-semibold">{contactLeftSection.title}</h2>
              <p className="font-regular! text-p16 lg:text-p18 mt-3 max-w-xl text-left! text-lg text-[#FFFFFF]">
                {contactLeftSection.description}
              </p>

              {/* Info Blocks */}
              <div className="mt-9 flex flex-row gap-6 sm:gap-26">
                {contactLeftSection.infoBlocks.map((item) => (
                  <div key={item.id} className="flex max-w-[304px] flex-col gap-2">
                    <h3 className="text-p18! font-medium! text-[#DBD3D3]">{item.label}</h3>

                    <a href={item.href} className="text-p16 text-white hover:text-blue-400">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Follow Us */}
              <div className="mt-9 flex flex-row gap-12 sm:items-center sm:gap-32">
                <p className="text-p18 font-medium! text-[#FFFFFF]">{contactLeftSection.title2}</p>
                <div className="flex space-x-3 sm:space-x-5">
                  <a
                    href="https://www.facebook.com/ignekinfo/"
                    className="text-white/80 hover:text-white"
                    aria-label="Facebook"
                    target="blank"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://x.com/ignekinfotech"
                    className="text-white/80 hover:text-white"
                    aria-label="X"
                    target="blank"
                  >
                    <XIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ignek-infotech/about/"
                    className="text-white/80 hover:text-white"
                    aria-label="LinkedIn"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/_ignek/"
                    className="text-white/80 hover:text-white"
                    aria-label="Instagram"
                    target="blank"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            {/* Right Side: Form */}
            <div className="w-full">
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-1 xl:grid-cols-2">
                  {/* Form Inputs */}
                  <FormInput label="Full Name" placeholder="ex. John Carter" name="name" required />
                  <FormInput
                    label="Email Address"
                    placeholder="example@youremail.com"
                    name="email"
                    type="email"
                    required
                  />
                  <div className="relative z-0 w-full">
                    <label
                      htmlFor="Phone Number"
                      className="text-medium top-1 z-10 origin-[0] -translate-y-8 scale-75 transform text-xl text-white duration-300 lg:text-3xl"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="IN" // default country
                      value={phone}
                      onChange={setPhone}
                      id="Phone Number"
                      name="phone"
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-600 bg-black bg-transparent px-0 py-3.5 text-base text-white placeholder-[#DBD3D3] focus:border-white focus:ring-0 focus:outline-none lg:text-xl"
                      placeholder="Enter phone number"
                      countrySelectProps={{
                        className: "PhoneInputCountrySelect", // <-- Apply your custom class here
                      }}
                    />
                  </div>

                  <FormInput label="Service" placeholder="ex. Liferay Consulting" name="service" />
                </div>

                {/* Message Textarea */}
                <div className="mt-12">
                  <FormTextArea
                    label="Message"
                    placeholder="Type your message here..."
                    name="message"
                    rows={3}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-8.5 sm:mt-16">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-white px-8.5 py-5 text-lg leading-[1.25rem] font-medium text-black transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  <div className="mt-4 text-sm" aria-live="polite">
                    {status.type === "success" && <span className="text-green-400">{status.message}</span>}
                    {status.type === "error" && <span className="text-red-400">{status.message}</span>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW OFFICE SECTION --- */}
      <section className="bg-white py-[64px] text-black">
        <div className="global-container mx-auto w-full px-4 md:px-8">
          {/* Header part */}
          <div className="mb-6 grid grid-cols-1 items-end gap-4 sm:mb-14.5 lg:mb-22.5 lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="font-semibold text-[#000000]">
                {officeLocationsSection.title}
                <br />
                {/* {officeLocationsSection.title2} */}
              </h2>
            </div>
            <div className="h-full items-center justify-center md:flex">
              <p className="text-p18 text-[#374151] lg:text-right">
                {officeLocationsSection.description} <br /> {officeLocationsSection.description2}{" "}
              </p>
            </div>
          </div>

          {/* Locations List */}
          <div className="flex flex-col gap-7.5">
            {officeLocationsData.map((item) => (
              <div key={item.id} className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
                {/* Image */}
                <div>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={853}
                    height={341}
                    className="sm:h[284px] w[710px] h-[284px] w-[361px] w-[853px] lg:h-[341px]"
                  />
                </div>

                {/* Right Side Content */}
                <div className="mt-6 flex flex-col lg:mt-0 lg:w-1/2 lg:pl-3.5">
                  {/* City + Address */}
                  <h3 className="text-[#151314]">{item.city}</h3>

                  <p className="text-p16 mt-4 text-left! text-[#4D464A]">
                    {item.address.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>

                  {/* Email + Phone */}
                  <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-30 lg:mt-24">
                    <div className="flex min-w-[232px] flex-col gap-1">
                      <p className="text-p18 md:p20 text-[#766C72]">{item.contact.emailLabel}</p>
                      <a href={item.contact.emailHref} className="text-p16 font-medium text-[#151314]">
                        {item.contact.email}
                      </a>
                    </div>

                    <div className="flex min-w-[232px] flex-col gap-1">
                      <p className="text-p18 md:p20 font-medium text-[#766C72]">{item.contact.phoneLabel}</p>
                      <a href={item.contact.phoneHref} className="text-p16 font-medium text-[#151314]">
                        {item.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  {item.showDivider && <hr className="mt-25 hidden w-full border-t border-[#DBD3D3] lg:block" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
