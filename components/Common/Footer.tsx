"use client"
import { useState  } from "react";
import Link from "next/link";
import { motion} from "framer-motion";
import "./Footer.css"

export default function Footer() {
  const [hover, setHover] = useState(false)

  const menus: { title: string; items: { label: string; href: string }[] }[] = [
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Career", href: "/career" },
        { label: "Case Study", href: "#" },
        { label: "Blogs", href: "#" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Enterprise Websites", href: "#" },
        { label: "Employee Experience", href: "#" },
        { label: "Digital Commerce", href: "#" },
        { label: "Partner Experience", href: "#" },
        { label: "Supplier Experience", href: "#" },
        { label: "Customer Experience", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Enterprise Portal Development", href: "#" },
        { label: "Dedicated Development Team", href: "#" },
        { label: "Back-end Development", href: "#" },
        { label: "Front-end Development", href: "#" },
        { label: "Digital Transformation", href: "#" },
        { label: "SaaS Development", href: "#" },
      ],
    },
    {
      title: "Integrations",
      items: [
        { label: "Matomo Integration with Liferay", href: "#" },
        { label: "Microsoft Teams integration with Liferay", href: "#" },
        { label: "Jira Integration With Liferay", href: "#" },
      ],
    },
    {
      title: "Hire Us",
      items: [
        { label: "Liferay", href: "#" },
        { label: "Spring Boot", href: "#" },
        { label: "ReactJS", href: "#" },
        { label: "Healthcare", href: "#" },
      ],
    },
  ]

  return (
    <footer className="relative bg-black text-white">
      {/* Top section: menus with right decorative lines and partial width */}
      <div className="mx-auto flex w-full border-b border-white/100 pl-4 md:pl-8 [@media(min-width:1440px)]:pl-[192px] [@media(min-width:1920px)]:pl-[192px]">
        <div className="relative w-[80%] pt-12 pr-4 pb-20 md:pt-16 md:pr-8 md:pb-24 [@media(min-width:1440px)]:pr-[192px] [@media(min-width:1920px)]:pr-[192px]">
          <motion.div
            className="absolute right-0 bottom-0 h-full w-full rounded-br-[19rem] border-r-2 border-b-2 border-white/100"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
            <>
              {menus.map((menu) => (
                <div key={menu.title}>
                  <h4 className="text-2xl font-semibold text-white/90">{menu.title}</h4>
                  <ul className="mt-5 space-y-3 text-xl text-white/80">
                    {menu.items.map((it) => (
                      <li key={it.label}>
                        <Link href={it.href} className="hover:text-white">
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
      <div className="mx-auto flex w-full pl-4 md:pl-8 [@media(min-width:1440px)]:pl-[192px] [@media(min-width:1920px)]:pl-[192px]">
        <div className="w-[80%] pt-12 pr-4 pb-20 md:pt-16 md:pr-8 md:pb-24 [@media(min-width:1440px)]:pr-[192px] [@media(min-width:1920px)]:pr-[192px]">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h5 className="text-2xl font-semibold">Emails</h5>
              <div className="mt-4 space-y-3 text-xl text-white/80">
                <div>
                  <Link href="mailto:sales@ignek.com" className="hover:text-white">
                    sales@ignek.com
                  </Link>
                  <div className="text-lg text-gray-600">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="mailto:hr@ignek.com" className="hover:text-white">
                    Hr@ignek.com
                  </Link>
                  <div className="text-lg text-gray-600">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">Call</h5>
              <div className="mt-4 space-y-3 text-xl text-white/80">
                <div>
                  <Link href="tel:+916351576580" className="hover:text-white">
                    (+91) 635 157 6580
                  </Link>
                  <div className="text-lg text-gray-600">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="tel:+919328495160" className="hover:text-white">
                    (+91) 932 849 5160
                  </Link>
                  <div className="text-lg text-gray-600">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">Office</h5>
              <p className="mt-4 text-xl text-white/80">
                E 910-912, Ganesh Glory 11, Jagatpur Road, SG Highway, Ahmedabad, Gujarat - 382470
              </p>
            </div>
          </div>
          {/* Big brand logo */}
          <div className="gradient-box" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <svg width="1350" height="500">
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
          <p className="spacing-7 mt-4 text-center text-2xl tracking-[0.3em] text-white/80">
            DRIVING DIGITAL SOLUTIONS
          </p>
        </div>
        <div className="relative w-[20%] border-l border-white">
          <motion.div
            className="absolute top-0 left-0 h-[100%] w-[100%] rounded-tl-full border-t-2 border-l-2 border-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          />
        </div>
      </div>
    </footer>
  )
}
