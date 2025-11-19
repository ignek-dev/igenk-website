"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import "./Footer.css"

export default function Footer() {
  const [hover, setHover] = useState(false)

  const menus: { title: string; items: { label: string; href: string }[] }[] = [
    {
      title: "Company",
      items: [
        { label: "About", href: "/about-us" },
        { label: "Career", href: "/career" },
        { label: "Case Study", href: "/case-study" },
        { label: "Blogs", href: "/blog" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Enterprise Websites", href: "/contact" },
        { label: "Employee Experience", href: "/contact" },
        { label: "Digital Commerce", href: "/contact" },
        { label: "Partner Experience", href: "/contact" },
        { label: "Supplier Experience", href: "/contact" },
        { label: "Customer Experience", href: "/contact" },
      ],
    },
    {
      title: "Liferay Services",
      items: [
        { label: "Development and Customization", href: "/services/liferay-development-and-customization" },
        // { label: "Theme Development", href: "/services/liferay-theme-development" },
        { label: "Expert Advice", href: "/services/liferay-expert-advice" },
        { label: "Proof Of Concept", href: "/services/liferay-proof-of-concept" },
        { label: "Ecommerce Development", href: "/services/liferay-ecommerce-development" },
        { label: "Migration", href: "/services/liferay-migration" },
        { label: "Support And Maintenance", href: "/services/liferay-support-and-maintenance" },
        { label: "Performance Tuning", href: "/services/liferay-performance-tuning" },
        { label: "Upgradation", href: "/services/liferay-upgrade" },
        { label: "Architecture Service", href: "/services/liferay-architecture-design" },
        { label: "Consultation", href: "/services/liferay-consulting-and-implementation-services" },
      ],
    },
    {
      title: "Integrations",
      items: [
        { label: "Matomo Integration with Liferay", href: "/contact" },
        { label: "Microsoft Teams integration with Liferay", href: "/contact" },
        { label: "Jira Integration With Liferay", href: "/contact" },
      ],
    },
    // {
    //   title: "Hire Us",
    //   items: [
    //     { label: "Liferay", href: "/contact" },
    //     { label: "Spring Boot", href: "/contact" },
    //     { label: "ReactJS", href: "/contact" },
    //     { label: "Healthcare", href: "/contact" },
    //   ],
    // },
  ]

  return (
    <footer className="relative bg-black text-white">
      {/* Top section: menus with right decorative lines and partial width */}
      <div className="footer-sidebar global-container mx-auto flex w-full border-b border-white/100 pl-4 md:pl-8 ">
        <div className="relative pt-12 pr-4 pb-20 md:pt-16 md:pb-24">
          <motion.div
            className="pointer-events-none absolute right-0 bottom-0 h-full w-full rounded-br-[19rem] border-r-2 border-b-2 border-white/100"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ amount:0.2}}
            transition={{ duration: 0.9, ease: "easeIn" }}
          />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
            <>
              {menus.map((menu) => (
                <div key={menu.title}>
                  <h4 className="text-2xl font-semibold text-white leading-[1.8rem]">{menu.title}</h4>
                  <ul className="mt-5 space-y-8 font-regular text-xl text-white leading-[1.8rem] tracking-[2%] ">
                    {menu.items.map((it) => (
                      <li key={it.label}>
                        <Link href={it.href} className="cursor-pointer hover:text-white">
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          </div>
        </div>
        <div className="animate-drawLine border-l [@media(min-width:1440px)]:w-[21.8%] [@media(min-width:1536px)]:w-[21%] [@media(min-width:1839px)]:w-[18.8%] [@media(min-width:1920px)]:w-[12.5%]"></div>
      </div>

      {/* Bottom section: contacts + big logo + motto + bottom bar */}
      <div className="global-container mx-auto flex w-full pl-4 md:pl-8" style={{ paddingRight: "0px !important" }}>
        <div className="w-[80%] pt-12 pr-4 pb-20 md:pt-16 md:pr-8 md:pb-4">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h5 className="text-2xl font-semibold leading-[2rem] text-white">Emails</h5>
              <div className="mt-4 space-y-3 text-xl font-semibold leading-[1.8rem] text-white">
                <div>
                  <Link href="mailto:sales@ignek.com" className="hover:text-white">
                    sales@ignek.com
                  </Link>
                  <div className="text-base text-[#9CA3AF] leading-[1.5rem]">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="mailto:hr@ignek.com" className="hover:text-white">
                    hr@ignek.com
                  </Link>
                  <div className="text-base text-[#9CA3AF] leading-[1.5rem]">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">Call</h5>
              <div className="mt-4 space-y-3 text-xl font-semibold leading-[1.8rem] text-white">
                <div>
                  <Link href="tel:+916351576580" className="hover:text-white">
                    (+91) 635 157 6580
                  </Link>
                  <div className="text-base text-[#9CA3AF] leading-[1.5rem]">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="tel:+919328495160" className="hover:text-white">
                    (+91) 932 849 5160
                  </Link>
                  <div className="text-base text-[#9CA3AF] leading-[1.5rem]">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
             <h5 className="text-2xl leading-[2rem] font-semibold text-white">Office</h5>
              <p className="mt-4 max-w-xl text-xl leading-[1.8rem] font-semibold text-white mb-3 whitespace-wrap">
                E 910-912, Ganesh Glory 11, Jagatpur Road, SG Highway, Ahmedabad, Gujarat - 382470 (Headquarter) <br />
              </p>
              <span className="whitespace-wrap mt-4 max-w-xl text-xl leading-[1.8rem] font-semibold text-white">Dubai, United Arab Emirates <br/> (UAE Branch)</span>
            </div>
          </div>
          {/* Big brand logo */}
          <div className="gradient-box" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <svg className="svg-custom" width="1350" height="500">
              <defs>
                <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#00979E" />
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Poppins"
                fontWeight={600}
                fontStyle="normal"
                fontSize="350px"
                // lineHeight="123.67px"
                letterSpacing="0%"
                fill={hover ? "white" : "url(#textGradient)"} // hover changes to solid white
                style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
              >
                IGNEK
              </text>
            </svg>
          </div>
          <p className="mt-4 text-center text-2xl tracking-[0.7em] text-white">
            DRIVING DIGITAL SOLUTIONS
          </p>
        </div>
        <div className="relative w-[20%] border-l border-white">
          <motion.div
            className="absolute top-0 left-0 h-[100%] w-[100%] rounded-tl-full border-t-2 border-l-2 border-white"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ amount:0.2}}
            transition={{ duration: 0.4, ease: "easeIn" }}
          />
        </div>
      </div>
    </footer>
  )
}
