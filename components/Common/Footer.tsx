"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import "./Footer.css"
import { contactDetailsData, footercmpData, menus } from "data/Footer"

export default function Footer() {
  const [hover, setHover] = useState(false)



  return (
    <footer className="relative bg-black text-white">
      {/* Top section: menus with right decorative lines and partial width */}
      <div
        className="footer-sidebar global-container mx-auto flex w-full border-b border-white pl-4 md:pl-8"
        style={{ paddingRight: "0px !important" }}
      >
        <div className="relative w-[80%] pt-12 pb-12 md:pt-16  lg:pb-[94px]">
          <motion.div
            className="pointer-events-none absolute right-0 bottom-0 h-full w-full rounded-br-[19rem] border-r-2 border-b-2 border-white"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
          />
          <div className="auto-grid">
            <>
              {menus.map((menu) => (
                <div key={menu.title}>
                  <p className="footer-text-header leading-[1.9rem] font-semibold! text-white">{menu.title}</p>
                  <ul className="mt-6 tracking-[2%] text-white">
                    {menu.items.map((it) => (
                      <li className="" key={it.label}>
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
        <div className="animate-drawLine w-[20%] border-l"></div>
      </div>

      {/* Bottom section: contacts + big logo + motto + bottom bar */}
      <div className="global-container mx-auto flex w-full pl-4 md:pl-8" style={{ paddingRight: "0px !important" }}>
        <div className="w-[80%] pt-12 pr-4 pb-20 md:pt-16 md:pr-8 md:pb-4">
          <div className="contact-grid">
        {/* 1. Emails Column */}
      <div>
        <p className="contact-header">{contactDetailsData.title}</p>
        {contactDetailsData.emails.map((item, i) => (
      <div key={i} className="contact-group">
        <Link href={item.href} className="contact-title">
          {item.label}
        </Link>
        <div className="contact-sub">{item.sub}</div>
      </div>
    ))}
      </div>
           {/* 2. Call Column */}
      <div>
        <p className="contact-header">{contactDetailsData.titleCall}</p>
        {contactDetailsData.calls.map((item, i) => (
      <div key={i} className="contact-group">
        <Link href={item.href} className="contact-title">
          {item.label}
        </Link>
        <div className="contact-sub">{item.sub}</div>
      </div>
    ))}
      </div>
          {/* 3. Office Column */}
      <div>
        <p className="contact-header">{contactDetailsData.titleOffice}</p>
        {contactDetailsData.offices.map((item, i) => (
      <div key={i} className="office-group">
        <p className="contact-title">{item.label}</p>
        {item.sub && <div className="contact-sub">{item.sub}</div>}
      </div>
    ))}
      </div>
          </div>
          {/* Big brand logo */}
          <div
            className="gradient-box right-[2.24vw]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
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
                {footercmpData.title}
              </text>
            </svg>
          </div>
          <p className="mt-[0.833vw] text-center text-[1.25vw] leading-[1.666vw] tracking-[0.8em] text-white">
            {footercmpData.description}
          </p>
        </div>
        <div className="relative w-[20%] border-l border-white">
          <motion.div
            className="absolute top-0 left-0 h-[100%] w-[100%] rounded-tl-full border-t-2 border-l-2 border-white"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          />
        </div>
      </div>
    </footer>
  )
}
